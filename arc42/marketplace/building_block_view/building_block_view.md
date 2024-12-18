---
title: Building Block View
order: 2
---

## Overview

The Marketplace is an online system that provides an interactive catalogue for customers and eligible parties. After registration, the customers can connect and give access to their AIIDA instances, while the EPs can share their energy services and create data requests. The meta data e.g. IP adress of the customers AIIDA and EPs data is stored at the database. Both, the web application for the EPs, as well as the smartphone app for the customers provide a search function, to actively search for energy data on the one hand and the services of their choice on the other hand. If data is to be exchanged, the customer is always asked for permission first. The marketplace then forwards the data request to the stored instance f.e. an AIIDA instance, that sends the requested energy data to the EP system, if a required permission exists. So the marketplace enables customers and EPs to find each other and communicate via requests. As a result, customers can find and use energy services, while eligible parties can find and request the customer energy data they need. The following diagram shows the internal containers and interactions of the Marketplace. 

## Diagram


 <C4 diagram="marketplace" />

|Container|Description|
| - | - |
| Customer Mobile App | This is a cross-platform frontend application developed using Flutter to provide an interface for the customers. This application enables the customer to create an account and login, to register their AIIDA instance, and to browse data services and requests of eligible parties. |
| EP Web App | This is a frontend application developed using Vue.js to provide an interface for the eligible parties. This application enables the eligible party to create an account and login, to create a data request, to create a data service, and to browse AIIDA instances of customers who have data that fits a data request. |
| Marketplace Backend | This is a backend application developed using Spring Boot to implement the logic of the Marketplace system. This application receives requests from the Customer Mobile App and the EP Web App, and implements the logic required to create accounts for customers and eligible parties, to store customer and eligible party information, to enable the browsing of data requests and services, and to check AIIDA instances for the data they can offer. |
| Database | This is a PostgreSQL database that stores user accounts (e.g., of customers and eligible parties), customer information (e.g., about AIIDA instances), and eligible party information (e.g., about data requests and services). |
| IAM | This is a Keycloak application utilized to manage the authentication and access of customers and eligible parties. It uses the database to store account information.|

