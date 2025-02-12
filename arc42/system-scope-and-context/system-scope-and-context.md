---
title: System Scope and Context
order: 3
---

## Business Context

To describe the business context, the figure below shows the context diagram of the EDDIE system and its environment. The system within scope, i.e., the EDDIE system, is in a circle at the center, while the neighboring entities are shown as squares and actors around it.


![](./figures/context-diagram-dataspace.svg)

The table below shows a description of all the entities of the context diagram.

| Entity | Description |
|-|-|
| EDDIE System | This is the software system within scope. The EDDIE system aims to offer energy-related data to services that are provided by the eligible party. Furthermore, the EDDIE system shall be Gaia-X compliant in order to allow for interoperability with external energy data spaces, i.e., other similar software systems for sharing energy data. |
| Service | A service is a software application that is provided by the eligible party. Services access energy data from the EDDIE system and use this data to generate value, e.g., using data analysis techniques based on statistics and artificial intelligence. |
| Eligible Party | The eligible party is a person (or organization) that operates within the energy data services market. The eligible party provides services and uses the EDDIE system so that these services have access to energy data from customers. |
| Customer | The customer is a person (or organization) that consumes/produces energy, and is willing to share their energy consumption/production data. This data is used as input to the services. The customer can be motivated to allow their data to be used as the input for the services by gaining access to the output of the services. For example, a service may be processing residential energy consumption values to estimate consumption recommendations that reduce the energy bill as output.|
| EP Website | The EP Website (Eligible Party Website) is a website offered by the eligible party as an interface for the customers. This website provides the customer with a customer permission form that collects all the necessary information to access the energy data of the customer. This form is sent to the EDDIE system that accesses the energy data from in-house metering devices and/or regional data-sharing infrastructures. |
| Metering Device | This is an in-house device that can access energy-related data, e.g., a smart meter that provides access to near real-time energy consumption information. |
| Regional Data-sharing Infrastructure | This is the energy data sharing system of the customer's country that provides access to the historical data (e.g., historical validated consumption metering data) of the customer. 
| External Energy Data Space| This is a software system similar to the EDDIE system that facilitates energy data sharing. The EDDIE system shall be compatible with external energy data spaces so that energy data can also be exchanged between different energy data spaces. |
| Gaia-X | The Gaia-X system offers compliance services and defines rules for achieving interoperability and trust among data spaces. As long as two data spaces utilize Gaia-X, a certain degree of interoperability can be achieved. |

Notably, the figure above shows the general case whereby one eligible party uses one instance of the EDDIE system to provide many services to many customers, while accessing their data from many, potentially different, metering devices and regional data-sharing infrastructures across Europe. Similarly, many eligible parties can replicate this environment, serving numerous customers.


## Technical Context 

The figure below shows a C4 context diagram with the environment of the EDDIE System. This diagram depicts the entities within scope with blue color, while the gray color indicates entities whose implementation is out of scope. As shown in the figure, the EDDIE system, being a system of systems, consists of three systems: the EDDIE Framework, AIIDA, and the Marketplace. 

<C4 diagram="eddie" />

The table below shows a description of all the entities.

| System | Description |
|-|-|
| EP Website | The EP Website provides the customer with a form to collect the necessary customer information for accessing the customer's energy data. This form is provided by the EDDIE Framework, but it is displayed by the EP Website. This way, upon submission by the customer, the form is sent directly to the EDDIE Framework.|
|EDDIE Framework | The EDDIE Framework implements the main workflows related to acquiring the customer permission for data access, accessing energy data of customers, and sending this data to the services. |
| AIIDA | The Administration Interface for In-house Data Access (AIIDA) implements the main workflows regarding accessing real-time data from in-house metering devices, and sending it to the EDDIE Framework. |
| Marketplace | The Marketplace implements the main workflows enabling eligible parties to submit (and advertise) energy services, and allowing customers to search for energy services they want to use. |
| Metering Device | This is any in-house device providing energy information such as smart meters, home automation systems, electric vehicle chargers, photovoltaic systems, etc. |
| Regional Data-sharing Infrastructure | This is the system of a country utilized for sharing historical validated energy consumption data. This system may be operated by a different entity in each country, e.g., by a country-specific permission administrator, or a metered data administrator, among others. |
| Eligible Party | The eligible party uses the EDDIE Framework, AIIDA, and Marketplace to provide energy services to the customers. |
| Customer | The customer selects services from the Marketplace, and provides their permission so that these services can access the customer's energy data via the EDDIE Framework.|
|External Energy Data Space | This is an external Gaia-X compliant energy data space that can provide additional energy data to the EDDIE Framework and services, such as Omega-X or OneNet.|
|Gaia-X | Gaia-X provides compliance services for achieving interoperability and trust between data spaces.|




