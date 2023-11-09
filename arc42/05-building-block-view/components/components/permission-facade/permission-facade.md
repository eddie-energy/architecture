---
title: Permission Facade
---

## Overview

The Permission Facade is a microfrontend application that is provided by the EDDIE Framework. The EP Website loads the Permission Facade microfrontend which includes the consent form, and shows it to the customer who fills out this form with the required information that is needed by the EDDIE Framework to establish the customer consent. Since the required information may vary per country, the Permission Facade is responsible for providing the customer with an appropriate form that complies with the regulations of their country, i.e., a form that asks for the appropriate fields to establish the customer's consent. To achieve this, when a customer chooses their country in the EP Website, the Permission Facade selects the corresponding microfrontend for this country from the Regional Connectors of the Interoperable Communication component. If the customer wants to share real-time data, then the microfrontend of the AIIDA Connector is selected. This way, the Permission Facade selects the microfrontend which provides the necessary frontend elements that offer the customer an appropriate consent form to collect the required information based on the customer's country. This is also shown in the component diagram below.

<div align="center">
<img src="./figures/permission-facade.svg">
</div>

## Data Models

> Information about the Permission Facade data model is provided [here](../../../data-models/permission-facade/permission-facade.md).
