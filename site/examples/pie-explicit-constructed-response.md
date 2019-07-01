---
title: Explicit Constructed Response
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/explicit-constructed-response@1.1.0"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/explicit-constructed-response/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/explicit-constructed-response/docs/config-schema.json"
model:
    id: '1'
    element: explicit-constructed-response
    disabled: false
    mode: gather
    prompt: Use the inputs to complete the sentence
    shuffle: true
    markup: "<p>The {{0}} jumped {{1}} the {{2}}</p>"
    choices:
      '0':
      - label: cow
        value: '0'
      - label: cattle
        value: '1'
      - label: calf
        value: '2'
        correct: false
      '1':
      - label: over
        value: '0'
      - label: past
        value: '1'
      - label: beyond
        value: '2'
      '2':
      - label: moon
        value: '0'
      - label: satellite
        value: '2'
      - label: 'house '
        value: '3'
---
