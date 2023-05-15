---
title: CIM 
---

## Definition

<!-- What it is -->

CIM (Common Information Model) is an electric power transmission and distribution standard developed by the electric power industry. It aims to allow application software to exchange information about an electrical network. It has been officially adopted by the International Electrotechnical Commission (IEC). CIM defines a set of UML classes, class associations, datatypes, and attributes for describing common entities that exist in the context of energy production, consumption, and management systems. Therefore, CIM provides a vocabulary that can be used to describe energy systems in a way that is standardized and widely accepted.

CIM is an object-oriented model based on UML defining both syntax and semantics. It comprises three main parts:

- IEC 61970-301: Defining the energy management system application programming interface (EMS-API).
- IEC 61968-11: Defining application integration at electric utilities - System interfaces for distribution management.
- IEC 62325-301: Defining a framework for energy market communications.

CIM has been used widely to model data objects in order to achieve syntactic and semantic interoperability in the communication between systems. CIM is commonly used by modeling data based on the provided data models which are then either stored or sent to another system. While it is possible to store data based on any model internally, it is important that the data is sent to external systems using CIM representatives. This ensures that the receiving system understands the meaning of the data using the definitions provided by the CIM vocabulary.

## Relevance

<!-- Where it is used, i.e., in what parts of EDDIE -->

In the EDDIE project, CIM is used to address an interoperability concern that may arise due to the large number of entities communicating with the EDDIE Framework. Such entities can be:

- Smart meters in different countries potentially generating data in diverse formats.
- Meter Data Administrators in different countries potentially providing historical validated data in different formats.
- Consent Administrators in different countries potentially carrying out the process of providing consent using messages of different formats.

Notably, the EDDIE Framework needs to implement functions for handling and storing all this data. Implementing individual functions for each data format that any of the above entities may be using, is not a solution that scales since it might be practically cumbersome to address all possible data formats. To avoid this, the handling of the data will be implemented based on CIM. Additionally, the Interoperable Communication component will integrate converters to translate data from different data formats to CIM so that it is then processed using common functions.

Thus, the following component of the EDDIE Framework will be using CIM.

- Interoperable Communication: Implements mechanisms to translate incoming data (from different formats) to CIM, and outgoing data from CIM (to different formats).
- Database: Implements a model for the Master data that is based on CIM (potentially with small adaptations if necessary).

## Motivation

<!-- Why it is used, what are alternatives, why is this preferred compared to alternatives -->

CIM is a model that has been developed and refined for a long time reaching a satisfactory level of maturity. Throughout the years, it has received a lot of support from [ENTSO-E](https://www.entsoe.eu/digital/common-information-model/) which ensures that CIM is developed in line with TSO requirements. In addition, ENTSO-E runs yearly tests to demonstrate the interoperabilty of CIM, and to support the CIM development for grid models and market exchanges.

Alternatives of CIM are:

- [OpenADR](https://www.openadr.org/): Open Automated Demand Response (OpenADR) is an open and interoperable information exchange model and emerging Smart Grid standard.  OpenADR standardizes the message format used for Auto-DR so that dynamic price and reliability signals can be delivered in a uniform and interoperable fashion among utilities, ISOs, and energy management and control systems.
- [Green Button](https://www.greenbuttonalliance.org/): Green Button is based on the Energy Services Provider Interface (ESPI) data standard released by the North American Energy Standards Board (NAESB). The ESPI standard consists of two components: 1) a common XML format for energy usage information and 2) a data exchange protocol which allows for the automatic transfer of data from a utility to a third party based on customer authorization.