---
title: Permission Facade Data Model
---

## Overview

The Permission Facade is responsible for gathering the necessary information from the customer to establish that the customer consent has been given to the eligible party. This information may vary based on the country of the customer and the type of the data. For this reason, this information is outlined in the following sections. All the discussed fields are filled out by the customer through the EP Website.

## For Access to Historical Validate Data

### Country-agnostic Fields

This table shows the required fields that need to be filled out by the customer for access to historical validated data regardless of the country.

| Field | Description |
|-|-|
| Service | The name of service that the customer wants to use |
| Country | The country of residence of the customer |
| Permission Administrator | The permission administrator of the customer (in the country of residence) |
| Data Family | The type of the data to be shared, e.g., historical validated data |
| Start Date | The start of the time period of the data to be shared |
| End Date | The end of the time period of the data to be shared |
| Granularity | The frequency of the data, e.g., daily, hourly |

### Country-specific Fields

This table shows the additional fields that have to be filled out by the customer for access to historical validated data for each country.

| Country | Permission Administrator | Field | Description |
|-|-|-|-|
| Austria | EDA | Metering Point | Unique identifier assigned to each electricity metering point in Austria. |
| France | Enedis | - | -|
| Spain | Datadis | DNI/NIF | DNI (Documento Nacional de Identidad) is the National Identity Card number, and NIF (Número de Identificación Fiscal) is the Tax Identification Number. |
|       |         | CUPS | CUPS (Código Universal del Punto de Suministro) is the Universal Supply Point Code. CUPS is a unique identifier assigned to each electricity metering point in Spain. |

## For Access to Real-time Data

### Fields for Access to Real-time Data

This table shows the required fields that have to be filled out by the customer for access to real-time data from AIIDA. 

| Field | Description |
|-|-|
| Country | The country of residence of the customer |
| Metering Point Administrator | The metering point administrator of the smart meter of the customer |
| Meter Model | The model of the smart meter of the customer |

### Fields encoded in the QR Code

This table shows the fields that are encoded in the QR code provided by the EP Website to the customer. 

| Field | Description |
|-|-|
| Host URL | The address of the API of the Streaming Infrastructure component |
| Connection ID | The ID associating an AIIDA instance with a customer |

