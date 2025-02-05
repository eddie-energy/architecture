---
title: Runtime View
order: 3
---
The main workflows of EDDIE Framework are:
- [Permission Process Model](./runtime-view.md#permission-process-model)

::: warning DESIRED CONTENT
Here we will not describe the runtime behavior per regional connector, as this well result in a matrix explosion problem (MxN).
Most of the region connector specifics will be moved to the framework developer documentation (please refer to the git history, to restore this information), as it is not architecture per se, but implementation information for users working on specific region connectors.

This section should mainly describe the Permission Process Model and how the different parts of EDDIE Framework interact with each other. This includes
- how EDDIE Core enables region connectors via plugins
- how the Permission Facade comes together by combining EDDIE Core and the region connector specific micro-frontends
- ...

Regarding the specific workflows listed at the end of the page. They will still provide a lot of value, as those are the main use-cases of using EDDIE Framework, but we should explain them based on the Permission Process Model (top-down) and not based on the individual region connectors (bottom-up).
:::

## Permission Process Model

<!--
::: warning TO ADD
For each chapter, review the content and check if the following criterias are fullfilled:

According to arc42 the runtime view describes concrete behavior and interactions of the system’s building blocks in form of scenarios. The scenario should answer the following questions:

- how do building blocks execute important use cases or features?
- how do building blocks cooperate with users and neighbouring systems?
- what happens in case of a launch, start-up, stop of operation and administration
- how could error and exception scenarios look like
  goal:
  You should understand how (instances of) building blocks of your system perform their job and communicate at runtime. You will mainly capture scenarios in your documentation to communicate your architecture to stakeholders that are less willing or able to read and understand the static models (building block view, deployment view).

:::
-->

## Overview

The runtime view focuses on interactions among the system's components. The goal of this section is to describe representative and important workflows that occur during the runtime of the system. These workflows are categorized into sections, as shown below.

## Use-Cases                          
### Collect the customer's information
### Request the customer's consent    
### Access the customer's data        
### Send the data to the services     
### Revoke the customer's consent     
