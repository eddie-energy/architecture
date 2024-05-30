---
title: System Scope and Context
order: 3
---
##### This section refers to the [C4 Context Diagrams](https://c4model.com/#SystemContextDiagram). The context block represents a software system, or a hardware system, and can include many software applications. It communicates with one or more other systems, or other context blocks.


To this end, we show the EDDIE System within its environment and we define all the neighboring entities, i.e., systems and users. In the following, we differentiate between business context where we describe the interactions within the environment, and technical context where we describe the technical nodes and connections.

## Business Context

The figure below shows the context diagram of the environment. The system within scope, i.e., the EDDIE System, is in a circle at the center, while the neighboring entities are shown as squares and users around it.
The figure below shows the context diagram of the environment. The system within scope, i.e., the EDDIE System, is in a circle at the center, while the neighboring entities are shown as squares and users around it.



<div align="center">
<img src="./figures/context-diagram-dataspace.svg">
</div>

The table below shows a description of all the entities of the context diagram.

| Entity | Description |
|-|-|
| EDDIE System | This is the software system within scope. The EDDIE System aims at offering energy-related data to Services that are provided by eligible parties. Furthermore, the EDDIE System needs to be Gaia-X compliant in order to allow for interoperability with external energy data spaces, i.e., other similar software systems for sharing energy data. |
| Service | A Service is a software application that is provided by the eligible party. Services access energy data from the EDDIE System and use it to generate value, e.g., using data analysis techniques based on statistics and artificial intelligence. |
| Eligible Party | The eligible party is a person (or organization) that wants to enter the energy data services market. The eligible party provides Services and uses the EDDIE System so that these Services have access to energy data from customers. |
| Customer | Customers are persons (or organizations) that consume/produce energy, and are willing to share their energy consumption/production data. This data is used as input to the Services. Customers can be motivated to allow their data to be used as the input of the Services in order to access the output. For example, a Service may be processing residential energy consumption values in order to provide consumption recommendations that reduce the energy bill.|
| EP Website | The EP Website (Eligible Party Website) is a website provided by an eligible party. The goal of this website is to gather the necessary information from customers to be able to access their energy data either from in-house Metering Devices, or from the Regional Energy Datahubs. |
| Metering Device | This is an in-house device that can provide access to energy-related values, e.g., a smart meter that provides access to near real-time energy consumption values. |
| Regional Energy Datahub | This is the energy data sharing system of a Member State that provides access to historical data (e.g., historical validated consumption metering data) about the energy consumption of a customer. 
| External Energy Data space| This is a software system similar to the EDDIE System that facilitates energy data sharing. The EDDIE System needs to be compatible with external energy data spaces so that energy data can be exchanged. |
| Gaia-X Framework | The Gaia-X Framework offers compliance services and defines rules for achieving interoperability and trust among data spaces. Thus, as long as two data spaces follow the same compliance services and rules, a certain degree of interoperability can be achieved. |


## Technical Context 

The figure below shows a C4 context diagram of the environment. C4 offers a unique way to model a system in four layers. The first layer pictures the system in scope and its relationship with users and other systems. It should complement the first diagram with the perspective of a developer, namely software systems and their interactions. The grey systems are out of scope for the developer.

<C4 diagram="eddie" />

The table below shows a description of the nodes.

| System | Description |
|-|-|
|EDDIE Framework | Contains all the relevant infrastructure for the core features of EDDIE. The infrastructure can be distributed and may be operated by different components that can vary based on goals and use cases. The EDDIE Framework infrastructure is described in detail in the [Building Block View](../building-block-view/building-block-view.md). |
|Gaia-X Framework | The Gaia-X Framework provides compliance services (e.g. the Digital Clearing House) for interoperability.|
| EP System | The eligible party (EP) system consists of the EP Website and other EP Services, that can be either on-premise or cloud-based. On permission, the EP System transfers the customer information necessary for accessing the customer energy data, and forwards the customer energy data from EDDIE Framework. Apart from the Permission Facade Microfrontent the EP System is out of scope.|
| AIIDA | The Administration Interface for In-house Data Access (AIIDA) is an interface, for acessing and forwarding real-time data collected by a customers households metering devices. Via AIIDA, a customer allows to share the data with EDDIE.|
| Metering Device | This includes all the in-house devices with energy metering information such as smart meters, home automation systems, electric vehicle chargers, photovoltaic systems, etc. |
|External Energy Data Space | Any Gaia-X compatible Data Space, providing further Energy Data such as Omega-X or OneNet.|
| EU Energy Datahub | This is the computing infrastructure of a country for sharing historical validated energy consumption data. This infrastructure may be operated by a different entity in every country, e.g., by a country-specific permission administrator, and/or a metered data administrator. |


