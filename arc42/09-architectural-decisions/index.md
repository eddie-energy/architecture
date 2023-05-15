---
title: Architectural Decisions
---
<!-- Important, expensive, large scale or risky architecture decisions
including rationales. With \"decisions\" we mean selecting one
alternative based on given criteria.
Stakeholders of your system should be able to comprehend and retrace
your decisions. -->
<!-- How to document:
-   ADR for every important decision
-   List or table, ordered by importance and consequences or:
-   more detailed in form of separate sections per decision -->

<!-- An ADR should have: 
-Title e.g., "ADR 1: Deployment on Ruby on Rails 3.0.10" or "ADR 9: LDAP for Multitenant Integration"
-Context: This section describes the forces at play, including technological, political, social, and project local.
-Decision: This section describes our response to these forces. It is stated in full sentences, with active voice. "We will …"
-Status: A decision may be "proposed" if the project stakeholders haven't agreed with it yet, or "accepted" once it is agreed. If a later ADR changes or reverses a decision, it may be marked as "deprecated" or "superseded" with a reference to its replacement.
-Consequences: This section describes the resulting context, after applying the decision. All consequences should be listed here, not just the "positive" ones. A particular decision may have positive, negative, and neutral consequences, but all of them affect the team and project in the future.-->

Various architectural decisions are discussed for the implementation of this system. The table below shows an overview of these decisions.

| No. | Title  | Status | Section |
| - | - | - | - |
| AD1 | Kafka for sending data streams from AIIDA to the framework. | Proposed | [Link](./kafka-for-sending-data-to-framework/kafka-for-sending-data-to-framework.md) |
| AD2 | Kafka for assigning data streams from the framework to the services. | Proposed | [Link](./kafka-for-sending-data-to-services/kafka-for-sending-data-to-services.md) |
<!-- | AD3 | - | - | - | -->



<!-- In addition to industrial, economic and social problems, EDDIE tackles another technical problem and closes a significant gap for the further development of data-based solutions in the energy domain: the lack of streamlined, secure and easy access to measurements of in-house sensors (e.g., Internet of Things (IoT) devices in households). The Administrative Interface for In-house Data Access (AIIDA) will provide the customer with the infrastructure to share these data streams close to real-time with remote services on a manageable, GDPR-compliant consent basis.


Throughout the implementation of EDDIE, we will closely monitor ongoing developments in the field of data-sharing infrastructure and technologies and will – during the project – accommodate these developments, where relevant. At the time of writing, important related initiatives like GAIA-X [9] and EIDAS [10] electronic IDs (eID) are emerging. Although not in a state directly usable for EDDIE, GAIA-X will complement the decentralised approach of the distributed data infrastructure. If GAIA-X becomes usable during project runtime, steps will be taken to exploit the new opportunities. In route of the comitology process for the upcoming Implementing Acts for Interoperability and Data Access following Art. 24(2) of Directive (EU) 2019/944 it has been identified, that especially eID has the potential to drastically lower the hurdles for eligible parties/services from another Member State than the customer. At the moment, in some countries eligible parties need to undergo complicated and long-running validation processes, which would become a matter of seconds with supported EU Logins at least for onboarding processes. A close cooperation and interoperability with other initiatives (e.g., European Data Spaces, International Data Spaces Association, Data Spaces Business Alliance) will be sought throughout the project’s implementation. -->
