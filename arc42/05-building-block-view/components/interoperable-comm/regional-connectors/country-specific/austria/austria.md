---
title: Regional Connector - Austria
---

## Overview

The internal structure of the Regional Connector - Austria is shown below.

<div align="center">
<img src="./figures/regional-connector-austria.svg">
</div>

The included components are the following.

| Component | Responsibility | Section |
| - | - | - |
| Microfrontend | Provides the necessary frontend elements to the EP Website (through the [Permission Facade](../../../../permission-facade/permission-facade.md)) for establishing the customer consent in Austria The specific information needed by each country is presented [here](../../../../../data-models/permission-facade/permission-facade.md). | TBD |
| Translation Service | Receives the required information of the consumer from the Permission Facade and translates it to appropriate format. | TBD |
| Ponton XP Messenger  | This is a messaging solution by [Ponton GmbH](https://www.ponton.de/ponton-xp) that implements the AS4 protocol for communication with the [Regional Data-sharing Infrastructure of Austria](../../../../../../03-context-and-scope/prerequisites/access-to-historical-data/eligible-party-registration-austria/eligible-party-registration-austria.md). | TBD |
| Ponton Adapter | Translates information to/from the formats used by Ponton XP Messenger. | TBD |


A class diagram with the implementation model of this component is provided [here](./figures/class-diagram-regional-connector-austria.png).
