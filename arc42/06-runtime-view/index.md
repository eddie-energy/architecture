---
title: Runtime View
---

<!-- The runtime view describes concrete behavior and interactions of the
system's building blocks in form of scenarios from the following areas:
-   important use cases or features: how do building blocks execute
    them?
-   interactions at critical external interfaces: how do building blocks
    cooperate with users and neighboring systems?
-   operation and administration: launch, start-up, stop
-   error and exception scenarios
Remark: The main criterion for the choice of possible scenarios
(sequences, workflows) is their **architectural relevance**. It is
**not** important to describe a large number of scenarios. You should
rather document a representative selection. -->

<!-- There are many notations for describing scenarios, e.g.
-   numbered list of steps (in natural language)
-   activity diagrams or flow charts
-   sequence diagrams
-   BPMN or EPCs (event process chains)
-   state machines -->

The runtime view focuses on interactions among the system's components. The goal of this section is to describe representative and important workflows that occur during the runtime of the system. The tables below show an overview of these workflows:

## Eligible party gets historical validated data of consumer

| Workflow | Country | Involved Actors | Involved Components | Section | 
|-|-|-|-|-|
| Detailed view of eligible party getting historical validated data, consumer consent revocation, and service termination | [Implementing Act-compliant](../10-quality-requirements/compliance/implementing-act/implementing-act.md)  | Consumer, eligible party | EDDIE Framework, Consent Admin Portal, Meter Data Portal, EP Website  | [Link](./eligible-party-gets-historical-data/eddie-implementing-act/eddie-implementing-act.md) |
| Eligible party gets historical data of consumer | Austria | Consumer, eligible party | EP Website, Consent Facade, Interoperable Communication, Consent Admin Portal, Meter Data Portal,    | [Link](./eligible-party-gets-historical-data/eligible-party-gets-historical-data-austria/eligible-party-gets-historical-data-austria.md) |
| The Service gets historical data from the EDDIE Framework | Any (EDDIE-internal process) |  | Interoperable Communication, Database, Streaming Infrastructure, Service, Regional Data-sharing Infrastructure | [Link](./eligible-party-gets-historical-data/eddie-framework-offers-data-to-service/eddie-framework-offers-data-to-service.md) |


## Consent revocation

| Workflow | Country | Involved Actors | Involved Components | Section | 
|-|-|-|-|-|
| Consumer revokes consent of eligible party from the Regional Data-sharing Infrastructure | [Implementing Act-compliant](../10-quality-requirements/compliance/implementing-act/implementing-act.md) | Consumer | Consent Admin Portal, Interoperable Communication, Service  | [Link](./consent-revocation/consent-revocation-consumer/consent-revocation-consumer.md) |
| MDA revokes consent of a consumer to an eligible party | [Implementing Act-compliant](../10-quality-requirements/compliance/implementing-act/implementing-act.md) | MDA | Meter Data Administrator, Interoperable Communication, Service  | [Link](./consent-revocation/consent-revocation-meter-data-admin/consent-revocation-meter-data-admin.md) |
| Eligible party terminates a running service | [Implementing Act-compliant](../10-quality-requirements/compliance/implementing-act/implementing-act.md) | Eligible party | Admin Console, Consent Admin Portal, Meter Data Portal, Interoperable Communication  | [Link](./consent-revocation/service-termination-eligible-party/service-termination-eligible-party.md) |
| Consumer terminates a running service | [Implementing Act-compliant](../10-quality-requirements/compliance/implementing-act/implementing-act.md) | Consumer | EP Website,  Consent Admin Portal, Meter Data Portal, Interoperable Communication  | [Link](./consent-revocation/service-termination-consumer/service-termination-consumer.md) |


## Eligible party registration to Regional Data-sharing Infrastructure

The workflows of this process are mandatory but are not within the context of the EDDIE Framework. For this reason, these workflows are discussed in subsection: Prerequisites of Section: [Context and Scope](../03-context-and-scope/index.md).
