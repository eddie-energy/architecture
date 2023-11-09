---
title: Permission Facade Data Model
---

## Overview

The Permission Facade is responsible for gathering the necessary information from the customer to establish that the customer consent has been given to the eligible party. This information may vary based on the country of the customer. For this reason, this information is outlined in the two tables below. The first table shows the required fields that need to be filled out, regardless of the country, while the second table shows the additional fields that have to be filled out exclusively for each country. All these fields are filled out by the customer through the EP Website.

### Country-agnostic Fields

| Field | Description |
|-|-|
| Service | The name of service that the customer wants to use |
| Country | The country of residence of the customer |
| Permission Administrator | The permission administrator of the customer (in the country of residence) |
| Data Family | The type of the data to be shared, e.g., historical validated data |
| Start Date | The start of the time period of the data to be shared |
| End Date | The end of the time period of the data to be shared |
| Granularity | The frequency of the data, e.g., daily, hourly |

## Country-specific Fields

| Country | Permission Administrator | Field | Description |
|-|-|-|-|
| Austria | EDA | Metering Point | Unique identifier assigned to each electricity metering point in Austria. |
| France | Enedis | - | -|
| Spain | Datadis | DNI/NIF | DNI (Documento Nacional de Identidad) is the National Identity Card number, and NIF (Número de Identificación Fiscal) is the Tax Identification Number. |
|       |         | CUPS | CUPS (Código Universal del Punto de Suministro) is the Universal Supply Point Code. CUPS is a unique identifier assigned to each electricity metering point in Spain. |


