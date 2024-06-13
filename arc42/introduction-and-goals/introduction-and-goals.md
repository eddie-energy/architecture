---
title: Introduction and Goals
order: 1
---

<!-- Describes the relevant requirements and the driving forces that software architects and the development team must consider. These include

-   underlying
-   essential fu business goals,
-   essential features, functional requirements,
-   quality goals for the architecture and
-   relevant stakeholders and their expectations -->

## Background

This document describes the functions
Today, more and more energy data-based services emerge within and beyond the energy sector, enabled by European legislation. In the energy sector, Directive (EU) 2019/944 of the Clean Energy for all Europeans Package recently established the rights to access energy-related metering, production and consumption data for customers and eligible parties of their choice. Services of this kind empower customers, can consult energy buyers based on their consumption patterns or contribute to efficient energy management, amongst others. However, the main barrier today is that there is no large-scale, uniform and easy access to energy data across European Member States, which is a severe handicap for new services (e.g., web-based or mobile applications) to emerge, raise the energy awareness of citizens and foster economic growth on a European level. Currently, players also act on national data-sharing infrastructure and practices, which limits their interoperability and growth perspective. These constraints of national data-sharing infrastructure have an industrial, economic and social dimension on a European level and beyond. Our envisioned project European Distributed Data Infrastructure for Energy (EDDIE) lowers data integration costs drastically to tackle the existing economic problem of the non-existent or limited energy data interoperability. 

On an industrial, but also economic level, it is hard to find out, how to get access to different kinds of energy-related data in other Member States (e.g., consumption patterns, production). Even if the know-how is available, it is still a considerable effort to develop and maintain connectivity with regional data-sharing infrastructures. Reports show that 50% to 80% of the costs of data projects go into data integration. These high costs for data integration imply that new actors in the energy system cannot focus on their already complex core tasks – e.g., to provide customers with energy efficiency services or to provide services to the grid. On a social level, the awareness of European citizens about their energy consumption is – if the data is available at all – mostly limited to national surroundings which hinders the deployment of cross-border energy services especially in close to the border regions. 

In addition to industrial, economic and social problems, EDDIE tackles another technical problem and closes a significant gap for the further development of data-based solutions in the energy domain: the lack of streamlined, secure and easy access to measurements of in-house sensors (e.g., Internet of Things devices in households). The Administrative Interface for In-house Data Access (AIIDA) will provide the customer with the infrastructure to share these data streams in near real-time with remote services on a manageable, GDPR-compliant consent basis.
Together, the EDDIE Framework and AIIDA will enable interoperable, truly European solutions based on data available in online energy data hubs and “in-house data”. These two main components form the nucleus for a Common European Energy Data Space.

## Business Goals

The business goals of this project are:
1. Provide the EDDIE Framework as a dependable, scalable and extensible framework that is open source and free to use and change. The EDDIE Framework will be installable in the domain of eligible parties with the need for access to energy data on a customer consent basis. There will be no need for additional centralized intermediaries. This main outcome is aligned with European interoperability, digitalization and data-related legislation, and also provides means to feed back into these initiatives, leading in turn to better-informed decision-making.
1. Provide AIIDA as an Administrative Interface for In-house Data Access, easily integrable in domestic software systems like smart home solutions or edge devices, making use of existing or additional hardware to be easily deployed in customer houses. Provide customers with a new solution to make available data streams from the standardized near real-time interface on the smart meter (and potentially from a variety of in-house sensors). Allow customers to share their data with services using the EDDIE Framework, on a secure, clean and manageable consent basis.
1. Provide extensive scientific assessment and share real-world experience on various aspects of data-sharing, from a social, economic and technological point of view. The academic institutions within the EDDIE consortium will care about this scientific assessment from energy and behavioral economics, regulatory and legislative, and system safety and security aspects. For all prototypes, we put a focus on human-centered design and user research to support the social acceptance of new energy technologies and increase the participation of consumers in energy.
1. Provide the EDDIE Data Services Market Place as a web-based and/or mobile solution, which allows customers to easily access applications based on the EDDIE Framework, learn about the services offered, use services of interest and participate in the data-sharing community. Customers must and will always retain full control over their private data at all times. The EDDIE Data Services Market Place will also contain all demonstrated prototypes.

## Essential Features

