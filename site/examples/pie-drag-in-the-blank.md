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
    markup: "{{0}} + {{1}} = 15"
    disabled: false
    mode: gather
    prompt: "<p>Solve the equation below.</p>"
    promptEnabled: true
    shuffle: true
    choices:
    - value: "<div>6</div>"
      id: '0'
    - value: "<div>9</div>"
      id: '1'
    choicesPosition: below
    correctResponse:
      '0': '0'
      '1': '1'
    duplicates: true
    alternateResponses:
    - - '1'
    - - '0'
    rationale: "<p>A correct response is shown below:</p><ul><li>2/6 = 1/3</li><li>4/8
      = 1/2</li><li>6/10 = 3/5</li><li>9/12 = 3/4</li></ul>"
---
