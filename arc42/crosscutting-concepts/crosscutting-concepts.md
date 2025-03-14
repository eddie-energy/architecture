---
title: Crosscutting Concepts
order: 10
---

Vasious concepts are relevcant across the EDDIE system such as:
- Data Space
- Data Models
    - Common Information Model
    - Smart Grid Architecture Model
    - Smart Appliances REFerence ontology
  

## Data Space
### Definition
<!-- What it is -->

The concept of a data space describes a federated system whereby organizations can share data in alignment with the principles of data sovereignty. Data Spaces facilitate secure, trusted, and interoperable data exchange across sectors. There are two prime initiatives that drive the adoption of data spaces: IDSA (International Data Spaces Association) which focuses on defining specifications and standards for sharing sovereign data, and Gaia-X that focuses on compliance within and across data spaces. Based on these initiatives, a data space is a system that includes multiple software applications for sharing sovereign data, such as dataspace connectors, registries for data and metadata, and identity management.

### Relevance
<!-- Where it is used, i.e., in what parts of EDDIE -->

The goal of the EDDIE system is to create a domain-specific data space tailored to the energy sector. This approach includes domain-specific processes designed to handle energy data. While general-purpose data spaces are broad and flexible, they may not be directly applicable to the specific needs of the energy sector. For this reason, the EDDIE system creates a data space that is similar to what is defined by data space initiatives but is able to meet the specific requirements of the energy sector. 

## Data Models
### Common Information Model (CIM)

#### Definition

CIM is an electric power transmission and distribution standard developed by the electric power industry. It aims to allow application software to exchange information about an electrical network. It has been officially adopted by the International Electrotechnical Commission (IEC). CIM defines a set of UML classes, class associations, datatypes, and attributes for describing common entities that exist in the context of energy production, consumption, and management systems. Therefore, CIM provides a vocabulary that can be used to describe energy systems in a way that is standardized and widely accepted.

CIM is an object-oriented model based on UML defining both syntax and semantics. It comprises three main parts:

- IEC 61970-301: Defining the energy management system application programming interface (EMS-API).
- IEC 61968-11: Defining application integration at electric utilities - System interfaces for distribution management.
- IEC 62325-301: Defining a framework for energy market communications.

#### Relevance

The EDDIE system uses CIM to address interoperability concerns arising from diverse entities communicating with the EDDIE Framework. These include:

- Smart meters generating data in various formats.
- Metered data administrators providing historical data in different formats.
- Permission administrators using various formats for consent messages.

Instead of creating individual functions for each data format, which is impractical, CIM is used to standardize data handling. The Interoperable Communication component integrates converters to translate data to and from CIM, allowing common functions to process it.

CIM is used in the following EDDIE Framework components:
- Interoperable Communication: Converts incoming and outgoing data to and from CIM.
- Database: Stores master data in CIM format, with minor adaptations if needed.

#### Motivation

CIM is a model that has been developed and refined for a long time reaching a satisfactory level of maturity. Throughout the years, it has received a lot of support from [ENTSO-E](https://www.entsoe.eu/digital/common-information-model/) which ensures that CIM is developed in line with TSO requirements. In addition, ENTSO-E runs yearly tests to demonstrate the interoperability of CIM, and to support the CIM development for grid models and market exchanges.

Alternatives of CIM are:

- [OpenADR](https://www.openadr.org/): Open Automated Demand Response (OpenADR) is an open and interoperable information exchange model and emerging Smart Grid standard.  OpenADR standardizes the message format used for Auto-DR so that dynamic price and reliability signals can be delivered in a uniform and interoperable fashion among utilities, ISOs, and energy management and control systems.
- [Green Button](https://www.greenbuttonalliance.org/): Green Button is based on the Energy Services Provider Interface (ESPI) data standard released by the North American Energy Standards Board (NAESB). The ESPI standard consists of two components: 1) a common XML format for energy usage information and 2) a data exchange protocol which allows for the automatic transfer of data from a utility to a third party based on customer authorization.


### Smart Grid Architecture Model (SGAM)
  
#### Definition
SGAM is a reference architecture developed by the International Electrotechnical Commission (IEC) that aims to provide a framework for organizing and describing the various components of a smart grid system. It defines a set of functional and information exchange views that can be used to model the different layers and functions of a smart grid system, including the physical layer, communication layer, application layer, and business layer.

SGAM is organized into six main views:

1. Business view: Defines the overall business context of the smart grid system..
1. Function view: Defines the functions and services that need to be provided by the smart grid system.
1. Information view: Defines the information that needs to be exchanged between different components (including the data models and communication protocols).
1. Communication view: Defines the communication networks and protocols that need to be used for exchanging information between the different components.
1. Component view: Defines the physical and logical components that make up the smart grid system.
1. Deployment view: Defines the deployment scenarios and configurations of the smart grid system.

#### Relevance
SGAM provides reference points, e.g., scenarios, workflows, and data models, that aid the technical and conceptual development of the EDDIE system. SGAM provides a standardized way of organizing and describing the different components of the smart grid system, which are of relevance as well. 

#### Motivation
SGAM provides a comprehensive and standardized way of organizing and describing the different components of a smart grid system, allowing for better communication and collaboration between different stakeholders and organizations involved in the development and implementation of smart grids. It provides a common language and framework for describing the different layers and functions of the smart grid system, as well as the communication networks and protocols that need to be used for exchanging information between different components of the smart grid system.

Alternative models to SGAM include:

- NIST Smart Grid Framework: Developed by the National Institute of Standards and Technology (NIST), the NIST Smart Grid Framework provides a comprehensive and standardized way of organizing and describing the different components of a smart grid system, similar to SGAM.
- IEC 61850: IEC 61850 is a communication standard for power utility automation that defines a set of protocols.

### Smart Appliances REFerence ontology (SAREF)
#### Definition

SAREF is a semantic data model developed by the European Telecommunications Standards Institute (ETSI) with the goal of facilitating the interoperability and standardization of smart appliances in the Internet of Things (IoT) ecosystem.
IT provides a standardized ontology with classes and properties to describe smart appliances, such as household appliances, lighting systems, and HVAC systems. The ontology provides a standardized vocabulary that can be used to describe smart appliances in a way that is widely accepted.

SAREF comprises a main ontology, SAREF, and several sub-ontologies such as SAREF4AUTO, SAREF4ENER, and SAREF4BLD, which provide more specific vocabularies for automotive, energy, and building domains respectively.

#### Relevance
In the context of IoT, SAREF is used to ensure the interoperability and semantic consistency of smart appliances, enabling their integration into a larger smart system. SAREF provides a standardized vocabulary for describing smart appliances, which allows different applications and systems to communicate with each other using a common language.

In the EDDIE system, SAREF is relevant for the EDDIE Database and the services that acquire data from this database for further processing. The use of SAREF in these components ensures the interoperability and consistency of energy consumption data from smart appliances.
 
#### Motivation
SAREF is developed by ETSI, which ensures that it is developed in line with industry requirements and standards. It is also supported by several organizations and initiatives, such as the FIWARE project, which aims to promote the development of IoT applications and services.

Alternative models to SAREF include:

- OneM2M: OneM2M is a global standard for Machine-to-Machine (M2M) and Internet of Things (IoT) interoperability, providing a common architecture and framework for IoT applications across different domains.
- Brick Schema: Brick Schema is an open-source, community-driven effort to develop a comprehensive schema for building automation, based on Semantic Web technologies.
