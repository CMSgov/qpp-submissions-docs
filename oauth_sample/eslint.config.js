import js from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginNode from 'eslint-plugin-n';
import pluginSecurity from 'eslint-plugin-security';
import pluginUnicorn from 'eslint-plugin-unicorn';

export default [
    js.configs.recommended,
    pluginPrettier,
    pluginNode.configs['flat/recommended'],
    pluginSecurity.configs.recommended,
    pluginUnicorn.configs['flat/recommended'],
    {
        rules: {
            'unicorn/no-null': 'off',
            'unicorn/prevent-abbreviations': 'off',
        },
    },
];
