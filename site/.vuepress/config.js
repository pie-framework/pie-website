module.exports = {
  title: '',
  head: [
    ['script', { src: 'https://unpkg.com/pie-demo@1.9.0/dist/pie-demo.js' }]
  ],
  themeConfig: {
    logo: '/pie-logo.svg',
    siteTitle: 'PIE framework',
    search: false,
    locales: {
      '/': {
        title: 'PIE framework',
        nav: [
          { text: 'Developers', link: '/docs/introduction' },
          { text: 'Examples', link: '/examples/pie-categorize' },
          { text: 'About', link: 'https://github.com/pie-framework' }
        ],
        sidebar: {
          '/examples/': [
            {
              title: 'Integration',
              collapsable: false,
              children: [
                '/examples/pie-categorize',
                '/examples/pie-math-inline',
                '/examples/pie-inline-choice',
                '/examples/pie-multiple-choice',
                '/examples/pie-number-line',
                '/examples/pie-select-text',
                '/examples/pie-text-entry',
                '/examples/pie-extended-text-entry',
                '/examples/pie-graph-lines',
                '/examples/pie-match',
                '/examples/pie-placement-ordering',
                '/examples/pie-point-intercept'
              ]
            },
            {
              title: 'Tools',
              collapsable: false,
              children: [
                '/examples/tools/pie-calculator',
                '/examples/tools/pie-protractor',
                '/examples/tools/pie-ruler'
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
