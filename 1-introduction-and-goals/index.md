# Introduction and Goals

<!-- Describes the relevant requirements and the driving forces that software architects and the development team must consider. These include

-   underlying business goals,
-   essential features,
-   essential functional requirements,
-   quality goals for the architecture and
-   relevant stakeholders and their expectations -->

EDDIE (European Distributed Data Infrastructure for Energy) is a research project which aims at building a framework for aggregating energy-related data from houses whose owners have provided the appropriate permission.

## Business Goals

There are 2 prime business goals:
1. At the moment, an energy consumer can make use of services (e.g., visualizations, predictions) offered by their energy provider. To do this, one can log in to the website of their energy provider and access the available services. The EDDIE framework aims at allowing consumers to access the services of any energy provider in the same or a different country. This will allow all energy providers to work and compete in a common energy market.
1. The second goal of the EDDIE framework is to enable energy consumers to use services that are provided not only by the energy provider but by any eligible party. An eligible party can be anyone, e.g., individuals, organizations or research groups, with appropriate permission from consumers to access and process their energy data in order to generate value in a commercial or non-commercial context, e.g., by developing novel services. 

## Essential Features

The essential features of the framework are:
- Allowing the consumers to select who can process their data (to avoid privacy concerns).
- Consolidating datasets that follow different structures/syntax (e.g., from consumers in different countries) into a unified format that allows uniform processing of all the data.

## Essential Functional Requirements

The essential functional requirements are listed below. A more elaborate description of the requirements can be found in [Section 10](/10-quality-requirements/).
- Decentralized: The consumer data must be shared only with eligible parties (i.e., that have the permission of the consumer). A central place that aggregates consumer data without the permission of the consumer must not be used.
- Scalable. The consumer must be able to share their data with multiple eligible parties. Moreover, an eligible party must be able to collect data from multiple consumers.
- Extensible. The framework must be extensible so that adding unsupported energy providers does not involve significant engineering/developing effort.

## Quality Goals

<!-- The top three (max five) quality goals for the architecture whose
fulfillment is of the highest importance to the major stakeholders. We
mean quality goals for the architecture. Don't confuse them with
project goals. They are not necessarily identical.

A table with quality goals and concrete scenarios, ordered by priorities -->

The main goals of the architecture are:
<!-- (based on the ISO 25010 standard) -->
- Usability: The framework can be understood, learned, and used, and is attractive to users.
- Maintainability: the framework can be modified, corrected, adapted, and extended to react to changes in the environment.


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