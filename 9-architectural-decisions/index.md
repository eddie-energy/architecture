---
title: Architecture Decisions
---

##### Contents

Important, expensive, large scale or risky architecture decisions
including rationales. With \"decisions\" we mean selecting one
alternative based on given criteria.

Please use your judgement to decide whether an architectural decision
should be documented here in this central section or whether you better
document it locally (e.g. within the white box template of one building
block).

Avoid redundancy. Refer to section 4, where you already captured the
most important decisions of your architecture.

##### Motivation

Stakeholders of your system should be able to comprehend and retrace
your decisions.

##### Form

Various options:

-   ADR ([Documenting Architecture
    Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions))
    for every important decision

-   List or table, ordered by importance and consequences or:

-   more detailed in form of separate sections per decision

See [Architecture Decisions](https://docs.arc42.org/section-9/) in the
arc42 documentation. There you will find links and examples about ADR.

In addition to industrial, economic and social problems, EDDIE tackles another technical problem and closes a significant gap for the further development of data-based solutions in the energy domain: the lack of streamlined, secure and easy access to measurements of in-house sensors (e.g., Internet of Things (IoT) devices in households). The Administrative Interface for In-house Data Access (AIIDA) will provide the customer with the infrastructure to share these data streams close to real-time with remote services on a manageable, GDPR-compliant consent basis.


Throughout the implementation of EDDIE, we will closely monitor ongoing developments in the field of data-sharing infrastructure and technologies and will – during the project – accommodate these developments, where relevant. At the time of writing, important related initiatives like GAIA-X [9] and EIDAS [10] electronic IDs (eID) are emerging. Although not in a state directly usable for EDDIE, GAIA-X will complement the decentralised approach of the distributed data infrastructure. If GAIA-X becomes usable during project runtime, steps will be taken to exploit the new opportunities. In route of the comitology process for the upcoming Implementing Acts for Interoperability and Data Access following Art. 24(2) of Directive (EU) 2019/944 it has been identified, that especially eID has the potential to drastically lower the hurdles for eligible parties/services from another Member State than the customer. At the moment, in some countries eligible parties need to undergo complicated and long-running validation processes, which would become a matter of seconds with supported EU Logins at least for onboarding processes. A close cooperation and interoperability with other initiatives (e.g., European Data Spaces, International Data Spaces Association, Data Spaces Business Alliance) will be sought throughout the project’s implementation.
