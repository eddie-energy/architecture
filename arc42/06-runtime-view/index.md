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

The runtime view focuses on interactions among the system's components. The goal of this section is to describe representative and important workflows that occur during the runtime of the system. The table below shows an overview of these workflows:

| Workflow | Involved Actors | Involved Components | Section | 
|-|-|-|-|
| Eligible party registration to MDA | Eligible party | Admin console, consent admin portal, interoperable communication | [Link](./eligible-party-registration/eligible-party-registration.md) |
| Eligible party gets historical validated data from consumer| Consumer, eligible party | Consent Facade, Consent Admin Portal, Meter Data Portal, Interoperable Communication  | [Link](./eligible-party-gets-historical-data/eligible-party-gets-historical-data.md) |
| Consumer revokes consent for access to historical validated data | Consumer, eligible party | Consent Facade, Consent Admin Portal, Meter Data Portal, Interoperable Communication  | [Link](./consent-revokation/consent-revokation.md) |
| Eligible party terminates a running service | Consumer, eligible party | Consent Facade, Consent Admin Portal, Meter Data Portal, Interoperable Communication  | [Link](./eligible-party-gets-historical-data/eligible-party-gets-historical-data.md) |
| Detailed view of eligible party getting historical validated data, consumer consent revocation, and service termination | Consumer, eligible party | Consent Facade, Consent Admin Portal, Meter Data Portal, Interoperable Communication  | [Link](./eligible-party-gets-historical-data/eligible-party-gets-historical-data.md) |

