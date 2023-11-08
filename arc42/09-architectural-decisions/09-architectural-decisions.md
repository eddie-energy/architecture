---
title: Architectural Decisions
---

Various architectural decisions are discussed for the implementation of this system. The table below shows an overview of these decisions.

| No. | Title  | Status | Section |
| - | - | - | - |
| AD1 | Dedicated in-house device. | Accepted | [Link](./architectural-decisions/in-house-device/in-house-device.md) |
| AD2 | Publish/subscribe mechanism for sending data from the EDDIE Framework to the Services. | Accepted | [Link](./architectural-decisions/kafka-for-sending-data-to-services/kafka-for-sending-data-to-services.md) |
| AD3 | Implement the permission Facade as a microfrontend. | Accepted | [Link](./architectural-decisions/consent-facade-microfrontend/consent-facade-microfrontend.md) |
| AD4 | Publish/subscribe mechanism for sending data from AIIDA to the EDDIE Framework. | Draft | [Link](./architectural-decisions/kafka-for-sending-data-to-framework/kafka-for-sending-data-to-framework.md) |
| AD5 | Deployment of a database for storing the internal state of the EDDIE Framework. | Draft | Link |

<!-- | AD3 | - | - | - | -->



<!-- In addition to industrial, economic and social problems, EDDIE tackles another technical problem and closes a significant gap for the further development of data-based solutions in the energy domain: the lack of streamlined, secure and easy access to measurements of in-house sensors (e.g., Internet of Things (IoT) devices in households). The Administrative Interface for In-house Data Access (AIIDA) will provide the customer with the infrastructure to share these data streams close to real-time with remote services on a manageable, GDPR-compliant consent basis.

 -->
