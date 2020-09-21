---
title: EBSR
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/ebsr@1.1.0"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/ebsr/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/ebsr/docs/config-schema.json"
model:
    id: '1'
    element: pie-element-ebsr
    partA:
      choiceMode: radio
      choices:
      - value: yellow
        label: Yellow
      - value: green
        label: Green
      - correct: true
        value: blue
        label: Blue
      choicePrefix: numbers
      partialScoring: false
      prompt: What color is the sky?
      promptEnabled: true
    partB:
      choiceMode: radio
      choices:
      - value: orange
        label: Orange
      - correct: true
        value: purple
        label: Purple
      - value: pink
        label: Pink
      - value: green
        label: Green
      choicePrefix: numbers
      partialScoring: false
      prompt: What color do you get when you mix Red with your answer in Part 1?
      promptEnabled: true
---
