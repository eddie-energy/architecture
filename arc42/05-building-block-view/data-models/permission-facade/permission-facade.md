---
title: Permission Facade
---

The Permission Facade is responsible for gathering the necessary information from the customer to establish that the customer consent has been given to the eligible party. This information may vary based on the target country. For this reason, this information is outlined in the two tables below. The first table shows the required fields that need to be filled in regardless of the target country, while the second table shows the additional fields that have to be filled in for the target country. All these fields are filled in by the customer through the EP Website.

| Field | Description |
|-|-|
| Service | The service that the customer want to use |
| Country | The host country of the customer |
| Permission Administrator | The permission administrator of the customer (in the host country) |
| Data Family | The type of the data to be shared, e.g., historical validated data |
| Start Date | The start of the time period of the data to be shared |
| End Date | The end of the time period of the data to be shared |
| Granularity | The frequency of the data, e.g., daily, hourly |


| Country | Permission Administrator | Field | Description |
|-|-|-|-|
| Austria | EDA | Metering Point | Unique identifier assigned to each electricity metering point in Austria. |
| France | Enedis | - | -|
| Spain | Datadis | DNI/NIF | DNI (Documento Nacional de Identidad) is the National Identity Card number, and NIF (Número de Identificación Fiscal) is the Tax Identification Number. |
|       |         | CUPS | CUPS (Código Universal del Punto de Suministro) is the Universal Supply Point Code. CUPS is a unique identifier assigned to each electricity metering point in Spain. |


