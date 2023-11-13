---
title: Quality Requirements
---

<!-- This section contains all quality requirements as quality tree with
scenarios. The most important ones have already been described in
section 1.2. (quality goals)
Here you can also capture quality requirements with lesser priority,
which will not create high risks when they are not fully achieved.
The quality tree (as defined in ATAM -- Architecture Tradeoff Analysis
Method) with quality/evaluation scenarios as leafs.

The quality tree is a high-level overview of the quality goals and
requirements:
-   tree-like refinement of the term \"quality\". Use \"quality\" or
    \"usefulness\" as a root
-   a mind map with quality categories as main branches 
quality tree example https://arnon.me/2010/05/utility-trees-hatching-quality-attributes/
-->

The quality requirements of the system are outlined in the quality tree below. This tree has 3 main aspects, i.e., Deployment ,Compliance, and Security, each one having one or more requirements.

<div align="center"> 
<img src="./figures/quality-tree.svg">
</div>

The following sections provide tables which show the requirements for every aspect. These tables provide links to more detailed information.

## Deployment Requirements

| Deployment Requirement | Section |
|-|-|
| Decentralized | [Link](./quality-requirements/decentralized/decentralized.md) |
| Single-command deployment | [Link](./quality-requirements/single-command-deployment/single-command-deployment.md) |
| Deployment options | [Link](./quality-requirements/deployment-options/deployment-options.md) |
| External database support | [Link](./quality-requirements/external-database-support/external-database-support.md) |
| External streaming infrastructure support | [Link](./quality-requirements/external-streaming-infrastructure/external-streaming-infrastructure.md) |

## Compliance Requirements

| Compliance Requirement | Section |
|-|-|
| Implementing Act (SGTF) | [Link](./quality-requirements/implementing-act/implementing-act.md) |
| Access historical and real-time data | [Link](./quality-requirements/access-historical-real-time-data/access-historical-real-time-data.md) |
| Identify technical regional hurdles | [Link](./quality-requirements/identify-regional-hurdles/identify-regional-hurdles.md) |

## Security Requirements

| Security Requirement | Section |
|-|-|
| Data access only for authorized Services | [Link](./quality-requirements/data-access-for-authorized-services/data-access-for-authorized-services.md) |
| Consent revocation | [Link](./quality-requirements/consent-revocation/consent-revocation.md) |












<!-- Concretization of (sometimes vague or implicit) quality requirements
using (quality) scenarios.
These scenarios describe what should happen when a stimulus arrives at
the system.
For architects, two kinds of scenarios are important:
-   Usage scenarios (also called application scenarios or use case
    scenarios) describe the system's runtime reaction to a certain
    stimulus. This also includes scenarios that describe the system's
    efficiency or performance. Example: The system reacts to a user's
    request within one second.
-   Change scenarios describe a modification of the system or of its
    immediate environment. Example: Additional functionality is
    implemented or requirements for a quality attribute change. 

 A scenario should have:
- Context – under what circumstances
- Stimulus – trigger in Use case lingo
- Response – what the system does. 

 ### Unauthorized Access

#### Context

#### Stimulus

#### Response  -->

