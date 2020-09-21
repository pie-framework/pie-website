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
    markup: "<p>The {{0}} jumped {{1}} the {{2}}</p>"
    disabled: false
    choices:
      '0':
      - label: cow
        value: '0'
      - label: cattle
        value: '1'
      - label: calf
        value: '2'
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
    prompt: Complete the sentence
    promptEnabled: true
---
