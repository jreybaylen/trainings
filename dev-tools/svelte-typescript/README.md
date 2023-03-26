# Svelte TypeScript
> Development using typescript

## Installation
```git
$ npx degit sveltejs/template svelte-app
$ cd svelte-app
$ node scripts/setupTypeScript.js
```

## Package.json
- Install `node-sass` for `scss` support
- Install `@rollup/plugin-image` for images
- Install `@rollup/plugin-alias` for directory aliases

## Rollup.config.js
- Add snippets in `rollup.config.js` to your `rollup.config.js`

## *.svelte
- Add `lang="ts"` to all `svelte` component
- Add `type="text/scss"` to all `svelte` component

## Tsconfig.json
- Add your own custom type in `tsconfig.json` to support images
```json
{
  "include": [
    "src/**/*",
    "types.d.ts"
  ]
}
```
