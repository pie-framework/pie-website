---
title: Match List
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/match-list"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/match-list/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/match-list/docs/config-schema.json"
model:
  id: "1"
  element: match-list
  prompt: Your prompt goes here
  prompts:
    - id: 1
      title: Prompt 1
      relatedAnswer: 1
    - id: 3
      title: Prompt 3
      relatedAnswer: 3
    - id: 4
      title: Prompt 4
      relatedAnswer: 4
    - id: 2
      title: Prompt 2
      relatedAnswer: 2
  answers:
    - id: 1
      title: Answer 1
    - id: 2
      title: Answer 2
    - id: 3
      title: Answer 3
    - id: 4
      title: Answer 4
    - id: 5
      title: Answer 5
    - id: 6
      title: Answer 6
  shuffled: false
  feedback:
    correct:
      type: default
      default: Correct
    partial:
      type: default
      default: Nearly
    incorrect:
      type: default
      default: Incorrect
---
