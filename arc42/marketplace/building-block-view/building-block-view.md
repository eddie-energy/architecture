---
title: Building Block View
order: 2
---

## Overview

This section describes the building block view of the Marketplace system using the [C4 Model](https://c4model.com/). For this purpose, an overview of the Marketplace containers is provided, along with their interactions. 

The Data Services Marketplace is an online platform that facilitates communication between customers and eligible parties.  
After registering through the Identity and Access Management (IAM) system, eligible parties can submit their data services and data hubs, while customers can browse available data services. Eligible parties, in contrast, can browse both data services and data hubs.

All submitted information is persisted in the database.  
Each published data service or data hub includes a link to the corresponding service hosted on the eligible party’s infrastructure. 

The following diagram shows the internal containers and interactions of the Marketplace system. 

## Diagram


 <C4 diagram="data-services-marketplace" />

|Container|Description|
| - | - |
| Progressive Web App (PWA) |A cross-platform frontend application developed using Vue.js, providing the main user interface of the Data Services Marketplace. Users can create accounts, log in, and browse or submit data services and data hubs. As a Progressive Web App, it is accessible both via a web browser and as an installable mobile app. Eligible parties are encouraged to use the browser version for an optimized experience when submitting new services, while customers can conveniently use the mobile app to browse services anytime, anywhere. |
| Marketplace Backend | A backend application developed with Spring Boot, responsible for the core business logic of the Marketplace system. It handles requests from the PWA, manages customer and eligible party information, and enables the submission and browsing of data services and data hubs. 
| Database | A PostgreSQL database used by the Marketplace Backend to persist system data. It stores information such as eligible party details, submitted data services and data hubs, and customer-related data including ratings and comments. |
| IAM | The Identity and Access Management component, implemented using Keycloak, manages authentication, authorization, and user access control for customers and eligible parties. It stores user credentials (for example, username, password) and role information. Customers are assigned standard user roles, whereas eligible parties are granted specific roles that enable advanced features such as submitting data services and data hubs, and accessing the data hub section. |

