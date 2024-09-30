import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("plugin:@typescript-eslint/recommended"), {
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2019,
        sourceType: "module",
    },

    rules: {
        semi: ["error", "always"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,

        "@typescript-eslint/no-inferrable-types": ["warn", {
            ignoreParameters: true,
        }],

        "@typescript-eslint/no-unused-vars": "warn",
    },
}];
