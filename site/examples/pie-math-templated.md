---
title: Math Templated
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/math-templated@2.12.0"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/math-templated/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/math-templated/docs/config-schema.json"
model:
    id: '1'
    element: pie-element-math-templated
    rationale: 'Rationale'
    partialScoring: true
    prompt: 'There are 24 students in the class. They had the choice to buy supplies from two different stores, Store A and B. Each of them bought 2 binders and 5 notebooks. The students have a total of $420 to spend.'
    scoringType: 'auto'
    feedbackEnabled: false
    promptEnabled: true
    rationaleEnabled: true
    teacherInstructionsEnabled: true
    studentInstructionsEnabled: true
    toolbarEditorPosition: 'bottom'
    validationDefault: 'literal'
    ignoreOrderDefault: false
    allowTrailingZerosDefault: false
    teacherInstructions: 'These are teacher instructions'
    customKeys: []
    equationEditor: 'geometry'
    markup: <p>If the unit price of a notebook in Store A is $1.50, what is the unit price of a binder? \${{0}}</p><p>If the unit price of a binder in Store B is $2.80, what is the unit price of a notebook? \${{1}}</p>
    responses:
    -   allowTrailingZeros: false,
        answer: '5',
        id: '1',
        validation: 'symbolic',
        ignoreOrder: false,
        alternates: {}
    -   allowTrailingZeros: false,
        answer: '2.38',
        id: '2',
        validation: 'literal',
        ignoreOrder: false,
        alternates: {}
---
