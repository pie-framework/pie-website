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
      prompt: What color is the sky?
      choiceMode: radio
      keyMode: numbers
      choices:
      - value: yellow
        label: Yellow
        correct: false
      - value: green
        label: Green
        correct: false
      - correct: true
        value: blue
        label: Blue
      partialScoring: false
      partialScoringLabel: |-
        Each correct response that is correctly checked and each incorrect response
                  that is correctly unchecked will be worth 1 point.
                  The maximum points is the total number of answer choices.
      shuffle: false
      showCorrect: false
    partB: 
      prompt: What color do you get when you mix Red with your answer in Part 1?
      choiceMode: radio
      keyMode: numbers
      choices: 
      - value: orange
        label: Orange
        correct: false
      - correct: true
        value: purple
        label: Purple
      - value: pink
        label: Pink
      - value: green
        label: Green
      partialScoring: false
      partialScoringLabel: |-
        Each correct response that is correctly checked and each incorrect response
                  that is correctly unchecked will be worth 1 point.
                  The maximum points is the total number of answer choices.
      shuffle: false
---
