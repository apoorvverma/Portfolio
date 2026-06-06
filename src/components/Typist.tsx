// Wrapper for react-typist to handle CommonJS/ESM interop
import React from 'react';

// Import the module - Vite will handle the CommonJS conversion
import * as TypistModule from 'react-typist';

// The module might export default or be the component itself
const TypistComponent = (TypistModule as any).default || TypistModule;

// Validate it's a valid component
const isValidComponent = typeof TypistComponent === 'function' || 
  (typeof TypistComponent === 'object' && TypistComponent.$$typeof);

const Typist = isValidComponent ? TypistComponent : React.Fragment;

export default Typist;
