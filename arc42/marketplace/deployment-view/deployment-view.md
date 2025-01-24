---
title: Deployment View
order: 4
---


## Overview
The Marketplace system consists of three docker containers (the Marketplace Application, the Database, and IAM) running on Computing Infrastructure managed by the Marketplace operator, e.g., in the cloud or on private computing infrastructure, and the two frontend applications (the Customer Mobile App, and the EP Web App) running on user equipment, e.g., smartphones, laptops, etc. Furthermore, the Marketplace communicates with AIIDA instances running on in-house devices of customers to check on the type of data they offer.  

## Diagram

![](./figures/deployment-diagram-marketplace.svg)

|Node | Description |
| - | - |
| Computing Infrastructure | This is computing infrastructure managed by the Marketplace operator that hosts the Marketplace Application, the Database, and IAM. While the IAM and Marketplace Application may share a common database, they utilize distinct database schemas to manage their respective functionalities. This computing infrastructure is typically a commercial cloud, although private computing infrastructure can also be used.|
| User Device | Two user devices host the frontend applications. The Customer Mobile App typically runs on the smartphone of the customer, and the EP Web App is typically a web interface for the eligible party. |
| AIIDA Embedded App | The AIIDA Embedded App is part of the AIIDA system (not the Marketplace system) and typically runs on in-house infrastructure. |


