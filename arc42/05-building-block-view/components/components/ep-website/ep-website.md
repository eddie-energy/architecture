---
title: EP Website
---

## Overview

The EP Website is a frontend application offered by the eligible party to the customers. The main role of the EP Website is to establish that the consent of a customer for data access to historical and/or real-time consumption data is given to the EDDIE Framework. After that, the EDDIE Framework accesses this data and forwards it to the Services for processing. The outcome of the processing can be potentially shared with the customer through the EP website. A diagram of these components is shown below.

<div align="center">
<img src="./figures/component-diagram-ep-website.svg">
</div>

## Frontend Functionality

At the EP Website, a customer may need to create an account and log in. After that, the customer can select a [Service](../service/service.md), and click a button "Connect with EDDIE" to consent and share historical and/or real-time energy data with this Service (through the EDDIE Framework), as shown in the figure below. 

<div align="center">
<img src="./figures/demo-connect-with-eddie.png">
</div>

Then, the EP Website offers a form to collect all the necessary information for establishing consent. This includes the specifics of the requested data (e.g., daily measurements of the past 3 months), and the specifics of permission administrator (e.g., the metering point number), as shown in the figure below. 

<div align="center">
<img src="./figures/demo-service-permissions.png">
</div>


Since the necessary information to establish consent may vary per permissions administrator (and country), the EP Website follows the [microfrontends](../../../08-crosscut-concepts/architectural-patterns/micro-frontends/) architectural pattern, and uses the [Permission Facade](../permission-facade/permission-facade.md) component to request different input data from the customer based on their country and permissions administrator. 


In addition to requesting consents, the EP Website shows to the customer an overview of the active/inactive consents that have been given in the past, along with a connection status for each consent, as shown in the figure below.

<div align="center">
<img src="./figures/demo-consents.png">
</div>