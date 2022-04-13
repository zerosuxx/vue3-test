/* eslint-env node */
module.exports = {
    'root': true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    'env': {
        'vue/setup-compiler-macros': true
    },
    'rules': {
        'quotes': [2, 'single', { 'avoidEscape': true }],
        'indent': ['error', 4]
    },
    'overrides': [
        {
            'files': [
                'cypress/integration/**.spec.{js,ts,jsx,tsx}'
            ],
            'extends': [
                'plugin:cypress/recommended'
            ]
        }
    ]
}
