---
title: Building Block View
order: 2
---

## Overview

This section describes the building block view of the Marketplace system using the [C4 Model](https://c4model.com/). The Marketplace is an online system for facilitating the communication between customers and eligible parties. After registration, the customers can log in and grant access to energy data from their AIIDA instances, while the eligible parties can submit their energy services and create data requests. All the submitted information is stored in the Database. The Marketplace system also includes the EP Web App for eligible parties to search for energy data of customers, and the Customer Mobile App for customers to search for the energy services of their choice. The customer always has to provide permission before an eligible party can access their data. Specifically, when a customer provides permission for data access, the Marketplace forwards the data request to the customer's AIIDA instance which sends the requested energy data to the EDDIE Framework system of the eligible party (if the permission also exists in the AIIDA instance). Thus, the Marketplace enables the communication between customers and eligible parties. As a result, customers can find and use energy services, and eligible parties can find and request the customer energy data they need. The following diagram shows the internal containers and interactions of the Marketplace system. 

## Diagram


 <C4 diagram="marketplace" />

|Container|Description|
| - | - |
| Customer Mobile App | This is a cross-platform frontend application developed using Flutter to provide an interface for the customers. This application enables the customer to create an account and log in, to register their AIIDA instance, and to browse data requests and services of eligible parties. The Customer Mobile App also communicates with IAM (via HTTP) to request access tokens for authentication of customers. |
| EP Web App | This is a frontend application developed using Vue.js to provide an interface for the eligible parties. This application enables the eligible party to create an account and log in, to create a data request, to create a data service, and to browse AIIDA instances of customers (who have data that fits a data request). The EP Web App also communicates with IAM (via HTTP) to request access tokens for authentication of eligible parties. |
| Marketplace Application | This is a backend application developed using Spring Boot to implement the logic of the Marketplace system. This application receives requests from the Customer Mobile App and the EP Web App, and implements the logic required to create accounts for customers and eligible parties, to store customer and eligible party information, to enable the browsing of data requests and services, and to check AIIDA instances for the data they can offer. The Marketplace application occasionally communicates with IAM (via HTTP) to obtain a public key for validating access tokens. |
| Database | This is a PostgreSQL database that stores user accounts (e.g., of customers and eligible parties), customer information (e.g., about AIIDA instances), and eligible party information (e.g., about data requests and services). |
| IAM | This is a Keycloak application utilized to manage the authentication, authorization, and access of customers and eligible parties. This application uses the Database to store user account information. The Customer Mobile App and EP Web App redirect user account creation requests to the IAM in order to store the user account details in the Database.|

