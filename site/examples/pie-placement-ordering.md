---
title: Placement Ordering
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/placement-ordering@3.4.3"
model:
    id: '1'
    element: 'placement-ordering'
    correctResponse:
    - id: c1
      weight: 0.2
    - id: c4
      weight: 0.2
    - id: c3
      weight: 0.3
    - id: c2
      weight: 0.3
    prompt: Arrange the fruits alphabetically
    choices:
    - id: c2
      label: Lemon
      shuffle: false
      moveOnDrag: true
    - id: c3
      label: Melon
      moveOnDrag: true
    - id: c1
      label: Blueberry
      moveOnDrag: false
    - id: c4
      label: Pear
      moveOnDrag: false
    shuffle: false
    placementType: none
    choiceAreaLayout: vertical
    choiceAreaLabel: 'choices: '
    answerAreaLabel: Answer Area Label
    showOrdering: true
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
    configure: {}
---