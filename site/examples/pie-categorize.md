---
title: Categorize
layout: DemoLayout
sidebar: false
navbar: false
pageClass: customDemoPage
pie: "@pie-element/categorize@6.4.1"
modelSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/categorize/docs/pie-schema.json"
configureSchemaJSONURI: "https://raw.githubusercontent.com/pie-framework/pie-elements/develop/packages/categorize/docs/config-schema.json"
model:
    id: '1'
    element: categorize-element
    promptEnabled: true
    choices:
    - id: '0'
      content: <span mathjax="" data-latex="">420\text{ cm}=4.2\text{ meters}</span>
    - id: '1'
      content: <span mathjax="" data-latex="" data-raw="3.4\text{ kg}=350\text{ g}">3.4\text{
        kg}=340\text{ g}</span>
    - id: '2'
      content: <span mathjax="" data-latex="">1\text{,}800\text{ mL}=180\text{ L}</span>
    - id: '3'
      content: <span mathjax="" data-latex="">3.5\text{ meters}=350\text{ cm}</span>
    - id: '4'
      content: <span mathjax="" data-latex="">4\text{,}800\text{ g}=0.48\text{ kg}</span>
    - id: '5'
      content: <span mathjax="" data-latex="">250\text{ mL}=0.25\text{ L}</span>
    categories:
    - id: '0'
      label: Equivalent
      choices:
      - id: '0'
        content: <span mathjax="" data-latex="">420\text{ cm}=4.2\text{ meters}</span>
      - id: '3'
        content: <span mathjax="" data-latex="">3.5\text{ meters}=350\text{ cm}</span>
      - id: '5'
        content: <span mathjax="" data-latex="">250\text{ mL}=0.25\text{ L}</span>
    - id: '1'
      label: "<b>NOT </b>equivalent"
      choices:
      - id: '1'
        content: <span mathjax="" data-latex="">3.4\text{ kg}=340\text{ g}</span>
      - id: '2'
        content: <span mathjax="" data-latex="">1\text{,}800\text{ mL}=180\text{ L}</span>
      - id: '4'
        content: <span mathjax="" data-latex="">4\text{,}800\text{ g}=0.48\text{ kg}</span>
    rowLabels:
    - ''
    correctResponse:
    - category: '0'
      choices:
      - '0'
      - '3'
    - category: '1'
      choices:
      - '4'
      - '1'
---
