---
title: Consent Admin Portal
---

## Overview

The Consent Admin Portal is the nterface of the Regional Data-sharing Infrastructure that handles the authorization of the customers for sharing historical validated energy consumption data with eligible parties, i.e., the customer consent. The Consent Admin Portal is usually operated by a designated entity, and is out of the control of the eligible party and the customer. For this reason, the Regional Data-sharing Infrastructure can function differently in each country (e.g., using different communication protocols such as HTTP, or AS4, and authentication processes such as token-based, or account-based). Consequently, the naming of the components and processes of the Regional Data-sharing Infrastructures can also vary per country (these are discussed [here](../../../03-context-and-scope/prerequisites/prerequisites.md)). Nevertheless, the common point of all Regional Data-sharing Infrastructures is that they all have at least two interfaces: one for establishing consent, and one for accessing data. For this reason, we use terms Consent Admin Portal and [Meter Data Portal](../meter-data-portal/meter-data-portal.md) for interactions regarding establishing consent, and accessing data, respectively. Since the Regional Data-sharing Infrastructure can differ per country, one Regional Connector is implemented to interact with the Consent Admin Portal and the Meter Data Portal of each country, as shown in the figure below. Importantly, the notation of the Regional Connector block is a "collection" block -indicating a multitude of Regional Connectors. 

<div align="center">
<img src="./figures/regional-data-sharing-infr.svg">
</div>

> Information regarding the data exchanged with the Consent Admin Portal is presented [here](../../data-models/consent-admin-portal/consent-admin-portal.md).

