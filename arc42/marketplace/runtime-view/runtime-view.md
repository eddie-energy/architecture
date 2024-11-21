---
title: Runtime View
order: 3
---

## Overview

The Marketplace system implements the following workflows which are further discussed in the sections below.

- The customer/eligible party creates a user account.
- The customer registers their AIIDA instance.
- The customer browses data requests and services.
- The eligible party creates a data request/service.
- The eligible party checks AIIDA instances for energy data.
- The eligible party asks for access to data from AIIDA instances.

## The customer/eligible party creates a user account

<!--![](./figures/marketplace-create-account.svg) -->

1. A customer or an eligible party use the Customer Mobile App or the EP Web App, respectively, to request a new account at the Marketplace. 
1. The Marketplace redirects the customer/eligible party to the IAM.
1. The customer/eligible party creates a new account at the IAM.
1. The IAM stores the new account at the Database.

After that, the customer/eligible party acquires a valid token from the IAM and includes this token in all the messages to the Marketplace. The Marketplace validates tokens at the IAM for authentication of customers/eligible parties.

## The customer registers their AIIDA instance

<!--![](./figures/marketplace-register-aiida.svg) -->

1. All AIIDA instances register at the Marketplace once on start-up automatically, and submit their ID and IP address.
1. The Marketplace stores all the AIIDA IDs and IPs in the Database.
1. To register an AIIDA instance, the customer sends the AIIDA ID to the Marketplace.
1. The Marketplace finds the corresponding AIIDA IP.
1. The Marketplace stores the AIIDA ID and IP as this customer's AIIDA instance.

## The customer browses data requests and services

<!-- ![](./figures/marketplace-browse-requests.svg) -->

1. The customer requests to see data requests/services of eligible parties (with filtering possible). 
1. The Marketplace requests the selected data requests/services from the Database.
1. The Database responds with the matching data requests/services.
1. The Marketplace sends to the customer the requested data requests/services.

## The eligible party creates a data request/service

<!-- ![](./figures/marketplace-create-request.svg) -->

1. The eligible party fills out a form with all the required information about the data request/service at the EP Web App, and sends it to the Marketplace. 
1. The Marketplace stores the information at the Database.

## The eligible party checks AIIDA instances for energy data

<!-- ![](./figures/marketplace-check-aiida.svg) -->

1. After a data request has been created, the eligible party creates a query for energy data matching this data request at the EP Web App, and sends this query to the Marketplace.  
1. The Marketplace sends this query to all the AIIDA instances that are registered in the Database.
1. The AIIDA instances run the query, and examine if they have data matching the query.
1. The AIIDA instances respond to the Marketplace about whether they have matching data.
1. The Marketplace responds to the EP Web App with the IDs of the AIIDA instances that have matching data. 

## The eligible party asks for access to data from AIIDA instances

<!-- ![](./figures/marketplace-ask-data-access.svg) -->

1. After the eligible party has checked which AIIDA instances have energy data matching a data request, the eligible party asks for data access from the Marketplace.  
1. The Marketplace sends access requests to the Customer Mobile Apps of the customers whose AIIDA instances have the energy data.
1. The customers accept/reject the access requests.
1. The Marketplace instructs the AIIDA instances of the customers who accepted to start sending data to the EDDIE Framework of the eligible party.


