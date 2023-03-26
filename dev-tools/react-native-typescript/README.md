# React Native TypeScript
> Development using typescript

## Installation
```git
$ npx --ignore-existing react-native init MyApp --template react-native-template-typescript
```

## Package.json
- Add the `script` in `package.json` to your project `package.json`
- Install `babel-plugin-module-resolver` for paths and aliases. Copy 

## .prettierrc.js
```javascript
module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  semi: false,
  trailingComma: false,
}
```

## tsconfig.json
```json
{
    "baseUrl": "./",
    "paths": {
        "@modules/*": [ "src/modules/*" ],
        "@screen/*": [ "src/modules/screens/*" ],
        "@shared/*": [ "src/modules/shared/*" ],
    }
}
```

## babel.config.js
```javascript
module.exports = {
  ...otherConfig,
  plugins: [
    [
      'module-resolver',
      {
        root: [ './src' ],
        extensions: [ '.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json' ],
        alias: {
          '^@modules/(.+)': './src/modules/\\1',
          '^@pages/(.+)': './src/pages/\\1',
        }
      }
    ]
  ]
};
```
