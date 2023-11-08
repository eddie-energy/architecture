---
title: Prerequisites
---

## Overview

The EDDIE Framework aims at being compatible with external components such as the Regional Data-sharing Infrastructures of different Member States, and AIIDA instances deployed on in-house devices at the customers' sites. To comprehend how the EDDIE Framework achieves this compatibility, it is important to understand how the external components operate. For this reason, the sections below provide an overview of the operation of these external components, which can be considered as prerequisites for understanding how the EDDIE Framework works. These prerequisites are divided in categories.

## Prerequisites for Accessing Historical Validated Data

### Interactions with Regional Data-sharing Infrastructures

To access historical validated data, the EDDIE Framework relies on interactions with the Regional Data-sharing Infrastructure. The Regional Data-sharing Infrastructure might operate differently in each Member State. For this reason, the necessary interactions with the supported Regional Data-sharing Infrastructures are documented below.

| Country | Section | 
|-|-|
| Austria | [Link](./prerequisites/interactions-with-eda/interactions-with-eda.md) |
| France | [Link](./prerequisites/interactions-with-enedis/interactions-with-enedis.md) |
<!-- | Spain | [Link](./prerequisites/interactions-with-datadis/interactions-with-datadis.md) | -->


## Prerequisites for Accessing Real-time Data

### Interactions with AIIDA

 To access real-time consumption data, the EDDIE Framework relies on AIIDA. AIIDA is deployed in-house and connects to the Smart Meter. Each Member State may be using a different Smart Meter device. For this reason, AIIDA might need to be configured differently for each country in order to adapt to each specific Smart Meter device and acquire the real-time data. The table below shows the specific prerequisites that apply to every supported country.

| Prerequisite |
|-|
| **Austria**: For Austria, AIIDA relies on an [Adaptor device](https://oesterreichsenergie.at/fileadmin/user_upload/Oesterreichs_Energie/Publikationsdatenbank/Leitfaden/2022/Datenblatt_Smart_Meter_Adapter_V7_20220808.pdf) that attaches to the Smart Meter and sends the real-time consumption data to AIIDA via WiFi. |
<!-- | **France**: | -->

