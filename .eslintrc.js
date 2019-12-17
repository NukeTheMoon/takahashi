module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  // add your custom rules here
  rules: {
    "arrow-parens": [2, "as-needed"],
    camelcase: [
      2,
      {
        ignoreDestructuring: true,
        properties: "never"
      }
    ],
    "comma-dangle": [2, "always-multiline"],
    "consistent-return": "off",
    eqeqeq: "off",
    "import/extensions": [2, "always"],
    "import/no-cycle": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: ["test/unit/index.js"]
      }
    ],
    "import/no-dynamic-require": "off",
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          "ConditionalExpression",
          "DebuggerStatement",
          "CallExpression > MemberExpression"
        ],
        ignoreComments: false
      }
    ],
    "no-console": "off",
    "no-debugger": "off",
    "no-else-return": "off",
    "no-nested-ternary": "off",
    "no-param-reassign": [
      2,
      {
        props: false
      }
    ],
    "no-return-assign": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": [2, { allowTernary: true }],
    "no-unused-vars": [
      2,
      {
        argsIgnorePattern: "commit",
        ignoreRestSiblings: true
      }
    ],
    "no-use-before-define": "off",
    "object-curly-newline": "off",
    semi: [2, "never"],
    "semi-style": "off",
    "space-before-function-paren": [2, "never"],
    "vue/attribute-hyphenation": "off",
    "vue/attributes-order": [2, "on"],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always"
      }
    ],
    "vue/html-closing-bracket-spacing": "off",
    "vue/html-indent": "off",
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    "vue/multiline-html-element-content-newline": "off",
    "vue/no-v-html": "off",
    "vue/order-in-components": [
      2,
      {
        order: [
          "el",
          "name",
          "parent",
          "inheritAttrs",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          "model",
          ["props", "propsData"],
          "LIFECYCLE_HOOKS",
          "watch",
          "data",
          ["template", "render"],
          "methods",
          "computed",
          "renderError"
        ]
      }
    ],
    "vue/require-component-is": "off"
  }
};
