---
title: Equation Response
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/math-inline@0.3.3"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/math-inline/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/math-inline/docs/config-schema.json"
model:
    id: '1'
    element: pie-element-math-inline
    mode: advanced
    config:
      allowPartialScores: false
    expression: 'y = '
    question: What is the equation for a slope?
    equationEditor: simple
    defaultResponse:
      id: 0
      validation: symbolic
      answer: mx + b
      alternates: {}
      allowSpaces: true
      allowDecimals: true
    responses:
    - id: answerBlock1
      validation: symbolic
      answer: mx+b
      alternates: {}
      allowSpaces: true
      allowDecimals: true
    feedback:
      correct:
        type: none
        default: Correct
      partial:
        type: none
        default: Nearly
      incorrect:
        type: none
        default: Incorrect
---