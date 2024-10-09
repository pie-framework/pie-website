---
title: Graphing Solution Set
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/graphing-solution-set@1.18.6"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/graphing-solution-set/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/graphing-solution-set/docs/config-schema.json"
model:
  id: "1"
  element: graphing-solution-set
  answers:
    correctAnswer:
      name: "Correct Answer"
      marks: []
  arrows:
    left: true
    right: true
    up: true
    down: true
  marks: []
  defaultGridConfiguration: 0
  domain:
    min: -10
    max: 10
    padding: 0
    step: 1
    labelStep: 1
    axisLabel: "x"
  graph:
    width: 480
    height: 480
  gssLineData:
    numberOfLines: 1
    selectedTool: "lineA"
    sections: []
    lineA:
      lineType: "Solid"
  includeAxes: true
  labels:
    top: "top"
    left: "left"
    bottom: "bottom"
    right: "right"
  labelsEnabled: true
  padding: true
  prompt: "Prompt goes here"
  range:
    min: -10
    max: 10
    padding: 0
    step: 1
    labelStep: 1
    axisLabel: "y"
  rationale: "Rationale goes here"
  standardGrid: true
  title: "Graph title"
  coordinatesOnHover: false
  promptEnabled: true
  rationaleEnabled: true
  teacherInstructionsEnabled: true
  studentInstructionsEnabled: true
  rubricEnabled: false
  language: "en_US"
  titleEnabled: true
  dimensionsEnabled: true
---
