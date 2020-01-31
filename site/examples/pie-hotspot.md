---
title: Hotspot
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/hotspot"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/hotspot/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/hotspot/docs/config-schema.json"
model:
  id: 1
  element: pie-element-ebsr
  prompt: This is the question prompt
  multipleCorrect: true
  partialScoring: false
  dimensions:
    height: 0
    width: 0
  hotspotColor: rgba(137, 183, 244, 0.65)
  hotspotList:
    - rgba(137, 183, 244, 0.65)
    - rgba(217, 30, 24, 0.65)
    - rgba(254, 241, 96, 0.65)
  outlineColor: blue
  outlineList:
    - blue
    - red
    - yellow
---
