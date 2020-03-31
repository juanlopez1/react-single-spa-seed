module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    chrome: '81',
                    firefox: '75',
                    edge: '81',
                    ie: '11',
                    safari: '13',
                    opera: '67'
                },
                useBuiltIns: 'entry',
                modules: false,
                corejs: '3.6'
            }
        ],
        '@babel/preset-react',
        'react-app'
    ],
    plugins: [
        '@babel/plugin-transform-arrow-functions',
        '@babel/proposal-optional-chaining',
        'react-hot-loader/babel'
    ]
};
