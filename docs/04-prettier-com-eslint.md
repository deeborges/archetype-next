yarn add prettier --exact -D
yarn add eslint-plugin-prettier -D
yarn add eslint-config-prettier -D

- .vscode/settings.json
```json
"editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```

- .eslintrc.json
```json
  "extends": ["plugin:prettier/recommended"]

```
