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

The building block view is presented through a description of the system using levels. Level 1 shows the overall system along with all the main building blocks. Level 2 focuses on some building blocks from Level 1. Level 3 focuses on building blocks from Level 3 and so on. To decompose the system into building blocks we have used functional decomposition on the main functionality of the framework.

**Notably, concrete details about the system from a product development perspective are presented [here](./development/dev-mvp1/dev-mvp1.md).**

## Level 1

A high-level view of the system is shown in the component diagram below. 

<div align="center">
<img src="./figures/component-diagram-level-1.png" width="500">
</div>

### Contained Building Blocks

The eligible party manages the following components.

| Component | Responsibility |
| - | - |
| User Interface | Entry point for consumers to provide their consent. |
| Services | Implement logic to process the energy data. |
| EDDIE Framework | Manages the consumer consents, consolidates energy data from different Regional Data-sharing Infrastructures a unified format. |

The In-house Infrastructure hosts the following components.

| Component | Responsibility |
| - | - |
| AIIDA| Gets real-time data from the smart meter. |

### Interfaces

The Level 1 view includes the following interfaces.

| Interface | Responsibility | Type| Data Model |
| - | - | - | - |
| Consent Admin Portal | Operated by the Permission Administrator. Receives requests from eligible parties for access to consumer data. | HTTP (or other) | [Link](./data-models/data-model-consent-admin-portal/data-model-consent-admin-portal.md) |
| Meter Data Portal | Operated by the Meter Data Administrator. Provides historical data to the eligible party (with appropriate consent) | HTTP (or other) | [Link](./data-models/data-model-meter-data-portal/data-model-meter-data-portal.md) |
| P1 | Provides access to real-time energy consumption data | P1 | [Link](./data-models/data-model-p1-interface/data-model-p1-interface.md) |

### Black Boxes

| Component | Responsibility |
| - | - |
| Regional Data-sharing Infrastructure | Operated by the utility provider or a metered data administrator. It is used only through the interfaces (described above). |
| Smart meter | Provided by the utility provider. Is is used only through the interface (described above). |


## Level 2

The Level 2 view of the system is shown in the component diagram below. 

<div align="center">
<img src="./figures/component-diagram-level-2.png" width="650">
</div>

### Contained Building Blocks

The EDDIE Framework includes the following components.

| Component | Responsibility | Data Model |
| - | - | - |
| Consent Facade | Manages and stores the consent of the consumers. |  |
| Streaming Infrastructure | Handles the communication among internal and external components |  |
| Database | Stores information about consents, state, and data. |  [Master Data](./data-models/data-model-master-data/data-model-master-data.md) |
| Admin Console | Entry point for the eligible party to register with regional data-sharing infrastructure (if necessary). |  |
| Interoperable Communication | Translates messages/data from different Regional Data-sharing Infrastructures (e.g., from different countries) to a unified format. |  |

<!-- The AIIDA component includes the following components.

| Component | Responsibility |
| - | - |
| pending | - | -->

### Interfaces

The Level 2 view introduces the following interfaces.

| Provided From | Consumed By | Type |
| - | - | - |
| Consent Facade | User Interface | HTTP |
| Streaming Infrastructure | Services | Kafka |
| Interoperable Communication | AIIDA | Kafka |

## Level 3

The Level 3 view includes the internal structure of some components from Level 2.

### Contained Building Blocks

#### Consent Facade

The internal structure of the Consent Facade component is shown below. The Consent Facade is a collection of [micro frontends](../08-crosscut-concepts/architectural-patterns/micro-frontends/micro-frontends.md). Each micro frontend provides the necessary frontend elements to collect the required information for acquiring the consumer consent in a specific country.

<div align="center">
<img src="./figures/component-diagram-level-3-consent-facade.png" width="500">
</div>

The included components are the following.

| Component | Responsibility |
| - | - |
| Micro Frontend | Provides the necessary frontent elements to the EP Website. Since every country may require different information for establishing consent, one micro frontent component is needed for each supported country. |


#### Interoperable Communication

