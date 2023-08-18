---
title: Austria
---
### Regional Connector - Austria

The internal structure of the Regional Connector - Austria is shown below.

<div align="center">
<img src="./figures/regional-connector-austria.svg">
</div>

The included components are the following.

| Component | Responsibility |
| - | - |
| Translation Service | Receives the required information of the consumer from the Consent Facade and translates it to appropriate format. |
| Ponton XP Messenger  | This is a messaging solution by [Ponton GmbH](https://www.ponton.de/ponton-xp) for communication with the Regional Data-sharing Infrastructure in Austria which is called [EDA](https://www.eda.at/?lang=en). |
| Ponton Adapter | Translates infromation to/from the formats used by Ponton XP Messenger. |


An implementation model for this component is shown below.

<div align="center">
<img src="./figures/class-diagram-regional-connector-austria.png">
</div>