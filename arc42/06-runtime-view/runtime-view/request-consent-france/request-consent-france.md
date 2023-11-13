---
title: Request Customer Consent from the Regional Data-sharing Infrastructure in France
---

## Overview
<!-- 
The following workflow shows the process of the Regional Connector - France requesting the consent for access to historical validated data of a customer for the Regional Data-sharing Infrastructure in Austria. This process starts when the Microfrontend has collected the consent form with the required data from the customer. The workflow of the customer filling out the consent from is presented [here](../../../0-collect-consent-form/workflows/collect-consent-historical-data/collect-consent-historical-data.md). 

<div align="center"> 
<img src="./figures/request-consent-france.svg">
</div>


This workflow includes the following steps:
1. The customer fills out the consent form.
2. The Microfrontend initiates the consent request from the Translation Service.
3. The Translation Service creates a CCM (Customer Consent Management) request according to the [Regional Data-sharing Infrastructure of Austria](../../../../03-context-and-scope/prerequisites/access-to-historical-data/eligible-party-registration-austria/eligible-party-registration-austria.md).
4. The Translation Service sends the CCM request to the Ponton Adapter.
5. The Ponton Adapter sends the CCM request to the Ponton XP Messenger.
6. The Ponton XP Messenger sends the CCM request to the Consent Admin Portal (that is operate by [EDA](../../../../03-context-and-scope/prerequisites/access-to-historical-data/eligible-party-registration-austria/eligible-party-registration-austria.md)).
7. The Consent Admin Portal responds that the consent is requested.
8. The Ponton XP Messenger responds that the consent is requested.
9. The Ponton Adapter responds that the consent is requested.
10. The Translation Service sends the information that the consent is requested to the Microfrontend.
11. The Microfrontend shows to the customer that the consent is requested, and further information about a redirection to the Consent Admin Portal (i.e., the website of the permission administrator) where the customer needs to log in and approve the consent request. 
-->
