---
title: The Customer Revokes their Consent via the Consent Admin Portal
---

## Overview

The following workflow shows the process of the customer revoking their consent for data access via the website of the permission administrator, i.e., the Consent Admin Portal. This process starts with the customer logging in to the Consent Admin Portal.

<div align="center"> 
<img src="./figures/customer-revokes-consent.svg">
</div>


This workflow includes the following steps:
1. The customer logs in to the Consent Admin Portal.
2. The customer clicks to revoke the consent of a specific eligible party.
3. The permission administrator revokes the consent. This step may include additional actions that are out of scope, e.g., informing the Meter Data Portal. However, EDDIE depends on the timely execution of these actions. Notably, additional mechanisms to verify that this step is completed may be necessary (if the permission administrator allows it, e.g., through an API).
4. The Consent Admin Portal informs the Regional Connector about the consent revocation of the customer.
5. The consent revocation is confirmed to the customer.
6. The Regional Connector applies the revocation, e.g., by updating the relevant fields in the Database.
7. The Regional Connector informs the service of the customer that the customer has revoked their consent. 
