---
title: Solution Strategy
order: 1
---

## Overview

The Marketplace is a software system deployed and maintained by the Marketplace operator. The main provided functionality is to connect customers (wanting to share their data, and use energy services) to eligible parties (wanting to collect energy data of customers, and offer energy services). To this end, the Marketplace includes components running on computing infrastructure managed by the Marketplace operator, e.g., in the cloud or on-premise.

## Why is the Marketplace necessary in the context of EDDIE?

While customers may want to find eligible parties and access their services, and eligible parties may need to find customers for collecting their energy data, there is no catalog where customers can search for services, and eligible parties can search for data of customers. For this reason, the Marketplace offers a discovery mechanism for customers and eligible parties. The eligible parties can create in the Marketplace *data requests* which express the need to find customers willing to offer data, and *data services* which are running applications offering energy services to customers (e.g., visualizations, predictions, etc.). The customers can access the Marketplace to browse the data requests and services, and interact with the respective eligible parties. Thus, the Marketplace aids in bringing together customers and eligible parties, who may then engage in data sharing independently of the Marketplace, i.e., no energy data is shared through the Marketplace.

## How do customers and eligible parties access the Marketplace?

The Marketplace system includes two frontend applications for users: the Customer Mobile App for the customer, and the EP Web App for eligible parties. These applications provide user interfaces with tailored functionality for customers and eligible parties.  

## How does the Marketplace connect customers with eligible parties?

Apart from the frontend applications, the Marketplace system includes three more applications with the following main functionalities: The Marketplace Application implements the necessary workflows, e.g., to register users, to search for data requests or services, etc. The Database stores information about the registered users, services, requests, etc. The IAM (Identity and Access Management) handles the authentication of registered users. Together, the applications of the Marketplace system implement the functionality to register users, submit data requests and services, search for services and requests, etc.