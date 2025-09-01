---
title: Crosscutting Concepts
order: 10
---

Various concepts are relevant across the EDDIE system such as:
- [Data Space](./crosscutting-concepts.md#data-space)
- [Data Models](./crosscutting-concepts.md#data-models)
    - [Common Information Model (CIM)](./crosscutting-concepts.md#common-information-model-cim)
    - [Smart Grid Architecture Model (SGAM)](./crosscutting-concepts.md#smart-grid-architecture-model-sgam)
    - [Smart Appliances REFerence ontology (SAREF)](./crosscutting-concepts.md#smart-appliances-reference-ontology-saref)

## Data Space
#### Definition
<!-- What it is -->

The concept of a data space describes a federated system whereby organizations can share data in alignment with the principles of data sovereignty. Data spaces facilitate secure, trusted, and interoperable data exchange across sectors. There are two prime initiatives that drive the adoption of data spaces: IDSA (International Data Spaces Association) which focuses on defining processes and specifications for sharing sovereign data, and Gaia-X that focuses on compliance within and across data spaces. Based on these initiatives, a data space is a system that includes multiple software applications for sharing sovereign data, such as dataspace connectors, registries for data and metadata, and identity management.

#### Relevance
<!-- Where it is used, i.e., in what parts of EDDIE -->

While general-purpose data spaces are broad and flexible, they may not be directly applicable to the specific needs of the energy sector, e.g., to access data from Regional Data-sharing Infrastructures or Metering Devices at home. For this reason, the EDDIE system creates a data space that is similar to what is defined by data space initiatives, but focuses more on meeting the needs of the energy sector. The goal of the EDDIE system is to create a domain-specific data space tailored to the energy sector. This approach includes domain-specific components and processes. For example, instead of a generic dataspace connector, the EDDIE system uses Regional Connectors tailored to accessing data from Regional Data-sharing infrastructures, and instead of a generic metadata registry, the EDDIE system integrates a Marketplace tailored to eligible parties and customers.

#### Motivation
Data spaces are proposed for managing data according to [European Strategy for Data](https://digital-strategy.ec.europa.eu/en/policies/strategy-data).

## Data Models

### Common Information Model (CIM)

#### Definition

CIM (Common Information Model) is a standard for electric power transmission and distribution developed by the electric power industry. It aims to enable software applications exchange information about electrical networks in a consistent and interoperable manner. CIM has been officially adopted by the International Electrotechnical Commission (IEC) but is maintained by the [DMTF](https://www.dmtf.org/about), formerly known as the Distributed Management Task Force) CIM defines a set of Unified Modeling Language (UML) classes, class associations, data types, and attributes for describing entities commonly found in energy production, distribution, consumption, and management systems. Thus, CIM also provides a standardized vocabulary for modeling energy systems.

CIM is an object-oriented information model based on UML, which defines both syntax and semantics. It is composed of three main parts:
[
- IEC 61970-301: Defines the energy management system application programming interface (EMS-API).
- IEC 61968-11: Defines system interfaces for the integration of distribution management systems (DMS) with enterprise applications within electric utilities.
- IEC 62325-301: Defines the energy market communications, supporting the exchange of information between market participants. THe European version is known as ESMP (European Style Market Profile) and is maintained by [ENTSO-E](https://www.entsoe.eu/digital/common-information-model/cim-for-energy-markets/).

The CIM standard provides well-defined semantics. Each CIM class or object has a clear definition registered within the common model. This model encompasses a wide range of entities and functions across the energy sector, including grid operations, asset management, and energy markets, with a focus on infrastructure and connectivity.

Although CIM covers a large portion of the energy sector data, there are area's where CIM is less well developed. e.g. electric vehicle charging. Below some complementary standards are discussed.

#### Relevance

The EDDIE system uses CIM to address interoperability concerns arising from diverse entities communicating via the EDDIE Framework. These entities may include:

- Smart meters generating data in various formats.
- Regional Data-sharing Infrastructures providing historical data in different formats.
- Permission administrators using various formats for permission messages.

#### Motivation

CIM is a model that has been developed and refined for a long time reaching a satisfactory level of maturity. Throughout the years, it has received a lot of support from [ENTSO-E](https://www.entsoe.eu/digital/common-information-model/) which ensures that CIM is developed in line with TSO requirements. In addition, ENTSO-E runs yearly tests to demonstrate the interoperability of CIM, and to support the CIM development for grid models and market exchanges. Due to its focus on the infrastructure lifecycle, CIM can model historical changes in devices and device replacements, as well as expected future additions to existing networks. This aspect is crucial in a fast-evolving energy environment where one generation of devices may be replaced by the next in order to provide extended services to the parties involved.

Apart from CIM, a number of sub-domain solutions have emerged over the years creating what is sometimes called a "cylinder of excellence". These solutions focus on meeting particular purposes, which may foster large market penetration, although their applicability for EDDIE might be limited. Some examples are discussed below:

- [OpenADR](https://www.openadr.org/): Open Automated Demand Response (OpenADR) is an open and interoperable information exchange model and emerging smart grid standard. OpenADR standardizes the message format used for Auto-DR so that dynamic price and reliability signals can be delivered in a uniform and interoperable fashion among utilities, ISOs, and energy management and control systems. OpenADR focuses on a set of defined exchange messages, but may lack data model definitions, which can lead to weak semantics.
- [OCPP](https://www.openchargealliance.org/): The Open Charge Point Protocol (OCPP) is a communication protocol for residential charging that enables seamless interaction between electric vehicle (EV) charging stations and central management systems (CMS). Similar to OpenADR, it may lack data model definitions (due to focusing on defining exchange messages).
-  [SAREF](https://www.saref.etsi.org/core/v4.1.1/): The Smart Applications REFerence Ontology (SAREF) is a suite of ontologies which form a shared model that aims to enable semantic interoperability between solutions from different providers and among various activity sectors in the Internet of Things (IoT). SAREF4ENER is of particular interest as it has proven valuable in the modelling of smart white appliances with a focus on devices. SAREF is ontology-based and defines explicit semantics. More information on SAREF is provided later on.
- [Green Button](https://www.greenbuttonalliance.org/): Green Button is based on the Energy Services Provider Interface (ESPI) data standard released by the North American Energy Standards Board (NAESB). The ESPI standard consists of two components: 1) a common XML format for energy usage information and 2) a data exchange protocol which allows for the automatic transfer of data from a utility to a third party based on customer authorization. Similar to OpenADR, it may lack a data model, due to focusing on well-defined exchange messages, which can lead to weak semantics.

#### Employed strategy

The infrastructural lifecycle management of the CIM standard makes it the preferred standard used for exchange of smart meter and historical data. However, when Vehicle to Grid communication or interaction with smart white appliances come in, some market standards cannot be ignored either because of their wide distribution or because they have much better support in areas where CIM is still in development. To enrich sub-domain standards, creating a mapping to the CIM model, provides a lifecycle infrastructural dimension to those standards lacking these. On the other side, CIM can profit from years of development in other standards where CIM has not put its focus on (yet). One point of attention: when working with weak semantic standards, careful scrutiny should be employed to make sure that terminology is consistent over standards. 


### Smart Grid Architecture Model (SGAM)
  
#### Definition
SGAM is a reference architecture developed by the International Electrotechnical Commission (IEC) that aims to provide a framework for organizing and describing the various components of a smart grid system. It defines a set of functional and information exchange views that can be used to model the different layers and functions of a smart grid system, including the physical layer, communication layer, application layer, and business layer.

SGAM is organized into six main views:

1. Business View: Defines the overall business context of the smart grid system.
1. Function View: Defines the functions and services that need to be provided by the smart grid system.
1. Information View: Defines the information that needs to be exchanged between different components (including the data models and communication protocols).
1. Communication View: Defines the communication networks and protocols that need to be used for exchanging information between the different components.
1. Component View: Defines the physical and logical components that make up the smart grid system.
1. Deployment View: Defines the deployment scenarios and configurations of the smart grid system.

#### Relevance
SGAM provides reference points, e.g., scenarios, workflows, and data models, that aid the technical and conceptual development of the EDDIE system. SGAM provides a standardized way of organizing and describing the different components of the smart grid system, which are of relevance as well. 

#### Motivation
SGAM provides a comprehensive and standardized way of organizing and describing the different components of a smart grid system, allowing for better communication and collaboration between different stakeholders and organizations involved in the development and implementation of smart grids. It provides a common language and framework for describing the different layers and functions of the smart grid system, as well as the communication networks and protocols that need to be used for exchanging information between different components of the smart grid system.

Alternative models to SGAM include:

- NIST Smart Grid Framework: Developed by the National Institute of Standards and Technology (NIST), the NIST Smart Grid Framework provides a comprehensive and standardized way of organizing and describing the different components of a smart grid system, similar to SGAM.
- IEC 61850: This is a communication standard for power utility automation that defines a set of protocols.

### Smart Appliances REFerence ontology (SAREF)
#### Definition

SAREF is a semantic data model developed by the European Telecommunications Standards Institute (ETSI) with the goal of facilitating the interoperability and standardization of smart appliances in the Internet of Things (IoT) ecosystem.
It provides a standardized ontology with classes and properties to describe smart appliances, such as household appliances, lighting systems, and HVAC (Heating, Ventilation, Air Conditioning) systems. The ontology provides a standardized vocabulary that can be used to describe smart appliances in a way that is widely accepted.

SAREF comprises a main ontology, SAREF, and several sub-ontologies such as SAREF4AUTO, SAREF4ENER, and SAREF4BLD, which offer more specific vocabularies for automotive, energy, and building domains, respectively.

#### Relevance
In the context of the IoT, SAREF is used to ensure the interoperability and semantic consistency of smart appliances, enabling their integration into a larger smart system. SAREF provides a standardized vocabulary for describing smart appliances, which allows different applications and systems to communicate with each other using a common language.

In the EDDIE system, SAREF is relevant for databases and services which store and process energy data. The use of SAREF in such components can ensure interoperability and consistency of energy consumption data from smart appliances.
 
#### Motivation
SAREF is developed by ETSI to align with industry requirements and standards. It is supported by several organizations and initiatives, such as the FIWARE project, which aims to promote the development of IoT applications and services.

Alternative models to SAREF include:

- OneM2M: OneM2M is a global standard for Machine-to-Machine (M2M) and Internet of Things (IoT) interoperability, providing a common architecture and framework for IoT applications across different domains.
- Brick Schema: Brick Schema is an open-source, community-driven effort to develop a comprehensive schema for building automation, based on Semantic Web technologies.
