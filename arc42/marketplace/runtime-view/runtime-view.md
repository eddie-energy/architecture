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
- The eligible party searches AIIDA instances for energy data.
- The eligible party asks for access to data from AIIDA instances.

## The customer/eligible party creates a user account

![](./figures/marketplace-create-account.svg)

1. A customer or an eligible party use the Customer Mobile App or the EP Web App, respectively, to request a new account. 
1. The Customer Mobile App/EP Web App send the request for a new account to the Marketplace.
1. The Marketplace redirects the customer/eligible party to the IAM.
1. The customer/eligible party creates a new account at the IAM.
1. The IAM stores the new account at the Database.
1. The new account is stored in the Database.
1. The new account is created.

After that, the customer/eligible party acquires a valid token from the IAM and includes this token in all the messages to the Marketplace. The Marketplace validates tokens at the IAM for authentication of customers/eligible parties.

## The customer registers their AIIDA instance

![](./figures/marketplace-register-aiida.svg)

1. All AIIDA instances register at the Marketplace once on start-up automatically, and submit their information including an ID and IP address.
1. The Marketplace stores all the AIIDA information in the Database.
1. The customer requests to register an AIIDA instance at the Customer Mobile App using the AIIDA instance ID.
1. The Customer Mobile App sends the AIIDA instance ID to the Marketplace.
1. The Marketplace registers the AIIDA instance of this ID as this customer's AIIDA instance at the Database.
1. The AIIDA instance is registered.
1. The Customer Mobile App is notified.

## The customer browses data requests and services

![](./figures/marketplace-browse-requests.svg)

1. The customer requests to see data requests/services of eligible parties at the Customer Mobile App (with filtering possible). 
1. The Customer Mobile App forwards the request to the Marketplace. 
1. The Marketplace requests the selected data requests/services from the Database.
1. The Database responds with the matching data requests/services.
1. The Marketplace sends to the Customer Mobile App the requested data requests/services.

## The eligible party creates a data request/service

![](./figures/marketplace-create-request.svg)

1. The eligible party fills out a form with all the required information about the data request/service at the EP Web App.
1. The EP Web App sends this form to the Marketplace.
1. The Marketplace stores the data request/service information at the Database.
1. The information is stored at the Database.
1. The Marketplace notified the EP Web App that the data request/service is stored.

## The eligible party searches AIIDA instances for energy data

![](./figures/marketplace-check-aiida.svg)

1. After a data request has been created, the eligible party clicks a button at the EP Web App to search for energy data matching this data request. 
1. The EP Web App creates a query that matches the energy data of the data request to the Marketplace.  
1. The Marketplace requests all the AIIDA instance IPs from the database.
1. The Database responds with the AIIDA instance IPs.
1. The Marketplace sends the query to all the AIIDA instances that are registered in the Database.
1. The AIIDA instances run the query, and examine if they have data matching the query.
1. The AIIDA instances respond to the Marketplace about whether they have matching data.
1. The Marketplace responds to the EP Web App with the IDs of the AIIDA instances that have matching data. 

## The eligible party asks for access to data from AIIDA instances

![](./figures/marketplace-ask-data-access.svg)

1. After the eligible party has searched which AIIDA instances have energy data matching a data request, the eligible party clicks a button to ask for data access at the EP Web App.
1. The EP Web App asks the Marketplace for data access.  
1. The Marketplace sends access requests to the Customer Mobile Apps of the customers whose AIIDA instances have the energy data.
1. The Customer Mobile Apps of these customers show an access request notification.
1. The customers approve/reject the access requests.
1. The Customer Mobile Apps of the customers who approved notify the Marketplace.
1. The Marketplace configures the data access at the AIIDA instances of the customers who approved the access requests. The AIIDA instances then start sending data to the EDDIE Framework of the eligible party.
1. The Marketplace notifies the EP Web App that access has been requested.

