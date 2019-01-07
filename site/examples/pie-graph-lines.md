---
title: Graph Lines
layout: DemoLayout
pageClass: customDemoPage
pie: "@pie-element/graph-lines@1.1.4"
model:
    id: '1'
    element: 'graph-lines'
    minimumWidth: 500
    multiple: false
    partialScoring: []
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
    model:
      config:
        lines:
        - label: Line One
          correctLine: 3x+2
          initialView: 3x+3
        graphTitle: ''
        graphWidth: 500
        graphHeight: 500
        domainLabel: ''
        domainMin: -10
        domainMax: 10
        domainStepValue: 1
        domainSnapValue: 1
        domainLabelFrequency: 1
        domainGraphPadding: 50
        rangeLabel: ''
        rangeMin: -10
        rangeMax: 10
        rangeStepValue: 1
        rangeSnapValue: 1
        rangeLabelFrequency: 1
        rangeGraphPadding: 50
        sigfigs: -1
        showCoordinates: false
        showPointLabels: true
        showInputs: true
        showAxisLabels: true
        showFeedback: true
---