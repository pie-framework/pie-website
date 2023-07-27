const elementsPath = process.env.PIE_JSON_FILE || "./elements.json";
const elements = require(elementsPath);

const pieDemoRoot =
  "https://cdn.jsdelivr.net/npm/@pie-framework/pie-demo@beta/dist";
 // const pieDemoRoot = "http://localhost:3333/build";
const piePrintSrc = 'https://cdn.jsdelivr.net/npm/@pie-framework/pie-print/lib/pie-print.js';

module.exports = {
  title: "",
  head: [
    ["script", { src: `${pieDemoRoot}/esm/pie-demo.mjs`, type: "module" }],
    ["script", { src: piePrintSrc, type: "module" }],
    // ["script", { src: `${pieDemoRoot}/pie-demo.esm.js`, type: "module" }],
    ["script", { src: `${pieDemoRoot}/pie-demo.js`, nomodule: true }]
  ],
  themeConfig: {
    logrocketProject: process.env.LOGROCKET_PROJECT,
    sentryDsn: process.env.SENTRY_DSN,
    elements: elements,
    logo: "/pie-logo.svg",
    siteTitle: "PIE framework",
    search: false,
    locales: {
      "/": {
        title: "PIE framework",
        nav: [
          { text: "Examples", link: "/examples/pie-categorize" },
          { text: "About", link: "https://github.com/pie-framework" }
        ],
        sidebar: {
          "/examples/": [
            {
              title: "Interactions",
              collapsable: false,
              children: [
                "/examples/pie-categorize",
                "/examples/pie-drag-in-the-blank",
                "/examples/pie-drawing-response",
                "/examples/pie-explicit-constructed-response",
                "/examples/pie-math-inline",
                "/examples/pie-inline-dropdown",
                "/examples/pie-multiple-choice",
                "/examples/pie-number-line",
                "/examples/pie-select-text",
                "/examples/pie-extended-text-entry",
                "/examples/pie-match",
                "/examples/pie-match-list",
                "/examples/pie-placement-ordering",
                "/examples/pie-ebsr",
                "/examples/pie-hotspot",
                "/examples/pie-charting",
                "/examples/pie-graphing",
                "/examples/pie-complex-rubric",
              ]
            },
            {
              title: "Tools",
              collapsable: false,
              children: [
                "/examples/tools/pie-calculator",
                "/examples/tools/pie-protractor",
                "/examples/tools/pie-ruler"
              ]
            }
          ],
          "/changes": ["/changes/introduction.html"],
          "/": [
            "/docs/introduction",
            {
              title: "Using Pie Content",
              collapsable: false,
              children: [
                "/docs/using/quick-start",
                "/docs/using/defining-items",
                "/docs/using/packaging-items",
                "/docs/using/rendering-items",
                "/docs/using/pie-player-api"
              ]
            },
            {
              title: "PIE Development",
              collapsable: false,
              children: [
                "/docs/developing/summary",
                "/docs/developing/custom-element",
                "/docs/developing/controller",
                "/docs/developing/packaging",
                "/docs/developing/environment",
                "/docs/developing/tutorial/development-tutorial"
              ]
            }
          ]
        }
      }
    }
  }
};
