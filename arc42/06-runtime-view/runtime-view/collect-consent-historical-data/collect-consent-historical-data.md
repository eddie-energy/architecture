---
title: Collect Consent Form for Access to Historical Data
---

## Overview

The following workflow shows the process of a customer who fills out a consent form for access to their historical validated energy consumption data. Since this form may need to be different based on the regulations of each country (e.g., due to different required data, such as metering point number, or national identification number), a specific process takes place to provide all customers with a uniform and intuitive experience regarding giving their consent.

<div align="center"> 
<img src="./figures/collect-consent-historical-data.svg">
</div>


This workflow includes the following steps:
1. The customer clicks a button on the EP Website to connect their historical validated data. This button is provided by the Permission Facade microfrontend of the EDDIE Framework.
2. The Permission Facade shows a pop-up window for the customer to select their country. 
3. The customer fills out their country of residence in the pop-up window.
4. The Permission Facade requests the Microfrontend of the selected country from the Regional Connector of the Interoperable Communication component.
5. The Microfrontend is sent to the Permission Facade.
6. The Permission Facade shows the consent form to the customer based on the country-specific Microfrontend.
7. The customer fills out the consent form with the required data, e.g., permission administrator, metering point number.
8. The Microfrontend forwards the required data to the internal components of the Regional Connector which initiates the interactions with the Regional Data-sharing Infrastructure to request access to the historical validated data of the customer.
9. The Microfrontend shows the customer that the consent is requested, and further information about a redirection to the website of the permission administrator (or the metered data administrator), where the customer may need to log in and approve the consent request.

<!-- After the consent form has been collected, another workflow takes place to request the historical validated data from the Regional Data-sharing Infrastructure of the corresponding country. These workflows are presented [here](../../06-runtime-view.md). -->