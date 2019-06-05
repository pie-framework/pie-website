var elements = [
  {
    "name": "x-calculator",
    "version": "2.3.1",
    "label": "Calculator"
  },
  {
    "name": "x-categorize",
    "version": "2.10.3",
    "label": "Categorize"
  },
  {
    "name": "x-ebsr",
    "version": "1.1.3",
    "label": "EBSR"
  },
  {
    "name": "extended-text-entry",
    "version": "3.6.3",
    "label": "Extended Text"
  },
  {
    "name": "drag-in-the-blank",
    "version": "1.1.0",
    "label": "Drag In The Blank"
  },
  {
    "name": "explicit-constructed-response",
    "version": "1.1.0",
    "label": "Explicit Constructed Response"
  },
  {
    "name": "inline-dropdown",
    "version": "1.3.0",
    "label": "Inline Dropdown"
  },
  {
    "name": "x-hotspot",
    "version": "1.0.5",
    "label": "Hotspot"
  },
  {
    "name": "inline-choice",
    "version": "2.3.1",
    "label": "Inline Choice"
  },
  {
    "name": "x-match",
    "version": "1.8.3",
    "label": "Match"
  },
  {
    "name": "match-list",
    "version": "1.1.0",
    "label": "Match List"
  },
  {
    "name": "math-inline",
    "version": "0.3.3",
    "label": "Equation Response"
  },
  {
    "name": "multiple-choice",
    "version": "2.7.2",
    "label": "Multiple Choice"
  },
  {
    "name": "number-line",
    "version": "3.2.1",
    "label": "Number Line"
  },
  {
    "name": "placement-ordering",
    "version": "3.4.3",
    "label": "Placement Ordering"
  },
  {
    "name": "x-protractor",
    "version": "2.2.1",
    "label": "Protractor"
  },
  {
    "name": "x-ruler",
    "version": "3.2.1",
    "label": "Ruler"
  },
  {
    "name": "select-text",
    "version": "3.6.4",
    "label": "Select Text"
  },
  {
    "name": "text-entry",
    "version": "3.3.1",
    "label": "Short Text"
  }
];

if (process.env.PIE_JSON_FILE) {
  elements = require(process.env.PIE_JSON_FILE);
}

console.log('Elements', elements);

module.exports = {
  title: '',
  head: [
    ['script', { src: 'https://unpkg.com/pie-demo@1.20.0/dist/pie-demo.js' }]
  ],
  themeConfig: {
    logrocketProject: process.env.LOGROCKET_PROJECT,
    sentryDsn: process.env.SENTRY_DSN,
    elements: elements,
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
              title: 'Interactions',
              collapsable: false,
              children: [
                '/examples/pie-categorize',
                '/examples/pie-drag-in-the-blank',
                '/examples/pie-explicit-constructed-response',
                '/examples/pie-math-inline',
                '/examples/pie-inline-choice',
                '/examples/pie-inline-dropdown',
                '/examples/pie-multiple-choice',
                '/examples/pie-number-line',
                '/examples/pie-select-text',
                '/examples/pie-text-entry',
                '/examples/pie-extended-text-entry',
                '/examples/pie-match',
                '/examples/pie-match-list',
                '/examples/pie-placement-ordering',
                '/examples/pie-ebsr',
                '/examples/pie-hotspot'
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
          '/changes': [
            '/changes/introduction.html'
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