Key features of the project are:
- Provide software that acts as an In-house Consent Administrator (ICA) and Metered Data Administrator (MDA) for in-house measured data, runnable as far as possible on existing hardware already available in-house, e.g., home automation systems, network attached storage systems, minicomputers, SoCs. Initially, the focus will be on making available data provided through standardized interfaces as mandated by Article 20(a) of Directive (EU) 2019/944, and will be stretched to other data sources (e.g., sub-meter data) later down the road. Developments in legislative activities (e.g., network codes and implementing acts on interoperability and distributed flexibility) will be taken into account when setting
priorities. 
- Provide the means to integrate near real-time data from AIIDA to the EDDIE Framework. To make these data streams even “detectable” is a design challenge that needs intensive architectural activities considering aspects like security, usability, and performance amongst others. The goal here is to optimize the user experience within the EDDIE/AIIDA service landscape, which implies that AIIDA will also have consent management for the customer.
- Account for observability and manageability for the customers. Customers should always and easily be aware of how and when they share their data (and also by whom). Seamless integration in existing application infrastructure (e.g., smart home apps as far as possible) is vital for the acceptance of the solution.

## Essential Functional Requirements

The essential functional requirements are listed below.
- Decentralized: The EDDIE Framework is installable on any computer or cloud environment under the full control of the actor using it. There is no need for a central instance or a Pan-European Data Hub. The decentralized approach also guarantees a maximum degree of scalability, flexibility and resilience.
- Open-source: The EDDIE Framework and AIIDA can be freely downloaded, forked and changed, without any fees or licensing constraints. After the project lifecycle, the EDDIE consortium will transfer the management and maintenance to a relevant body. That point in time will also coincide nicely with European developments in the field of interoperability, and the decision as to which organization to hand over will respect these.
- Far-reaching: The EDDIE Framework achieves high compatibility with regional data-sharing infrastructures within Europe (potentially, and beyond Europe). Notably, EDDIE is for a good share initiated and driven by European data-sharing infrastructure operators who are participants in the consortium. This involvement means that we have these organizations onboard which need to make the data available directly in the project and on a broad geographical basis. 
- Not-for-profit: Apart from the innovation and know-how generated in the work on EDDIE, none of the consortium partners is expecting any direct returns or profit out of the generated software and deliverables. All participants have expertise in different domains or geographical areas, which they want to contribute to a greater – common – profit and a reliable infrastructure for an enhanced market.

<!-- ## Quality Goals -->

<!-- The top three (max five) quality goals for the architecture whose
fulfillment is of the highest importance to the major stakeholders. We
mean quality goals for the architecture. Don't confuse them with
project goals. They are not necessarily identical.
A table with quality goals and concrete scenarios, ordered by priorities -->
<!-- (based on the ISO 25010 standard) -->
<!-- The main goals of the architecture are:

- Usability: The framework can be understood, learned, and used, and is attractive to the stakeholders.
- Maintainability: The framework can be modified, corrected, adapted, and extended to react to changes in its environment. -->


## Roles

<!-- Explicit overview of stakeholders of the system, i.e. all persons, roles
or organizations that

-   should know the architecture
-   have to be convinced of the architecture
-   have to work with the architecture or with code
-   need the documentation of the architecture for their work
-   have to come up with decisions about the system or its development -->

Roles that may be involved are:

| Abbr. | Role | Description |
|-|-|-|
| EP | Eligible Party | A Party requesting or processing data shared by the customer. |
| PA | Permission Administrator | A party responsible for administrating a register of consents. The PA makes information about the consent (but not necessarily the data to be shared) available on request for entitled parties in the sector. |
| OCA | Online Consent Administrator | PA with a constant and publicly usable interface through an online service. |
| ICA | In-house Consent Administrator | Functional service managing the access to in-house data sources that would not be available online. Within the context of the EDDIE project, AIIDA is targeted to act as such. |
| MDA | Metered Data Administrator | A party responsible for storing and distributing validated measured data. |
| MS | Member State | Member State of the European Union. Within the scope of this project, MS can be viewed in a wider sense, meaning rather “regional cluster supporting data-sharing”, but political borders and data-sharing infrastructure responsibility for an area are not always the same. |
| FSP | Flexibility Service Provider | Independent energy service providers aggregating flexibilities into energy and grid ancillary service markets. |
| BRP | Balance Responsible Party | A party that is – according to the Harmonized Electricity Market Role Model (HEMRM) - responsible for its imbalances, meaning the difference between the energy volume physically injected to or withdrawn from the system and the final nominated energy volume, including any imbalance adjustment within a given imbalance settlement period. |
| DER | Distributed Energy Resource | Distributed Energy Resources are energy resources spread over different levels and locations throughout the energy systems, typically within residential low voltage environments. They can consist of Distributed Generation (e.g., photovoltaic systems), Distributed Flexible Loads (e.g., heat pumps, smart heaters) as well as Distributed Storage (e.g., standalone batteries, V1G and V2X electric vehicles) |