The internal structure of the Interoperable Communication component is shown below. The Interoperable Communication is a collection of regional connectors. Each regional connector implements the functionality to access the APIs of the Regional Data-sharing Infrastructure of a specific country.

<div align="center">
<img src="./figures/component-diagram-level-3-inter-comm.png" width="700">
</div>

The included components are the following.

| Component | Responsibility |
| - | - |
| Regional Connector | Implements the functionality to access the APIs of a country-specific Regional Data-sharing Infrastructure, e.g., to request the consent of the consumer. |
| Message Producer  | Receives energy data from a regional connector and publishes it to the Streaming Infrastructure. |

## Level 4

The Level 4 view includes the internal structure of some components from Level 3.

### Contained Building Blocks

#### Regional Connector - Austria

The internal structure of the Regional Connector - Austria is shown below. An implementation model for this component is provided [here](./data-models/data-model-regional-connector-austria/data-model-regional-connector-austria.md).

<div align="center">
<img src="./figures/component-diagram-level-4-reg-con-AT.png" width="750">
</div>

The included components are the following.

| Component | Responsibility |
| - | - |
| Translation Service | Receives the required information of the consumer from the Consent Facade and translates it to appropriate format. |
| Ponton XP Messenger  | This is a messaging solution by [Ponton GmbH](https://www.ponton.de/ponton-xp) for communication with the Regional Data-sharing Infrastructure in Austria which is called [EDA](https://www.eda.at/?lang=en). |
| Ponton Adapter | Translates infromation to/from the formats used by Ponton XP Messenger. |

#### Regional Connector - France

An implementation model for this component is provided [here](./data-models/data-model-regional-connector-france/data-model-regional-connector-france.md).


<!-- ## Level 3

The Level 3 view of the system is shown in the component diagram below. 

### Contained Building Blocks

### Interfaces

### Black Boxes -->

<!-- 

<div align="center">
<img src="./figures/component-diagram-level-3.png" width="650">
</div>
 -->

<!-- 
The eligible party manages the following components.

| Component | Responsibility |
| - | - |
| User Interface | Entry point for consumers to provide their consent. |
| Services | Implement logic to process the energy data. |
| EDDIE Framework | Manages the consumer consents, consolidates energy data from different Regional Data-sharing Infrastructures a unified format. |

The In-house Infrastructure hosts the following components.

| Component | Responsibility |
| - | - |
| AIIDA| Gets real-time data from the smart meter. |
 -->

<!-- 
The Level 1 view includes the following interfaces.

| Interface | Responsibility | Type| Data Model |
| - | - | - | - |
| Consent Admin Portal | Receives requests from eligible parties for access to consumer data. | HTTP (or other) | [Link](./data-models/consent-admin-portal/consent-admin-portal.md) |
| Meter Data Portal | Provides historical data to the eligible party (with appropriate consent) | HTTP (or other) | [Link](./data-models/meter-data-portal/meter-data-portal.md) |
| P1 | Provides access to real-time energy consumption data | P1 | [Link](./data-models/p1-interface/p1-interface.md) |
 -->

<!-- 
| Component | Function |
| - | - |
| Regional Data-sharing Infrastructure | Operated by the utility provider or a metered data administrator. It is used only through the interfaces (described above). |
| Smart meter | Provided by the utility provider. Is is used only through the interface (described above). | -->




<!-- ## Consent Facade

TBD

The figure below shows the components of the system that are relevant to the consent facade.

<div align="center">
<img src="./figures/component-diagram.png" width="300" alt="test">
</div>

`add figure description here`

A different view of the system which includes two countries is shown below.

<div align="center">
<img src="./figures/region-connectors.png" width="900" alt="test">
</div>

`add figure description here`

### AT - Austria \<\_building block x.1\_\>

Specifies the internal structure of *building block x.1*.

*\<white box template>*

### DE - Germany \<\_building block x.2\_\>

*\<white box template>*

### FR - France \<\_building block x.2\_\>

*\<white box template>*

### IT - Italy \<\_building block y.1\_\>

*\<white box template>* -->