---
title: Select Text
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/select-text"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/select-text/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/select-text/docs/config-schema.json"
model:
  id: "1"
  element: select-text
  highlightChoices: true
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
  partialScoring: false
  maxSelections: 2
  mode: sentence
  prompt: What sentences contain the character 6 in them?
  text:
    Rachel cut out 8 stars in 6 minutes. Lovelle cut out 6 stars in 4 minutes. Rachel
    cut out 4 more stars than Lovelle. Lovelle and Rachel cut the same number of stars
    in 6 minutes.
  tokens:
    - text: Rachel cut out 8 stars in 6 minutes.
      start: 0
      end: 36
      correct: true
    - text: Lovelle cut out 6 stars in 4 minutes.
      start: 37
      end: 74
      correct: true
    - text: Lovelle and Rachel cut the same number of stars in 6 minutes.
      start: 117
      end: 177
---
