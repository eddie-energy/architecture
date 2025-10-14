---
title: Solution Strategy
order: 1
---

## Overview

The Data Services Marketplace is deployed and maintained by a dedicated Marketplace Operator.
Its main function is to connect customers seeking energy services with eligible parties offering them.

The Marketplace does not store, process, or forward any energy-related data. Instead, it contains service descriptions and links to the respective platforms of eligible parties.
Additionally, it offers customer ratings and comments, providing essential marketplace functionality for feedback and transparency.

## Why is the Marketplace necessary in the context of EDDIE?

Eligible parties can develop data services - software applications built using the EDDIE Framework - to offer energy-related services such as visualizations, predictions, or analytics.
These services are normally hosted on the infrastructure of the eligible parties themselves.

However, customers currently have no central directory to search for and discover these services. They would need to visit multiple websites and platforms individually, which is inefficient and impractical.

The Marketplace solves this problem by providing a central discovery mechanism.
Customers can explore available data services and data requests in one place and interact directly with the corresponding eligible parties.
Importantly, no energy data is exchanged via the Marketplace—all data sharing happens independently between the customer and the eligible party.

## How do customers and eligible parties access the Marketplace?

Both customers and eligible parties can access the Data Services Marketplace via a frontend application implemented as a Progressive Web App (PWA).
This allows access either through a web browser or as an installable mobile app.

Users can register and log in as either a customer or an eligible party. Depending on their role, the application provides role-specific functionality tailored to their use case. 

## How does the Marketplace connect customers with eligible parties?

As eligible parties host their data services on their own infrastructure, the Marketplace serves purely as a promotion and discovery platform.
Eligible parties can publish service descriptions and provide a link to the live deployment of their service.

Customers can browse these listings, view details, and access the services via the provided links.
All subsequent steps, such as service subscription and data exchange, are handled outside the Marketplace and follow the rules of the eligible party.