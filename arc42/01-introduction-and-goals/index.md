---
title: Introduction and Goals
---

<!-- Describes the relevant requirements and the driving forces that software architects and the development team must consider. These include

-   underlying
-   essential fu business goals,
-   essential features,functional requirements,
-   quality goals for the architecture and
-   relevant stakeholders and their expectations -->

EDDIE (European Distributed Data Infrastructure for Energy) is a research project which aims at building a framework for aggregating energy-related data, e.g., from houses whose owners have provided the appropriate permission.

## Background

In the energy sector, the European Directive (EU) 2019/944 of the Clean Energy for all Europeans Package has established the rights to access energy-related metering, production, and consumption data for energy consumers and eligible parties of their choice. New European regulations like this directive pave the way for novel energy data-based services which have the potential to improve the use of energy via web-based applications that process the energy data, e.g., to provide consumption recommendations for saving energy. Such services can raise the energy awareness of citizens and foster economic growth on a European level. However, the main barrier today is that there is no large-scale, uniform, and easy access to energy data across European Member States (MSs), which is a severe handicap for developing new services. **EDDIE aims at tackling this problem by creating a framework that automates the process of sharing data between energy consumers and eligible parties (i.e., third parties with permissions from consumers)**.

## Business Goals

The prime business goals are:
1. At the moment, an energy consumer may make use of services (e.g., visualizations, predictions) offered by their energy utility provider (e.g., Wiener Netze in Vienna). To do this, one can log in to the website of their utility provider and access the available services, e.g. to visualize the energy consumption of a past period. The EDDIE framework aims at allowing consumers to access the services that are provided not only by their utility provider but by any eligible party. An eligible party can be, e.g., individuals, organizations or research groups, with appropriate permission from consumers to access and process their energy data in order to generate value in a commercial or non-commercial context, e.g., by developing novel services. **Organizations with a particular interest in taking the role of the eligible party can be, e.g., Distribution System Operators (DSOs), Transmission System operators (TSOs), and Flexibility Service Providers (FSPs)**.

## Essential Features

The essential features of the framework are:
- Allowing the consumers to select who can process their data (to avoid privacy infringement).
- Consolidating datasets that follow different structures/syntax/semantics (e.g., from consumers in different countries) into a unified format that allows uniform processing of all the data.

## Essential Functional Requirements

The essential functional requirements are listed below. A more elaborate description of the quality requirements can be found in Section [Quality Requirements](../10-quality-requirements/index.md).
- Decentralized: The energy data of a consumer shall be shared only with eligible parties (i.e., entities that have the permission of the consumer). A central place that aggregates energy data from multiple consumers without their permission shall not be used.
- Scalable. The consumer shall be able to share their data with multiple eligible parties. Moreover, an eligible party shall be able to collect data from multiple consumers.
- Extensible. The framework shall be extensible so that adding compatibility with unsupported regions does not involve significant engineering/developing effort.

## Quality Goals

<!-- The top three (max five) quality goals for the architecture whose
fulfillment is of the highest importance to the major stakeholders. We
mean quality goals for the architecture. Don't confuse them with
project goals. They are not necessarily identical.
A table with quality goals and concrete scenarios, ordered by priorities -->

The main goals of the architecture are:
<!-- (based on the ISO 25010 standard) -->
- Usability: The framework can be understood, learned, and used, and is attractive to the stakeholders.
- Maintainability: the framework can be modified, corrected, adapted, and extended to react to changes in its environment.


## Stakeholders

<!-- Explicit overview of stakeholders of the system, i.e. all persons, roles
or organizations that

-   should know the architecture
-   have to be convinced of the architecture
-   have to work with the architecture or with code
-   need the documentation of the architecture for their work
-   have to come up with decisions about the system or its development -->

Persons that may make use of this document can have the following roles:

| Role | Expectation |
|-|-|
| Product owner | Needs to understand the overall structure of a system that uses the framework, e.g., to be able to prioritize development tasks. |
| Software architect | Needs to understand the architecture of a system that uses the framework,e.g., to be able to design services. |
| Software Developer | Needs to understand the functionality of a specific component, e.g., to be able to perform code modifications. |
| DevOps Engineer | Needs to understant the interactions among the components of the framework, e.g., to be able to deploy and run the framework. |