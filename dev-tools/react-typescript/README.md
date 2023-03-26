# ReactJS TypeScript
> Development using typescript

## Installation
```git
$ yarn create react-app my-app --template typescript
```
or
```git
$ npx create-react-app my-app --template typescript
```

## Package.json
- Install dev dependency for `react-app-rewire-alias` and `react-app-rewired`
- Copy `config-overrides.js` and `tsconfig.base.json`
- Update scripts with the following
```json
{
    "scripts": {
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