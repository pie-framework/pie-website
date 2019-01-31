---
title: Tools
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pies:
    - "@pie-element/calculator@2.0.3"
    - "@pie-element/ruler@3.0.3"
    - "@pie-element/protractor@2.0.1"
multiple: true
models:
    - id: '1'
      element: 'pie-element-calculator'
      mode: 'scientific'
    - id: '2'
      element: 'ruler-element'
      mode: 'scientific'
      measure: 'metric'
      label: 'm'
      units: 10
      width: 500
    - id: '3'
      element: 'protractor-element'
---