---
title: Match List
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/match-list@1.1.0"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/match-list/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/match-list/docs/config-schema.json"
model:
    id: '1'
    element: match-list
    answers:
    - title: All right angles
      id: 0
    - id: 1
      title: All acute angles
    - id: 2
      title: Two obtuse angles
    - id: 3
      title: One pair of perpendicular lines
    - title: One pair of parallel lines
      id: 4
    prompt: <p>Look at the shapes below.</p><p><img alt="image 8c7d142a9af94abf80b021426879a815"
      id="8c7d142a9af94abf80b021426879a815" src="https://storage.googleapis.com/pie-staging-221718-assets/image/4ec622c1-51d0-4c4b-8282-cd9b7eb9ca22"></p><p></p><p>Each
      property describes one of the shapes. Drag and drop the property&nbsp;to its shape.</p>
    shuffled: false
    prompts:
    - id: 0
      title: Shape A
      relatedAnswer: 3
    - id: 1
      title: Shape B
      relatedAnswer: 2
    - id: 2
      title: Shape C
      relatedAnswer: 1
    - id: 3
      title: Shape D
      relatedAnswer: 4
    - id: 4
      title: Shape E
      relatedAnswer: 0
---