---
title: Austria
---
### Regional Connector - Austria

The internal structure of the Regional Connector - Austria is shown below.

<div align="center">
<img src="./figures/regional-connector-austria.svg">
</div>

The included components are the following.

| Component | Responsibility | Section |
| - | - | - |
| Microfrontend | Provides the necessary frontend elements to the EP Website. Since every country may require different information for establishing consent, one micro frontend component is needed for each supported country. | TBD |
| Translation Service | Receives the required information of the consumer from the Permission Facade and translates it to appropriate format. | TBD |
| Ponton XP Messenger  | This is a messaging solution by [Ponton GmbH](https://www.ponton.de/ponton-xp) for communication with the Regional Data-sharing Infrastructure in Austria which is called [EDA](https://www.eda.at/?lang=en). | TBD |
| Ponton Adapter | Translates infromation to/from the formats used by Ponton XP Messenger. | TBD |


A class diagram of the implementation model is provided [here](./figures/class-diagram-regional-connector-austria.png)
</div>
