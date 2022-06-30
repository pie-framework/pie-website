---
title: Graphing
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/graphing@4.1.0"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/graphing/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/graphing/docs/config-schema.json"
model:
    id: '1'
    element: graphing-element
    promptEnabled: true
    domain:
        min: -10
        max: 10
        step: 1    
    range:
        min: -10
        max: 10
        step: 1
    backgroundMarks:
    - type: 'point'
      x: 2
      y: 2
---
