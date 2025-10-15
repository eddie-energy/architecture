---
title: Deployment View
order: 4
---

## Overview

The Data Services Marketplace system consists of four Docker containers—the Marketplace Backend, the Marketplace Frontend, the Database, and the Identity and Access Management (IAM) service—running on computing infrastructure managed by the Marketplace operator. This infrastructure may be hosted in the cloud or on private servers.  

Although the Progressive Web App (PWA) is hosted by the operator, it is accessed from the user’s device; therefore, it is represented within the User Device box in the diagram. Furthermore, the Marketplace Backend may redirect certain requests to the eligible party’s service, which runs on the eligible party’s own system.


## Diagram

![](./figures/deployment-diagram-marketplace.svg)

|Node | Description |
| - | - |
| Operator Infrastructure | The computing infrastructure managed by the Data Services Marketplace operator that hosts the Marketplace Backend, Marketplace Frontend, Database, and IAM. The actual deployment setup may vary depending on the operator’s environment. While the IAM typically maintains its own database, it can alternatively use the same database as the Marketplace Backend—provided that separate schemas are used to isolate their respective functionalities. The IAM may also be hosted independently by a third-party provider and does not necessarily need to be operated by the Marketplace operator. |
| User Device | Since the Data Services Marketplace is implemented as a Progressive Web App, the User Device can be any type of end-user device, such as a smartphone, laptop, or tablet. The PWA, running either as an installed app or directly in a browser, communicates with both the Marketplace Backend and IAM using HTTP requests. |
| EDDIE Framework |  The EDDIE Framework is used by eligible parties to provide data services and forms part of the eligible party’s system. The exact deployment of these data services depends on the eligible party but typically runs on in-house infrastructure. |


