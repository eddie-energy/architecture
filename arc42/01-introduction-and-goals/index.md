---
title: Introduction and Goals
---

<!-- Describes the relevant requirements and the driving forces that software architects and the development team must consider. These include

-   underlying
-   essential fu business goals,
-   essential features, functional requirements,
-   quality goals for the architecture and
-   relevant stakeholders and their expectations -->

## Background

Today, more and more energy data-based services emerge within and beyond the energy sector, enabled by European
legislation. In the energy sector, Directive (EU) 2019/944 of the Clean Energy for all Europeans Package recently
established the rights to access energy-related metering, production and consumption data for customers and
eligible parties of their choice. Services of this kind empower customers, can consult energy buyers based on their
consumption patterns or contribute to efficient energy management, amongst others.
However, the main barrier today is that there is no large scale, uniform and easy access to energy data across
European Member States (MSs), which is a severe handicap for new services, e.g., as web-based or mobile
applications, to emerge, raise the energy awareness of citizens and foster economic growth on a European level.
Currently, players also act on national data-sharing infrastructure and practices, which limits their interoperability
and growth perspective. These constraints of national data-sharing infrastructure have an industrial, economic and
social dimension on a European level and beyond. Our envisioned project European Distributed Data Infrastructure for Energy (EDDIE) lowers data integration costs
drastically to tackle the existing economic problem of the non-existent or limited energy data interoperability. 

On an industrial, but also economic level, it is hard to find out, how to get access to different kinds of energy-related
data in other MSs (e.g., consumption patterns, production). Even if the know-how is available, it is still a
considerable effort to develop and maintain connectivity with another MSs data-sharing infrastructure. Reports
show that 50% to 80% of the costs of data projects go into data integration. These high costs for data integration
imply that new smart and much-needed actors in our energy system cannot focus on their already complex core tasks
– e.g., provide customers with energy efficiency services or (enabling customers to) provide services to the grid. On
a social level, the awareness of European citizens about their energy consumption is – if the data is available at all –
mostly limited to national surroundings which hinders the deployment of cross-border energy services especially
in close to the border regions. 

In addition to industrial, economic and social problems, EDDIE tackles another technical problem and closes a
significant gap for the further development of data-based solutions in the energy domain: the lack of streamlined,
secure and easy access to measurements of in-house sensors (e.g., Internet of Things (IoT) devices in households).
The Administrative Interface for In-house Data Access (AIIDA) will provide the customer with the infrastructure to
share these data streams close to real-time with remote services on a manageable, GDPR-compliant consent basis.
Together, the EDDIE Framework and AIIDA will enable interoperable, truly European solutions based on data
available in online energy data hubs and “in-house data”. These two main components form the European Distributed
Data Infrastructure for Energy – EDDIE – form the nucleus for a Common European Energy Data Space.

## Business Goals

The business goals of this project are:
1. Provide the EDDIE Framework as a dependable, scalable and extensible European Distributed Data Infrastructure for Energy Framework (EDDIE Framework), opensource and free to use and change. The EDDIE Framework will be installable in the domain of eligible parties with the need of access to energy data on a customer consent basis. There will be no need for additional centralised intermediaries. This main outcome is aligned with European interoperability, digitalisation and data-related legislation, and also provides means to feed back into these initiatives, leading in turn to better informed decision-making.
1. Provide AIIDA as an Administrative Interface for In-house Data Access (AIIDA), easily integrable in domestic software systems like smart home solutions or edge devices, making use of existing or additional hardware to be easily deployed in consumer houses. Provide customers a new solution to make available data streams from the standardised near real-time interface on the smart meter (priority) and a variety of in-house sensors. Allow customers to share their data with services using the EDDIE Framework, on a secure, clean and manageable consent basis.
1. Provide extensive scientific assessment and share real-world experience on various aspects of data-sharing, from a social, economic and technological point of view. The academic institutions within the EDDIE consortium will care about this scientific
assessment from energy and behavioural economics, regulatory and legislative, and system safety and security aspects. For all prototypes, we put a focus on human-centred design and user research to support the social acceptance of new energy technologies and increase participation of consumers in energy.
1. Provide the EDDIE Data Services Market Place as a web-based and/or mobile solution, which allows end-users to easily access applications based on the EDDIE Framework, learn about the services offered, use services of interest and participate in the data-sharing community. End-users must and will always retain full control over their own and private data at all times. The EDDIE Data Services Market Place will also contain all demonstrated prototypes.

