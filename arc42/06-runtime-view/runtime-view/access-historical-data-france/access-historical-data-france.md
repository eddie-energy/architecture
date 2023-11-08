---
title: Access Historical Data - France
---

## Overview

The following workflow shows the process of the eligible party accessing the historical validated data of a customer in Austria. This process starts when the customer approves the consent request at the Regional Data-sharing Infrastructure. The workflow of requesting the customer consent is presented [here](../../../../1-request-consent/workflows/request-consent-historical-data/france/france.md). 

TBD - internal view of the Regional Connector of France -

<div align="center"> 
<img src="./figures/get-historical-data-france.svg">
</div>

This workflow includes the following steps:
1. The Microfrontend shows to the customer a redirection the the Consent Admin Portal (which is operated by [Enedis](../../../../../03-context-and-scope/prerequisites/access-to-historical-data/eligible-party-registration-france/eligible-party-registration-france.md))
2. The customer logs in to the Consent Admin Portal.
3. The customer approves the consent request at the Consent Admin Portal.
4. The Consent Admin Portal forwards the approval to the account of the eligible party, along with information about the metering point of the customer. 
5.	The Interoperable Communication requests the clientID and clientSecret from the Consent Admin Portal.
6.	The clientID and clientSecret are sent to the Interoperable Communication.
7.	The Interoperable Communication uses the clientID and the clientSecret to get a valid token from the Consent Admin Portal.
8.	A valid token is returned to the Interoperable Communication (as long as clientID and clientSecret are valid and the customer has accepted the corresponding consent request).
9.	The Interoperable Communication requests the energy data using this Token.
10.	The data is sent to the Interoperable Communication.
11.	The Interoperable Communication sends the data to the Message Producer.

> After the data has been received by the Message Producer, another workflow takes place to send the data to a Service. This workflow is presented [here](../../../3-send-data-to-service/workflows/send-data-to-service/send-data-to-service.md).