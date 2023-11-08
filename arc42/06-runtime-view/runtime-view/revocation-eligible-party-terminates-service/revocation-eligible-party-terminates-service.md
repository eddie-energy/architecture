---
title: The Eligible Party Terminates a Service
---

## Overview

The following workflow shows the process of the eligible party terminating a Service, and consequently, also revoking the consent of the customers who use this Service. This process starts with the eligible party accessing the Admin Console.

<div align="center"> 
<img src="./figures/eligible-party-terminates-service.svg">
</div>

This workflow includes the following steps:
1. The eligible party logs in to the Admin Console.
1. The eligible party clicks to terminate the Service.
1. The Admin console applies the Service termination, e.g., by updating the relevant fields in the Database.
1. The Admin Console instructs the Regional Connectors to revoke the consent of the customers who use the terminated service.
1. The Regional Connectors revoke the consent of the customers from the Consent Admin Portal of their countries.
1. The responses of the consent status are sent back to the Regional Connectors.
1. The consent status of each customer is sent to the Admin Console.
1. The Admin Console show to the eligible party that the consent have been revoked.