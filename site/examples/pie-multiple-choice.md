---
title: Multiple Choice
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/multiple-choice@2.7.2"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/multiple-choice/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/multiple-choice/docs/config-schema.json"
model:
    id: '1'
    element: multiple-choice
    choiceMode: checkbox
    choicePrefix: numbers
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
      rationale: Rationale for Iceland
    - value: norway
      label: Norway
      feedback:
        type: none
        value: ''
      rationale: Rationale for Norway
    - correct: true
      value: finland
      label: Finland
      feedback:
        type: none
        value: ''
      rationale: Rationale for Finland
    prompt: Which of these northern European countries are EU members?
    promptEnabled: true
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