---
title: Building Block View
order: 2
---

## Overview

This section describes the static decomposition of the Marketplace into building blocks. The goal is to provide an overview of the Marketplace system including all the utilized system components and containers, as well as their main interactions. In general, the Marketplace system provides a discovery mechanism for customers and eligible parties. To this end, the Marketplace enables customers to search for energy services and data requests of eligible parties. Also, it enables eligible parties to search for energy data of customers. As a result, customers can find and use the energy services of their choice, and eligible parties can find and request the customer data they need. The following diagram shows the internal containers and interactions of the Marketplace. 

## Diagram

 <!-- <C4 diagram="container-marketplace" /> -->

|Container|Description|
| - | - |
| Customer Mobile App | This is a cross-platform frontend application developed using Flutter to provide an interface for the customers. This application enables the customer to create an account and login, to register their AIIDA instance, and to browse data services and requests of eligible parties. |
| EP Web App | This is a frontend application developed using Vue.js to provide an interface for the eligible parties. This application enables the eligible party to create an account and login, to create a data request, to create a data service, and to browse AIIDA instances of customers who have data that fits a data request. |
| Marketplace | This is a backend application developed using Spring Boot to implement the logic of the Marketplace system. This application receives requests from the Customer Mobile App and the EP Web App, and implements the logic required to create accounts for customers and eligible parties, to store customer and eligible party information, to enable the browsing of data requests and services, and to check AIIDA instances for the data they can offer. |
| Database | This is a PostgreSQL database that stores user accounts (e.g., of customers and eligible parties), customer information (e.g., about AIIDA instances), and eligible party information (e.g., about data requests and services). |
| IAM | This is a Keycloak application utilized to manage the authentication and access of customers and eligible parties. |