## Essential Features

Key features of the project are:
- Provide a software landscape that acts as an In-house Consent Administrator (ICA) and Metered Data
Administrator (MDA) for in-house measured data runnable as far as possible on existing hardware already
available in-house, e.g., home automation systems, network attached storage systems, mini computers, SoCs.
Focus for the first phase of the project will be on making available data provided through standardised
interfaces as mandated by Article 20(a) of Directive (EU) 2019/944, and will be stretched to other data
sources (e.g., sub-meter data) later down the road. Developments in legislative activities (e.g., network codes
and implementing acts on interoperability and distributed flexibility) will be taken into account when setting
priorities.
- Provide means for EDDIE Consent Façade in order to enable services to e.g., add a button “connect in-house
data source” in their user management workflows. To make these data streams even “detectable” is a design
challenge that needs intensive architectural activities considering aspects like security, usability,
performance amongst others. The goal here is to optimise the User Experience (UX) within the
EDDIE/AIIDA service landscape, which implies that AIIDA will also get a consent management face for
the customer to be re-directed to.
- Account for observability and manageability for the customers. The customers should always and easily be
aware on which, how, when and to whom they share their data. Seamless integration in existing
application infrastructure (e.g., smart home apps as far as possible) is vital for the acceptance of the solution. 

## Essential Functional Requirements

The essential functional requirements are listed below.
- Decentralised: The EDDIE Framework is installable on any computer or cloud environment under the full
control of the actor using it. There is no need for a central instance or a Pan-European Data Hub. The
decentralised approach also guarantees for a maximum degree of scalability, flexibility and resilience.
- Open-source: The EDDIE Framework and AIIDA can be freely downloaded, forked and changed, without
any fees or licensing constraints. After the project lifecycle, the EDDIE consortium will transfer the
management and maintenance to a relevant body. That point in time will also coincide nicely with European
developments in the field of interoperability and the decision to which organisation to hand over will be
respecting these.
- Not-for-profit: Apart from the innovation and know-how generated in the work on EDDIE, neither of the
consortium partners is expecting any direct returns or profit out of the deliverables. All participants have
expertise in different domains or geographical areas, which they want to contribute to a greater – common –
profit and a reliable infrastructure for an enhanced market.
- Far-reaching: EDDIE is for a good share initiated and driven by European data-sharing infrastructure
operators who are participants in the consortium. This involvement means that we have these organisations
aboard which need to make the data available directly in the project and on a broad geographical basis. There
will be three phases for connectivity with regional data hubs.

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
| EP | Eligible Party | Party requesting or processing data shared by the customer (e.g., data-driven service, aggregators, established actors, etc.) |
| CA | Consent Administrator | A party responsible for administrating a register of consents. The CA makes information about the consent (but not necessarily the data to be shared) available on request for entitled parties in the sector. |
| OCA | Online Consent Administrator | CA with a constant and publicly usable interface through an online service. |
| ICA | In-house Consent Administrator | Functional service managing the access to in-house data sources that would not be available online. Within the context of the EDDIE project, AIIDA is targeted to act as such. |
| MDA | Metered Data Administrator | A party responsible for storing and distributing validated measured data. |
| MS | Member State | Member State of the European Union. Within the scope of this project, MS can be viewed in a wider sense, meaning rather “regional cluster supporting data-sharing”, but political borders and data-sharing infrastructure responsibility for an area are not always the same. |
| FSP | Flexibility Service Provider | Independent energy service providers aggregating flexibilities into energy and grid ancillary service markets. |
| BRP | Balance Responsible Party | A party that is – according to the Harmonised Electricity Market Role Model (HEMRM) - responsible for its imbalances, meaning the difference between the energy volume physically injected to or withdrawn from the system and the final nominated energy volume, including any imbalance adjustment within a given imbalance settlement period. |
| DER | Distributed Energy Resource | Distributed Energy Resources are energy resources spread over different levels and locations throughout the energy systems, typically within residential low voltage environment. They can consist of Distributed Generation (PV, etc...), Distributed Flexible Loads (Heat Pumps, Smart heaters, etc..) as well as Distributed Storag (standalone batteries, V1G & V2X EVs) |
