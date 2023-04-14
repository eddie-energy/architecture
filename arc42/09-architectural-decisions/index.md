---
title: Architecture Decisions
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
| AD1 | Kafka for sending data streams from AIIDA to the framework. | Proposed | [Link](#ad1-kafka-for-sending-data-streams-from-aiida-to-the-framework) |
| AD2 | Kafka for assigning data streams from the framework to the services. | Proposed | [Link](#ad2-kafka-for-assigning-data-streams-from-the-framework-to-the-services) |
| AD3 | - | - | - |

## AD1: Kafka for sending Data Streams from AIIDA to the Framework 

### Context

AIIDA, which runs on in-house infrastructure, collects data from a smart meter in real time. This data forms a data stream that originates in AIIDA and needs to be sent to the framework (running on the infrastructure of the eligible party). Thus, each AIIDA instance creates one data stream that has to be sent to one or more instances of the framework, i.e., one or more eligible parties. AD1 refers to the communication mechanism utilized to facilitate the transmission of a data stream from one instance of AIIDA to one or more instances of the framework.    

### Decision

Integration of an Apache Kafka client within AIIDA, that creates one data stream for every framework that needs to receive the data, i.e., for every eligible party. Each eligible party has to integrate an Apache Kafka cluster. Information on how to send data from the client to each cluster (e.g., IP address, port, topic ID) has to be configured in the client. As a result, each AIIDA instance sends the same data stream multiple times, i.e., to each eligible party.

### Consequences

Positive consequences: 
- The goal to send the data from one AIIDA instance to multiple instances of the framework is achieved by Kafka, thereby with little development effort.
- The Kafka cluster on the eligible party infrastructure can also be used for other tasks, e.g., for internal communication between components, or for forwarding the data streams to the services. 

Negative consequences: 
- Since AIIDA may be running on a resource-constrained device, sending multiple data streams at once might affect the device's performance (e.g., CPU, RAM).
- Uploading many identical data streams at once might be limited by the available network bandwidth, i.e., some eligible parties may receive the data with delay.

## AD2: Kafka for Assigning Data Streams from the Framework to the Services

### Context

### Decision

### Consequences


<!-- In addition to industrial, economic and social problems, EDDIE tackles another technical problem and closes a significant gap for the further development of data-based solutions in the energy domain: the lack of streamlined, secure and easy access to measurements of in-house sensors (e.g., Internet of Things (IoT) devices in households). The Administrative Interface for In-house Data Access (AIIDA) will provide the customer with the infrastructure to share these data streams close to real-time with remote services on a manageable, GDPR-compliant consent basis.


Throughout the implementation of EDDIE, we will closely monitor ongoing developments in the field of data-sharing infrastructure and technologies and will – during the project – accommodate these developments, where relevant. At the time of writing, important related initiatives like GAIA-X [9] and EIDAS [10] electronic IDs (eID) are emerging. Although not in a state directly usable for EDDIE, GAIA-X will complement the decentralised approach of the distributed data infrastructure. If GAIA-X becomes usable during project runtime, steps will be taken to exploit the new opportunities. In route of the comitology process for the upcoming Implementing Acts for Interoperability and Data Access following Art. 24(2) of Directive (EU) 2019/944 it has been identified, that especially eID has the potential to drastically lower the hurdles for eligible parties/services from another Member State than the customer. At the moment, in some countries eligible parties need to undergo complicated and long-running validation processes, which would become a matter of seconds with supported EU Logins at least for onboarding processes. A close cooperation and interoperability with other initiatives (e.g., European Data Spaces, International Data Spaces Association, Data Spaces Business Alliance) will be sought throughout the project’s implementation. -->
