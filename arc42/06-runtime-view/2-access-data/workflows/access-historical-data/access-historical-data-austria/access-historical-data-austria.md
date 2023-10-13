---
title: Access Historical Data - Austria
---

## Overview

The following workflow shows the process of the eligible party accessing the historical validated data of a customer in Austria. This process starts when the customer approves the consent request at the Regional Data-sharing Infrastructure. The workflow of requesting the customer consent is presented [here](../../../../1-request-consent/workflows/request-consent-historical-data/austria/austria.md). 

<div align="center"> 
<img src="./figures/get-historical-data-austria.svg">
</div>


This workflow includes the following steps:
1. The Microfrontend shows to the customer a redirection the the Consent Admin Portal (which is operated by [EDA](../../../../../03-context-and-scope/prerequisites/access-to-historical-data/eligible-party-registration-austria/eligible-party-registration-austria.md))
2. The customer logs in to the Consent Admin Portal.
3. The customer approves the consent request at the Consent Admin Portal.
4. The Consent Admin Portal informs the Ponton XP Messenger that the CCM (Customer Consent Management) request is approved.
5. The Ponton XP Messenger informs the Ponton Adapter that the consent request is approved.
6. The Ponton Adapter informs the Microfrontend that the consent request is approved.
7. The Microfrontend shows to the customer that the consent request is approved. 
8. Since the consent request is approved by the customer, the Consent Admin Portal gets the requested data from the Meter Data Portal (operated by the DSO of the customer).
9. The requested data is sent to the Consent Admin Portal.
10. The Consent Admin Portal sends the data to the Ponton XP Messenger.
11. The Ponton XP Messenger sends the data to the Ponton Adapter.
12. The Ponton Adapter sends the data to the Message Producer.

> After the data has been received by the Message Producer, another workflow takes place to send the data to a Service. This workflow is presented [here](../../../3-send-data-to-service/workflows/send-data-to-service/send-data-to-service.md).