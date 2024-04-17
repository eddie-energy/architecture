---
title: Building Block View
order: 5
---

<!-- The building block view shows the static decomposition of the system
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
    Black boxes -->

The building block view is presented through a description of the system using two levels. Level 1 shows the overall system along with all the main building blocks. It refers to the C4 Container diagrams. Level 2 further explains the building blocks from Level 1, referring to the C4 Component diagrams.

The data models used by the systems are explained in the belonging chapter below.

Even though the diagrams are zoomable (meaning that f.e. the container view of EDDIE Framework can be viewed by clicking on its name in the context view), each container or component view is shown in its dedicated chapter. 
Clicking on a container or component in a diagram leads to the referring page or part where this particuliar container or component is described. 