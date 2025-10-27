---
title: Common Information Model (CIM)
order: 3
---

The CIM provides its schema as XSD files which AIIDA needs to respect when emitting the documents.
AIIDA supports exactly one CIM document:

- Real Time Data Market Document

AIIDA is able to convert near real-time (NRT) data into the Real Time Data Document. AIIDA has also the capability to
receive data in form of the `TimeSeries` object provided by the Real Time Data Document with the use of the [CIM
Datasource Adapter](../data-source/data-source-cim.md).

## Real Time Data Market Document

The Real Time Data (RTD) Market Document contains near-real time (NRT) data that is received from a data source in
AIIDA. The RTD Market Document is sent as JSON document over MQTT from AIIDA to EDDIE.

### Time Series

Time Series in the RTD Market Document represent the values of an AIIDA Record, called quantities in the CIM.
Quantities have a type that indicates what the quantity represents as well as its unit.
Quantities also provide a quality field that indicates the quality of the quantity.

#### Type

Currently, the following types are supported:

| Value | Description                                                                 | Unit |
|-------|-----------------------------------------------------------------------------|------|
| 0     | Cumulative amount of electrical energy consumed from the grid               | kWh  |
| 1     | Cumulative amount of electrical energy exported back to the grid            | kWh  |
| 2     | Real-time power currently being consumed from the grid                      | kW   |
| 3     | Real-time power currently being generated and exported to the grid          | kW   |
| 4     | Real-time voltage level on phase L1                                         | V    |
| 5     | Real-time voltage level on phase L2                                         | V    |
| 6     | Real-time voltage level on phase L3                                         | V    |
| 7     | Real-time current flowing on phase L1                                       | A    |
| 8     | Real-time current flowing on phase L2                                       | A    |
| 9     | Real-time current flowing on phase L3                                       | A    |
| 10    | Ratio of real power to apparent power, indicating efficiency of power usage | -    |

#### Quality

Currently, the following qualities are supported:

| Value         | Description                                        |
|---------------|----------------------------------------------------|
| ADJUSTED      | The value has been adjusted                        |
| NOT_AVAILABLE | The value is not available                         |
| ESTIMATED     | The value is estimated                             |
| AS_PROVIDED   | The value is provided as is, without modifications |
| INCOMPLETE    | The value is incomplete                            |
| CALCULATED    | The value has been calculated                      |

## Complete JSON Example

```json
{
  "messageDocumentHeader.creationDateTime": "2025-07-01T09:44:00.00040249Z",
  "messageDocumentHeader.metaInformation.connectionId": "3",
  "messageDocumentHeader.metaInformation.dataNeedId": "5dc71d7e-e8cd-4403-a3a8-d3c095c97a84",
  "messageDocumentHeader.metaInformation.documentType": "near-real-time-market-document",
  "messageDocumentHeader.metaInformation.permissionId": "150cfd97-64bb-402b-838f-57f8605713b7",
  "messageDocumentHeader.metaInformation.finalCustomerId": "008cf1d6-e118-45a8-bc17-a331dfc57e77",
  "messageDocumentHeader.metaInformation.asset": "CONNECTION-AGREEMENT-POINT",
  "messageDocumentHeader.metaInformation.dataSourceId": "5eef407d-d14f-49d4-b61a-769a20caa540",
  "messageDocumentHeader.metaInformation.regionConnector": "aiida",
  "messageDocumentHeader.metaInformation.regionCountry": "AT",
  "marketDocument": {
    "mrid": "bff481d5-edd8-4602-9c54-838b386ab4dd",
    "createdDateTime": "2025-07-01T09:44:00.00032307Z",
    "timeSeries": [
      {
        "version": "1.0",
        "registeredResourceMRID": {
          "value": "5eef407d-d14f-49d4-b61a-769a20caa540",
          "codingScheme": "NAT"
        },
        "dateAndOrTimeDateTime": "2025-07-01T07:43:59.073747585Z",
        "quantities": [
          {
            "quantity": 25,
            "type": "0",
            "quality": "AS_PROVIDED"
          },
          {
            "quantity": 1750,
            "type": "2",
            "quality": "AS_PROVIDED"
          }
        ]
      }
    ]
  }
}
```