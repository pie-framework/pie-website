---
title: Short Text
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/text-entry@3.3.1"
model:
    id: '1'
    element: text-entry
    feedback:
      correct:
        type: custom
        custom: correct-o
      incorrect:
        type: custom
        custom: custom feedback
      partial:
        type: custom
        custom: foo
    correctResponses:
      values:
      - mutt
      - hound
      ignoreWhitespace: true
      ignoreCase: false
    partialResponses:
      values:
      - mutty
      ignoreWhitespace: true
      ignoreCase: true
      awardPercentage: '50'
    answerBlankSize: '10'
    answerAlignment: left
    prompt: Question Prompt goes here
    allowDecimal: true
    allowIntegersOnly: false
    allowThousandsSeparator: true
---