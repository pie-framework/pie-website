module.exports = {
  title: 'PIE Framework',
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/gh/pie-framework/pie-demo-component/dist/pie-demo.js' }]
  ],
  themeConfig: {
    logo: '/pie-logo.svg',
    siteTitle: 'PIE framework',
    search: false,
    locales: {
      '/': {
        title: 'PIE framework',
        nav: [
          { text: 'Documents', link: '/docs/introduction' },
          { text: 'Examples', link: '/examples/pie-categorize' },
          { text: 'About', link: 'https://github.com/pie-framework' }
        ],
        sidebar: {
          '/examples/': [
            {
              title: 'Examples',
              collapsable: false,
              children: [
                '/examples/pie-categorize',
                '/examples/pie-function-entry',
                '/examples/pie-inline-choice',
                '/examples/pie-multiple-choice',
                '/examples/pie-number-line',
                '/examples/pie-select-text',
                '/examples/pie-text-entry'
              ]
            }
          ],
          '/': [
            '/docs/introduction',
            {
              title: 'Using Pie Content',
              collapsable: false,
              children: [
                '/docs/using/quick-start',
                '/docs/using/defining-items',
                '/docs/using/packaging-items',
                '/docs/using/rendering-items',
                '/docs/using/pie-player-api'
              ]
            },
            {
              title: 'PIE Development',
              collapsable: false,
              children: [
                '/docs/developing/summary',
                '/docs/developing/custom-element',
                '/docs/developing/controller',
                '/docs/developing/packaging',
                '/docs/developing/environment',
                '/docs/developing/tutorial/development-tutorial'
              ]
            }
          ]
        }
      }
    }
  }
};
