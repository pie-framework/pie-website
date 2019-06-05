---
title: Drag In The Blank
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/drag-in-the-blank@1.1.0"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/drag-in-the-blank/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/drag-in-the-blank/docs/config-schema.json"
model:
    id: '1'
    element: drag-in-the-blank
    disabled: false
    mode: gather
    prompt: Use the inputs to complete the sentence
    shuffle: true
    markup: "<div><p>The {{0}} jumped {{1}} the {{2}}</p></div>"
    choices:
    - value: cow
      id: '0'
    - value: over
      id: '1'
    - value: moon
      id: '2'
    - value: cattle
      id: '3'
    - value: calf
      id: '4'
    - value: past
      id: '5'
    - value: beyond
      id: '6'
    - value: satellite
      id: '7'
    choicesPosition: below
    correctResponse:
      '0': '0'
      '1': '1'
      '2': '2'
    duplicates: true
---
