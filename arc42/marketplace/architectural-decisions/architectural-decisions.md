---
title: Architectural Decisions
order: 5
---

This section outlines key architectural decisions made for the Data Services Marketplace system:
- [Implement Marketplace Frontend as PWA](./architectural-decisions.md#implement-marketplace-frontend-as-pwa)
- [User Management](./architectural-decisions.md#user-management)
- [Hide data hubs from customers](./architectural-decisions.md#hide-data-hubs-from-customers)

## Implement Marketplace Frontend as PWA

### Context

The goal of the Data Services Marketplace is to enable eligible parties to submit data services and data hubs, and to enable customers to discover and use these services. Additionally, eligible parties should be able to find and use data hubs provided by others.  
When designing such a system, it must be considered that it supports two primary use cases: browsing and submitting data. These distinct use cases require different design considerations in terms of usability and accessibility.

### Decision

Instead of developing two separate applications for these use cases, a single application is implemented that serves both eligible parties and customers.  
This application is designed as a Progressive Web App (PWA) with defined user roles that determine access to specific features.

### Consequences

With this decision, the Data Services Marketplace frontend can be used directly in a web browser or installed on a mobile device as an app.  
This approach makes it practical for eligible parties to use the browser version when submitting new data services, while customers can conveniently install the app on their mobile devices to browse and explore available services anytime and anywhere.  
Depending on the user’s role, specific features and information are accessible — eligible parties can submit and manage data services and data hubs, whereas customers can browse and explore available data services.

### Alternatives

An alternative approach would be to implement and deploy two distinct frontend solutions for eligible parties and customers, for example a dedicated web application for service providers and a separate mobile application for customers.


## User Management

### Context

Eligible parties can submit data services and data hubs, which must be associated with a specific user account.  
Additionally, customers should be able to provide feedback in the form of comments and ratings, which also need to be linked to individual user accounts.

### Decision

The Data Services Marketplace is integrated with an Identity and Access Management (IAM) system using the open-source tool Keycloak.  
All users are required to create an account and log in to access the system’s features.

### Consequences

Using a centralized user management system allows the Data Services Marketplace to associate all data with user accounts.  
Submitted data services and data hubs are linked to eligible party accounts, while customer feedback such as ratings and comments is mapped to the respective customer accounts.

### Alternatives

Since the Data Services Marketplace primarily serves as a connection platform between customers and the data services offered by eligible parties, it would theoretically be possible to design the system without a user management component.  
However, this would result in all submitted data and customer feedback being anonymous, which would make tracking, accountability, and service interaction impossible.


## Hide Data Hubs from Customers

### Context

Eligible parties can submit data hubs that, for example, provide aggregated data or act as connectors to various data sources.  
These data hubs are intended to serve as data providers for other eligible parties, enabling them to develop data services for customers.  
Therefore, data hubs should not be visible or accessible to customers.

### Decision

The data hub section is completely hidden from customers and is only accessible to eligible parties.

### Consequences

After logging into the Data Services Marketplace, the backend determines the user’s role based on the role mappings in the user account.  
If the eligible party role is assigned, additional features become available, including access to the data hub section.  
Users logged in as customers cannot see or access this section.

### Alternatives

Data hubs could alternatively be displayed alongside data services for all users, accompanied by a note that only eligible parties can access them.  
However, this approach could cause confusion for customers and expose technical details that are irrelevant to them.
