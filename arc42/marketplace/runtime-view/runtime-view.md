---
title: Runtime View
order: 3
---

## Overview

The Marketplace system supports several main workflows, which are outlined below and described in detail in the following sections. Other basic workflows are not covered here.


- [The customer/eligible party creates a user account](./runtime-view.md#the-customer-eligible-party-creates-a-user-account)
- [The eligible party user registers as eligible party](./runtime-view.md#the-eligible-party-user-registers-as-eligible-party)
- [The eligible party creates a data service or data hub](./runtime-view.md#the-eligible-party-creates-a-data-request-service)
- [The customer/EP browses data services/data hubs](./runtime-view.md#the-customer-browses-data-requests-and-services)
- [The customer/EP accesses a data service/data hub](./runtime-view.md#the-customer-browses-data-requests-and-services)
- [The customer submits feedback on a data service](./runtime-view.md#the-customer-browses-data-requests-and-services)

## The customer/eligible party creates a user account

![](./figures/marketplace-create-account.svg)

1. A customer or eligible party uses the Marketplace Frontend (PWA) to log in or request a new account.  
2. The PWA redirects the user to the IAM.  
3. The user creates a new account in the IAM.  
4. The IAM stores the new account in its database.  
5. The user is redirected back to the Marketplace Frontend along with metadata from the IAM, enabling access to user-related data from the Marketplace Backend.  

After the account is created, all subsequent requests from the Marketplace Frontend are authenticated via OAuth2 using the credentials and tokens issued by the IAM.


<!-- ![](./figures/marketplace-authenticate-user.svg)

1. The customer/eligible party submits their account credentials to login via the Customer Mobile App/EP Web App.
1. The App sends the credentials to the IAM to authenticate the user account.
1. The IAM queries the database to check if the provided credentials match an existing user account.
1. The database returns a confirmation that the credentials match a stored user account.
1. The IAM responds to the App with an authorization code for this particular user.
1. The App can now use the authorization code to request tokens from the IAM (e.g., access, ID, and refresh tokens).
1. IAM responds with (at least) a JWT access token.
1. The customer/eligible party is now logged in, and the tokens can be used for any action at the Customer Mobile App/EP Web App.
1. The customer/eligible party executes an action at the Customer Mobile App/EP Web App.
1. The App includes the access token in the request to the Marketplace Application.
1. The Marketplace Application validates the access token (to validate access tokens, the Marketplace Application needs to occasionally get a public key from the IAM).
1. The Marketplace Application processes the request.
1. The Marketplace Application sends the appropriate response. -->

## The eligible party user registers as eligible party 

![](./figures/marketplace-register-ep.svg)

The prerequisite for this workflow is that the eligible party has already created a user account in the Data Services Marketplace, as described above.

1. The eligible party (EP) sends an email to the Marketplace operator, providing user account details and information regarding the eligible party role.  
2. The Marketplace operator creates the EP role with the required information directly in the IAM.  
3. The operator links the newly created role to the EP’s user account.  
4. The eligible party receives a confirmation once the process is completed.  
5. The EP can then log in again and access the Data Services Marketplace with the corresponding privileges.  

The Marketplace Backend extracts the role information from the authenticated requests and adapts the displayed content accordingly. After registration, the eligible party can browse data hubs and submit data services or data hubs.


## The customer browses data services

![](./figures/marketplace-browse-requests.svg)

1. The customer requests to view data services offered by eligible parties via the PWA (optional filtering available).  
2. The PWA forwards the request to the Marketplace Backend.  
3. The Marketplace Backend queries the database for the corresponding data services.  
4. The database returns the requested data.  
5. The Marketplace Backend responds to the PWA with the filtered list of data services.  

*Note:* This process can be performed without user registration. Registration is only required when the user wants to view details or access a specific data service.


## The eligible party submits a data service or data hub

![](./figures/marketplace-submit-service.svg)

1. The eligible party fills out a form in the Marketplace Frontend with all required information, including a link to the data service or data hub.  
2. The Marketplace Frontend sends the form data to the Marketplace Backend.  
3. The Marketplace Backend stores the submitted information in the database.  
4. The Marketplace Backend notifies the Frontend that the data service or data hub has been successfully stored.


## The customer/EP accesses a data service/data hub

![](./figures/marketplace-access-service.svg)

1. The customer or eligible party clicks a button on the details page that redirects to the data service hosted on the eligible party’s system.  
2. The Marketplace Frontend informs the Marketplace Backend of this action.  
3. The Marketplace Backend redirects the request to the corresponding URL on the eligible party’s system.  
4. The data service is displayed within the eligible party’s environment.

## The customer submits feedback on a data service

![](./figures/marketplace-submit-feedback.svg)

1. The customer fills out a feedback form (containing a comment and/or rating) in the Marketplace Frontend.  
2. The Marketplace Frontend sends the form data to the Marketplace Backend.  
3. The Marketplace Backend stores the feedback along with a reference to the corresponding data service in the database.  
4. The Marketplace Backend notifies the Frontend that the feedback has been successfully stored.