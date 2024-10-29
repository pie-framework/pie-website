---
title: Placement Ordering
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/placement-ordering@3.4.3"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/placement-ordering/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/placement-ordering/docs/config-schema.json"
model:
    id: '1'
    element: 'placement-ordering'
    choiceLabel: Choices
    choices:
    - id: c1
      label: Blueberry
    - id: c2
      label: Lemon
    - id: c3
      label: Melon
    - id: c4
      label: Pear
    correctResponse:
    - c1
    - c2
    - c3
    - c4
    alternateResponses:
    - response:
      - c4
      - c3
      - c2
      - c1
    enableImages: false
    feedback:
      correct:
        type: custom
        custom: foo
      incorrect:
        type: custom
        custom: 'no'
      partial:
        type: custom
        custom: nearly
    feedbackEnabled: true
    prompt: Arrange the fruits alphabetically
    promptEnabled: true
    lockChoiceOrder: false
    numberedGuides: false
    orientation: vertical
    partialScoring: false
    placementArea: false
    scoringType: auto
    targetLabel: Answers
---
