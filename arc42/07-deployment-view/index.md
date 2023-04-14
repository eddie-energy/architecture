---
title: Deployment View
---

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

The deployment view of the system focuses on the utilized technical infrastructure. A high-level deployment diagram is shown in Section [Context and Scope](../03-context-and-scope/index.md#technical-context). While that diagram shows the framework as a black box, this section shows deployment diagrams that depict where the internal components of the system run. For the system decomposition, the same logic as in Section [Building Block View](../05-building-block-view/index.md) is used, i.e., based on levels.

## Infrastructure Level 2

The prime way to deploy the system is shown below.

<div align="center"> 
<img src="./figures/deployment-diagram-level-2.png" width="650">
</div>

The Level 2 view includes the following high-level nodes.

| Node | Description |
|-|-|
|Eligible Party Infrastructure | This is operated by the eligible party. The Local Computing Infrastructure is used for running the framework which is deployed locally on the premises of the eligible party. The Cloud Computing Infrastructure is out of scope of this document, as discussed in Section: [Context and Scope](../03-context-and-scope/index.md#business-context). |
|Regional Data-sharing Infrastructure | This is also out of scope for this document, although, integration with the provided interfaces is necessary.
|In-house Infrastructure | This node is operated by the consumer. It includes an in-house device (e.g., a Raspberry Pi) and the smart meter. |

Specifically for the deployment of the framework, i.e., the node Local Computing Infrastructure shown above, two additional deployment options are possible. The original deployment is shown below isolated from the rest of the system.

<div align="center"> 
<img src="./figures/deployment-diagram-option-1.png" width=400>
</div>

Two additional options are shown below.

| Option 2 | Option 3 |
|-|-|
|<div><img src="./figures/deployment-diagram-option-2.png" width=450></div>|<div><img src="./figures/deployment-diagram-option-3.png" width=430></div>|

The motivation for all 3 options is shown in the table below.
| Option | Motivation |
|-|-|
| 1 |-|
| 2 |-|
| 3 |-|

## Infrastructure Level 3
