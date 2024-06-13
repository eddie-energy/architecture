---
title: France - Enedis
order: 2
---

## Overview

The Regional Data-sharing Infrastructure of France is operated by [ENEDIS](https://datahub-enedis.fr). To access energy data, every eligible party covering France must register with ENEDIS and create an eligible party account. After that, the eligible party has to create an application at the Enedis website, connect customers, and use the Enedis API. These are described below.

## Create Application

After creating the account, the eligible party can create an *application* on the [ENEDIS website](https://datahub-enedis.fr/en/data-connect-en/).
This application relates to a Service that is offered by the eligible party. Thus, for every Service, the eligible party should create a different application on the ENEDIS website. To create the application, the eligible party must provide:
1. The name of the application.
1. A logo for the application.
1. The type of the requested data.

A screenshot of the application form is shown below.

![](./figures/enedis-application-form.png)

## Connect Customers

After creating an application, the eligible party needs to add customers (in order to access their data). To connect customers to an application, the eligible party must offer the customer a button (e.g., from the eligible party's website) with a redirection to a particular application on the ENEDIS website. When the customer clicks this button, the redirection takes the customer to the ENEDIS login page, where the customer logs in with their personal account. Instructions for the eligible party on how to display this button are provided on the [ENEDIS website](https://datahub-enedis.fr/services-api/data-connect/parcours-client/). After logging in, the customer can either accept the request for data access from a particular application or decline it. Accepting the request means that information about the customer's smart meter, e.g., a metering point number, will become available to the eligible party that can then use this ID to request data.

The eligible party can view on the ENEDIS website a list of all the [created applications](https://datahub-enedis.fr/mon-compte-tableau-de-bord/mon-compte-applications/). Every application on this list is accompanied by a generated Client ID and Client Secret. These two credentials are then used for accessing the ENEDIS API and requesting the energy data of customers who have accepted the request for data access.


## Access the ENEDIS API

ENEDIS exposes the energy data via a REST API. To access this API, every eligible party has to go through an authentication process that is based on [OAuth](https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow). ENEDIS implements OAuth via the [Jeton API](https://datahub-enedis.fr/services-api/data-connect/documentation/jeton/). Every eligible party has to use this API and submit there the Client ID and the Client Secret of an application. The response from the API includes a temporary JWT bearer token which must be used as a header in order to request the energy data of customers that have accepted to share their data with this application (with the corresponding Client ID and Secret).  

The available APIs for requesting energy data using the bearer token can be found [here](https://datahub-enedis.fr/services-api/data-connect/documentation/).

The following screenshot shows an example of data acquired from the ENEDIS API (including a daily meter reading of the smart meter).

![](./figures/enedis-data-example.png)
