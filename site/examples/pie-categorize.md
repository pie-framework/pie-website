---
title: Categorize
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/categorize@2.10.3"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/categorize/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/categorize/docs/config-schema.json"
model:
    id: '1'
    element: categorize-element
    choices:
    - id: '1'
      content: '! Choice 1 <span data-latex="">\(\frac{2}{1}\)</span>'
    - id: '2'
      content: Choice 2 <span data-latex="">\(\frac{3}{1}\)</span>
    - id: '3'
      content: Choice 3
    - id: '4'
      content: Choice 4
    categories:
    - id: '1'
      label: Category 1
    - id: '2'
      label: Category 2
    correctResponse:
    - {}
    feedback:
      correct:
        type: default
        default: Correct
      incorrect:
        type: default
        default: Incorrect
      partial:
        type: default
        default: Nearly
    scoring:
      weighting:
        enabled: true
        rules:
        - category: '1'
          points: 1
        - category: '2'
          points: 1
      partial:
        enabled: true
        rules:
        - category: '1'
          rules:
          - count: 1
            percent: 50
          - count: 2
            percent: 100
        - category: '2'
          rules: []
    config:
      choices:
        columns: 2
        position: above
        label: Here are the choices \(\frac{1}{2}\)
        shuffle: false
      categories:
        columns: 2
---