module.exports = function (plop) {
  plop.setGenerator('component', {
    description: '',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styled.ts',
        templateFile: 'templates/styled.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{name}}.spec.tsx',
        templateFile: `templates/test.spec.tsx.hbs`
      }
    ]
  });
};
