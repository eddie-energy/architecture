---
title: The Customer Terminates Service
---

## Overview

The following workflow shows the process of the customer terminating a Service, and consequently, revoking their consent for access to historical validated data. This process starts with the Customer accessing the Permission Facade through the website of the eligible party.

![](./figures/customer-terminates-service.svg)

This workflow includes the following steps:
1. The customer accesses the Permission Facade through the EP Website and clicks to terminate a running Service.
2. The Permission Facade forwards the termination to the Regional Connector of the customer's country.
3. The Regional Connector applies the termination, e.g., by updating the relevant fields in the Database. Notably, upon termination, the Service stops receiving data from this particular customer. However, the Service may still run and collect data from other customers.
4. The Regional Connector informs the Service about the termination.
5. The Regional Connector revokes the customer consent from the Regional Data-sharing Infrastructure, i.e., via the Consent Admin Portal of the Meter data portal (based on country).
6. The Consent Admin Portal applies the consent revocation. This step may include additional actions that are out of the scope of EDDIE, e.g., informing the Meter Data Portal about the revocation.
7. The status of the revoked consent is sent back to the Regional Connector.
8. The status of the revoked consent is sent to the Permission Facade.
9. The Permission Facade shows the customer the status of the consent.