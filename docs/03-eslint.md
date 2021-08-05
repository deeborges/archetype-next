#### Configuração

- Para funcionar:
  - Habilitar um plugin ESLint no VSCode
  - `npx eslint --init` (To check syntaz and find problems)
  - import/export
  - browser
  - JSON
  - instalar os plugins necessários que o console informou, como plugins de desenvolvimento

#### Regras inseridas

- **eslint-plugin-react-hooks**

  - é necessário para que a gente consiga analisar se os hooks estão sendo utilizados de forma correta.
  - `yarn add eslint-plugin-react-hooks -D`
  - adicionar o plugin

  ```
    "plugins": ["react-hooks"]
  ```

  - adicionar as regras

  ```
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    }
  ```

- **react/prop-types**

  - como vou estar utilizando o TypeScript, e pra não ficar dando warnings, eu desligo essa regra
  - evita conflito com o typescript

  ```
    "rules": {
      "react/prop-types": "off"
    }
  ```

- **react/react-in-jsx-scope**

  - como o next já possue integração global com React, não se faz necessário ficar importando o React nos arquivos.

  ```
    "rules": {
      "react/react-in-jsx-scope": "off",
    }
  ```

- **explicit-module-boundary-types**
  - não precisa explicitar o retorno para as funções que forem exportadas
  ```
    "rules": {
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }
  ```
