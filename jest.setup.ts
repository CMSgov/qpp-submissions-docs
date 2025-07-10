import { TextEncoder, TextDecoder } from 'util';

// polyfill before any tests or imports run
;(global as any).TextEncoder = TextEncoder;
;(global as any).TextDecoder = TextDecoder;
