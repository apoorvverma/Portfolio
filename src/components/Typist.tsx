// Wrapper for react-typist to handle CommonJS/ESM interop
import * as TypistModule from 'react-typist';

// Handle both CommonJS default export and ESM module
const Typist = (TypistModule as any).default || TypistModule;

export default Typist;
export const { Cursor, Backspace, Delay } = TypistModule;
