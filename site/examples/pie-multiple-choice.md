---
title: Multiple Choice
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/multiple-choice@2.4.6"
schemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/categorize/docs/pie-schema.json"
model:
    id: '1'
    element: multiple-choice
    prompt: Which of these northern European countries are EU members?
    choiceMode: checkbox
    keyMode: numbers
    choices:
    - correct: true
      value: sweden
      label: Sweden
      feedback:
        type: none
        value: ''
    - value: iceland
      label: Iceland
      feedback:
        type: none
        value: ''
    - value: norway
      label: Norway
      feedback:
        type: none
        value: ''
    - correct: true
      value: finland
      label: Finland
      feedback:
        type: none
        value: ''
    partialScoring: false
    partialScoringLabel: |-
      Each correct response that is correctly checked and each incorrect response
                that is correctly unchecked will be worth 1 point.
                The maximum points is the total number of answer choices.
    configure: {}
configure:
    promptLabel: Promptare
    addChoiceButtonLabel: Add a choice
    addChoice: false
    addFeedBack: true
    deleteChoice: true
    showPrompt: true
    answerChoiceCount: 0
    settingsSelectChoiceMode: true
    settingsSelectChoicePrefixes: true
    settingsResponseTypeLabel: Response Type
    settingsChoicePrefixesLabel: Choice Labels
    settingsPartialScoring: true
    settingsConfigShuffle: true
---