---
title: Deployment View
order: 9
---

::: warning TO ADD
[According to Arc42 the deployment view includes descriptions about](https://docs.arc42.org/section-7/)

1.  technical infrastructure used to execute your system, with
    infrastructure elements like geographical locations, environments,
    computers, processors, channels and net topologies as well as other
    infrastructure elements
2.  mapping of (software) building blocks to that infrastructure
    elements.
3.  development environment, test environment, production environment.

The highest level depolyment view should describe the deployment of the blocks (e.g. AIIDA, EDDIE Framework etc.) as black boxes, that are further described in their own chapter.
:::

## Overview

## Figure + Table

| Node | Description |
| ---- | ----------- |

<!-- The deployment view describes:
1.  technical infrastructure used to execute your system, with
    infrastructure elements like geographical locations, environments,
    computers, processors, channels and net topologies as well as other
    infrastructure elements and
2.  mapping of (software) building blocks to that infrastructure
    elements.
Often systems are executed in different environments, e.g. development
environment, test environment, production environment. In such cases you
should document all relevant environments.

From a software perspective it is sufficient to capture only those
elements of an infrastructure that are needed to show a deployment of
your building blocks. -->

<!-- Maybe a highest level deployment diagram is already contained in section
3.2. as technical context with your own infrastructure as ONE black box.
In this section one can zoom into this black box using additional
deployment diagrams:
Describe (usually in a combination of diagrams, tables, and text):
-   distribution of a system to multiple locations, environments,
    computers, processors, .., as well as physical connections between
    them
-   important justifications or motivations for this deployment
    structure
-   quality and/or performance features of this infrastructure
-   mapping of software artifacts to elements of this infrastructure -->

## Overview

The deployment view of the system focuses on the utilized technical infrastructure, and shows deployment diagrams that depict where the components of the system run. The prime way to deploy these components is shown in the figure below. Notably, the Interoperable Communication component is not depicted as a Container because it may consist of multiple containers. The same applies to AIIDA, and the Marketplace.

![](./figures/deployment-diagram-level-2.svg)

The system runs across four nodes which are described in the table below.

| Node                                 | Description                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Eligible Party Infrastructure        | This is operated by the eligible party. The Local Computing Infrastructure is used for running the EDDIE framework which is deployed locally on the premises of the eligible party. The Cloud Computing Infrastructure is used for running the EP Website and the Services. The implementation and design of the EP Website and the Services are out of the scope of the EDDIE project. |
| Regional Data-sharing Infrastructure | This is operated by country-specific entities such as the permission administrator and the metered data administrator.                                                                                                                                                                                                                                                                  |
| In-house Infrastructure              | This node is operated by the customer. It includes an in-house device (e.g., a Raspberry Pi computer) and the Smart Meter.                                                                                                                                                                                                                                                              |
| Federated Infrastructure             | This node hosts the Marketplace. The Marketplace may include Services of multiple eligible parties. Thus, one or more eligible parties might operate the Marketplace as a federated service running, e.g., on cloud computing resources.                                                                                                                                                |
