---
title: Solution Strategy
---

# Solution Strategy

<!-- A short summary and explanation of the fundamental decisions and
solution strategies, that shape system architecture. It includes
-   technology decisions
-   decisions about the top-level decomposition of the system, e.g.
    usage of an architectural pattern or design pattern
-   decisions on how to achieve key quality goals
-   relevant organizational decisions, e.g. selecting a development
    process or delegating certain tasks to third parties.

Keep the explanations of such key decisions short. You may use a
table: Quality goal, Scenario, Solution approach, Link to Details

Motivate what was decided and why it was decided that way, based upon
problem statement, quality goals and key constraints. Refer to details
in the following sections. -->

There are certain goals of the framework which can be achieved by following a specific strategy. These goals are outlined in the following table which also provides links to more detailed explanations. Additional high-level information on these goals is presented in the subsections below.

| No. | Quality Goal | Scenario | Approach | Details |
|-|-|-|-|-|
| 1 | Consent facade | All consumers shall provide their consent for sharing data in a homogeneous manner regardless of their country or their energy provider.| Implement a Consent Facade component based on the European Reference Process for providing consent. This component shall include speacialized adaptors each one implmenting the secificities of an energy provider. | [Block view](/5-building-block-view/index.md). [Runtime view](/6-runtime-view/index.md). |
| 2 | World-wide coverage | Consumers from urban environemnts around the world shall be eligible to use the framework. | Devise a multi-stage expansion plan (starting from one area and expanding to other) that achieves coverage of a large part of urban societies around the world. | [Expantion plan](#expansion-plan). |


## Consent Facade


## Expansion Plan 

There will be three phases for connectivity with regional data hubs. The Phase 1 will be with contributors to the consortium (already adding up to more than 69% of European metering points as estimated in section 1.2.7), the Phase 2 will be with other data hubs not directly in the project (25%) and a Phase 3 adds data-sharing infrastructures outside Europe. So, EDDIE aims on making available more than 70% of European metering points (taking into account that not all attempted regional connectors will be feasible due to environmental factors) – see Figure 1.

![EDDIE Coverage](/1-introduction-and-goals/figures/EDDIE_Coverage.jpg)

The consortium of EDDIE includes leading experts on data-sharing, data interoperability, smart grids, electricity and gas metering, standardisation, distributed flexibility and legislation in Europe, modelling and IT development, dissemination and a broad coverage of data-sharing infrastructure operators, who will contribute with connecting and opening their national environments. Together, they feature more than 60% of European metering points for electricity alone.


The overall methodology of EDDIE is oriented towards the first main objective to (OBJ#1) provide a dependable, scalable and extensible European Distributed Data Infrastructure for Energy Framework (EDDIE Framework). This means that the overlying European interface will be given priority, and data accessible through data-sharing infrastructure (1) provided by metered data administrators will be available first. In parallel, and independently but synchronised, the work on the second main objective to (OBJ#2) provide an Administrative Interface for In-house Data Access (AIIDA) to feed in-house data (2) to EDDIE Framework users will be started.

Both together, the EDDIE Framework and AIIDA will be put into a consistent overall architectural environment in an extensive architecture and specification phase planned for the first six months of the project. Publicly available data (3) from different Member States (MSs) also often has some hurdles to take and should also be part of a unified interface in the future, but for the initial EDDIE project, it shall be out of scope. See Figure 3 that illustrates the 3 major data family groups (1–3) considered within EDDIE as described in detail in the following:

•	Data-sharing infrastructure: These are national energy data management environments and online data hubs. Historical metering and consumption data is collected, validated and stored at entities that need to make that data available in turn to established actors or eligible parties. At the moment, this is done diversly and by different players in each Member State. Also, different processes need to be followed and data is delivered in different formats and schemas. The EDDIE Framework communicates with these data-sharing infrastructures and provides a streamlined consent management user flow and a transformation towards a common pivotal format.
•	In-house data sources: Currently, near real-time data can in most MSs be read from the “standardised interface” on the smart meter (if it has been ordered and installed after July 4th 2019). If the customer manages to connect to that interface and make that data processable, it is still only available in-house and it needs to be transformed to a common format. The Administrative Interface for In-house Data Access (AIIDA) will be in the position to read that data from different meter models, standards and configurations and make it available through an online consent-based mechanism. This means that users of services that are based on the EDDIE Framework can be shown a button on e.g., the service website saying “connect my in-house data” and will be routed to their Consent Management Interface (within AIIDA). If a consent is given, the AIIDA instance will deliver the requested data to the EDDIE Framework of the service for which a consent was granted. Not only main meter interfaces will be supported, but also others (e.g., sub-meters).
•	Publicly available data: There is also other – often publicly available – data, that is necessary for many processes, but does not directly belong to the customer and also does not show consumption or generation time series characteristics. National weather forecasts, price feeds or market reference data fall under this category. These data families are still depicted diversely and by different players depending on the country. Optionally, but if the time allows, the EDDIE project team will also address this field and strive to make it available in a unified pivotal format through the EDDIE Framework.







The overall methodology of EDDIE is oriented towards the first main objective to (OBJ#1) provide a dependable, scalable and extensible European Distributed Data Infrastructure for Energy Framework (EDDIE Framework). This means that the overlying European interface will be given priority, and data accessible through data-sharing infrastructure (1) provided by metered data administrators will be available first. In parallel, and independently but synchronised, the work on the second main objective to (OBJ#2) provide an Administrative Interface for In-house Data Access (AIIDA) to feed in-house data (2) to EDDIE Framework users will be started.

Both together, the EDDIE Framework and AIIDA will be put into a consistent overall architectural environment in an extensive architecture and specification phase planned for the first six months of the project. Publicly available data (3) from different Member States (MSs) also often has some hurdles to take and should also be part of a unified interface in the future, but for the initial EDDIE project, it shall be out of scope. See Figure 3 that illustrates the 3 major data family groups (1–3) considered within EDDIE as described in detail in the following:

•	Data-sharing infrastructure: These are national energy data management environments and online data hubs. Historical metering and consumption data is collected, validated and stored at entities that need to make that data available in turn to established actors or eligible parties. At the moment, this is done diversly and by different players in each Member State. Also, different processes need to be followed and data is delivered in different formats and schemas. The EDDIE Framework communicates with these data-sharing infrastructures and provides a streamlined consent management user flow and a transformation towards a common pivotal format.
•	In-house data sources: Currently, near real-time data can in most MSs be read from the “standardised interface” on the smart meter (if it has been ordered and installed after July 4th 2019). If the customer manages to connect to that interface and make that data processable, it is still only available in-house and it needs to be transformed to a common format. The Administrative Interface for In-house Data Access (AIIDA) will be in the position to read that data from different meter models, standards and configurations and make it available through an online consent-based mechanism. This means that users of services that are based on the EDDIE Framework can be shown a button on e.g., the service website saying “connect my in-house data” and will be routed to their Consent Management Interface (within AIIDA). If a consent is given, the AIIDA instance will deliver the requested data to the EDDIE Framework of the service for which a consent was granted. Not only main meter interfaces will be supported, but also others (e.g., sub-meters).
•	Publicly available data: There is also other – often publicly available – data, that is necessary for many processes, but does not directly belong to the customer and also does not show consumption or generation time series characteristics. National weather forecasts, price feeds or market reference data fall under this category. These data families are still depicted diversely and by different players depending on the country. Optionally, but if the time allows, the EDDIE project team will also address this field and strive to make it available in a unified pivotal format through the EDDIE Framework.

<!-- ![EDDIE Overview](/1-introduction-and-goals/figures/EDDIE_overview.png) -->
<div align="center">
<img src="./figures/EDDIE_overview.png" width="850" alt="test">
</div>

Activities towards the fourth main objective to (OBJ#4) provide extensive scientific assessment and share real-world experience on various aspects of data-sharing will start accompanying these developments and when the architecture and specification phase is completed and Milestone 2 (project month 9) is achieved. Implementation of software and systems to be developed within EDDIE will deliver usable and assessable preliminary results soon, to ensure that their contribution is aligned with the overall objectives during the whole lifecycle of the project. Following this rationale, software deliverables will be released on the open-source code management platform (GitHub [11]), so that all interested stakeholders can easily test and provide feedback. It is planned to ramp up dissemination and future development and maintenance through options like the formation of a new or the adoption of the project results by an existing open-source foundation such as the Linux Foundation for Energy [12] or European organisations.

