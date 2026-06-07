/// <reference types="astro/client" />

// @fontsource packages ship CSS and provide no type declarations for the bare
// side-effect import. Declare them so `astro check` (strict) is satisfied.
// (The `...woff2?url` import is already typed by astro/client.)
declare module '@fontsource-variable/inter';
declare module '@fontsource-variable/space-grotesk';
