---
title: AIIDA
order: 7
---

AIIDA is an in-house software system for accessing real-time energy data from the customer's site and sending it to the EDDIE Framework. To this end, AIIDA can connect to various metering devices such as smart meters and home automation systems. Upon connection, AIIDA can stream the energy data to the EDDIE Framework. Thus, AIIDA provides the EDDIE Framework with real-time energy data and other relevant data from metering devices directly from the customer sites. The customer can configure and manage all the AIIDA connections and permissions through the provided user interfaces.

To present the AIIDA system comprehensively, the main key decisions are discussed in the [Solution Strategy](./solution-strategy/solution-strategy.md). Afterwards, the [Building Block View](./building-block-view/building-block-view.md) describes the main building blocks of the system using the [C4 Model](https://c4model.com/). Then, the [Runtime View](./runtime-view/runtime-view.md) of the system depicts the main behaviors. After that, the [Deployment View](./deployment-view/deployment-view.md) provides an overview of the utilized infrastructure. Finally, the [Architectural Decisions](./architectural-decisions/architectural-decisions.md) section presents the system decisions and their motivation. 

<!--##### This section represents the [C4 Container Diagrams](https://c4model.com/#ContainerDiagram) of the C4 modelling language. The container block shows one independent software application, e.g., database, frontend, backend, middleware, embedded app etc. It communicates with one or more other containers within or outside the context. In a modular application, each module becomes a container.

 Represents a static decomposition of the system
into building blocks (modules, components, subsystems, classes,
interfaces, packages, libraries, frameworks, layers, partitions, tiers,
functions, macros, operations, data structures, ...) as well as their
dependencies (relationships, associations, ...). This view is mandatory
for every architecture documentation. In analogy to a house, this is
the *floor plan*. -->

<!-- The building block view is a hierarchical collection of black boxes and
white boxes (see figure below) and their descriptions.
**Level 1** is the white box description of the overall system together
with black box descriptions of all contained building blocks.
**Level 2** zooms into some building blocks of level 1. Thus it contains
the white box description of selected building blocks of level 1,
together with black box descriptions of their internal building blocks.
**Level 3** zooms into selected building blocks of level 2, and so on. -->
<!--
This structure can be used:
    Motivation
    Contained Building Blocks
    Important Interfaces
    Black boxes
As the "System scope and context", this section is described from the perspective of a developer​, e.g. each chapter could be handed over to a developer individually, without (much) further explanations. Also, it is meant to be interactive, meaning that clicking on a container or component in a diagram leads to the referring page or part where this particuliar container or component is described.

Apart from this, the diagrams itself are zoomable, f.e. the container view of EDDIE Framework can be viewed by clicking on its name in the context view.

The building block view is presented through a description of the system using different levels, following the C4 modelling language. It shows the overall system along with all the main building blocks. The first level refers to the C4 Container diagrams. Each chapter represents one independent software application, e.g., database, frontend, backend, middleware, embedded app, etc.​
This application communicates with one or more other containers within or outside the context e.g. scope of EDDIE.​

The second level further explains the building blocks of the containers, referring to the C4 Component diagrams. It represents a collection of implementation classes behind an interface, with a specific functionality.​ As the components, it communicates with one/more other components within or outside the container​ e.g. scope of EDDIE. The data models used by the systems are explained at there belonging components. -->
