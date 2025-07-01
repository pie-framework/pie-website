---
title: Charting
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/charting@5.0.0"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/charting/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/charting/docs/config-schema.json"
model:
    id: '1'
    element: charting-element
    promptEnabled: true
    chartType: 'bar'
    data:
    - label: 'a'
      value: 1
      interactive: true
    - label: 'b'
      value: 2
      interactive: true
    range: 
      max: 3
      min: 0
      labelStep: 1
    correctAnswer:
      data:
      - label: 'a'
        value: 1
      - label: 'b'
        value: 1
---
