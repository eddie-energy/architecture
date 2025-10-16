---
title: CIM Data Source
order: 1
collapsed: true
---

The CIM Data Source allows connecting to any device which supports communication over MQTT.
The CIM Data Source Adapter is a general purpose adapter that can be used if no specific adapter is available for a
device.
It uses the `TimeSeries` object of the [Real Time Data Market Document](../cim/cim.md) to parse incoming data.

## Connection to AIIDA

Devices can send data to the MQTT broker of the EDDIE instance on the dedicated topic for the CIM Data Source.

```json
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
```

Data of the original source must be parsed into the a `TimeSeries` JSON object with the following fields:

- `version`: The version of the Time Series, currently always `1.0`.
- `registeredResourceMRID`: Identifies the data source which provided the data.
    - `value`: The UUID of the data source which provided the data.
    - `codingScheme`: The coding is based on the country the data source is located at.
- `dateAndOrTimeDateTime`: The UTC timestamp of the data
- `quantities`: An array of quantities with the following fields:
    - `quantity`: The quantity value of the data.
    - `type`: The type of the quantity. See the table in the [Real Time Data Market Document](../cim/cim.md) for
      supported types.
    - `quality`: The quality of the quantity. See the table in
      the [Real Time Data Market Document](../cim/cim.md) for supported qualities.
