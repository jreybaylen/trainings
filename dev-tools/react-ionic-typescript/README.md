# ReactJS TypeScript
> Development using typescript

## Installation
```git
$ npm install -g @ionic/cli
$ ionic start --type=react
```

## Package.json
- Install dev dependency for `react-app-rewire-alias` and `react-app-rewired`
- Copy `config-overrides.js` and `tsconfig.base.json`
- Update scripts with the following
```json
{
    "scripts": {
        "postinstall": "npx jetify",
        "ionic:build": "npm run build",
        "ionic:serve": "npm run start",
        "eject": "react-scripts eject",
        "test": "react-app-rewired test",
        "start": "react-app-rewired start",
        "build": "react-app-rewired build"
    }
}
```

## Tsconfig.json
- Add extends to your `tsconfig.json`
```json
{
    "extends": "./tsconfig.base.json"
}