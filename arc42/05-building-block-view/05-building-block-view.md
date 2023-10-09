---
title: Building Block View
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

The building block view is presented through a description of the system using two levels. Level 1 shows the overall system along with all the main building blocks. Level 2 further explains the building blocks from Level 1. The building blocks of Level 2 are explained further in dedicated sections.

**Notably, useful details about the system with regard to creating a minimum viable product are presented [here](./development/dev-mvp1/dev-mvp1.md).**

## Level 1

A high-level view of the system is shown in the component diagram below. 

<div align="center">
<img src="./figures/component-diagram-level-1.svg">
</div>

### Contained Building Blocks

The eligible party operates the components that run in the Eligible Party Infrastructure node. These are also explained in the table below.

| Component | Responsibility |
| - | - |
| EP Website | This is a public website offered by an eligible party to the customers. A customer can use this website to create an account and provide their consent so that the eligible party can access their historical validated data from the Regional Data-sharing Infrastructure, and/or their real-time data from the In-house Infrastructure. |
| EDDIE Framework | This component manages the customer consents, integrates the mechanisms to access energy data from multiple Regional Data-sharing Infrastructures and In-house Infrastructures, and consolidates energy data from potentially different regional formats to a unified format. The unified format ([CIM-based](../08-crosscut-concepts/domain-models/cim/cim.md)) complies with standardization activities of the energy community, aims at being compatible with the Services. |
| Service | This component implements the logic to process the energy data from one or more customers and produce results which are potentially shared with the customer through the EP Website. |

The In-house Infrastructure hosts the following component which is provided by the eligible party, but is operated by the customer.

| Component | Responsibility |
| - | - |
| AIIDA| The Administrative Interface for In-house Data Access (AIIDA) component connects to the smart meter in order to collect the real-time energy consumption data of a customer and send it to the EDDIE Framework. |

### Interfaces

The Level 1 view includes the following external interfaces.

| Interface | Responsibility | Type| Data Model |
| - | - | - | - |
| Consent Admin Portal | Typically operated by the permission administrator. This interface Receives requests from eligible parties for access to customer data. | HTTP (or other) | [Link](./data-models/data-model-consent-admin-portal/data-model-consent-admin-portal.md) |
| Meter Data Portal | Typically operated by the metered data administrator. This interface provides access to a customer's historical data for an eligible party that has received the appropriate consent of this customer. | HTTP (or other) | [Link](./data-models/data-model-meter-data-portal/data-model-meter-data-portal.md) |
| Smart Meter Interface | Provides access to real-time energy consumption data based on the smart meter readings. | P1 (or other) | [Link](./data-models/data-model-p1-interface/data-model-p1-interface.md) |

### Black Boxes

The following table describes components that are used only through their interfaces, while their internal logic is unknown. In our system, these components are considered as black boxes.

| Component | Responsibility |
| - | - |
| Regional Data-sharing Infrastructure | Operated by a utility company or a metered data administrator. It is used only through the interfaces (i.e., the Consent Admin Portal and the Meter Data Portal) which are described above. |
| Smart meter | Provided by a utility company. Is is used only through the Smart Meter Interface which is described above. |


## Level 2

The Level 2 view of the system is shown in the component diagram below. 

<div align="center">
<img src="./figures/component-diagram-level-2.svg">
</div>

### Contained Building Blocks

The EDDIE Framework includes the following components.

| Component | Responsibility |
| - | - |
| Permission Facade | Receives, stores, and manages the consent of the customers for access to both historical and real-time data (regardless of the customer's country).
| Streaming Infrastructure | Facilitates the distribution of the data from the EDDIE Framework to the Services in a publish-subscribe fashion. |
| Database | Stores configuration information and meta data regarding the eligible party, the customers, the consents, and the state of the EDDIE Framework. |
| Admin Console | Provides an overview of active/inactive services, consents and requests for data along with configuration options such as terminate, restart, etc. |
| Interoperable Communication | Integrates the mechanisms to interact with the Regional Data-sharing Infrastructures for requesting consents and accessing energy data. Also it establishes communication with multiple AIIDA instances for accessing real-time data from smart meters. | 

<!-- The AIIDA component includes the following components.

| Component | Responsibility |
| - | - |
| pending | - | -->

### Interfaces

The Level 2 view introduces the following interfaces.

| Provided From | Consumed By | Type |
| - | - | - |
| Permission Facade | EP Website | HTTP |
| Streaming Infrastructure | Services | Kafka |
| Interoperable Communication | AIIDA | Kafka |

## Component Description

> More detailed information on the components of the system is provided [here](./components/components.md).
