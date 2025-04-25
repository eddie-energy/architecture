---
title: Domain Concepts
---

## Permission Facade

The permission facade describes the process that enables the eligible party to request and the customer to grant permission to access customer data.

This includes
- the EDDIE button to be [embedded](../architectural-decisions/architectural-decisions.md#embed-the-eddie-button-as-a-custom-element) into the website of the eligible party,
- the permission dialog guiding the customer to create permissions,
- the endpoints to register said permissions on the backend,
- and sending the permission requests to the permission administrators.

The term "facade" refers to the [structural design pattern](https://refactoring.guru/design-patterns/facade) to provide a simplified interface to the regional implementations.

With most of these aspects located on the frontend, the permission facade is often referred to as the frontend of the EDDIE framework.

The permission facade does not exist as an individual component but spreads across the EDDIE core and region connectors.

![Visualization of the permission facade](../figures/eddie-permission-facade.png)

## Data Needs

Eligible parties require different data to provide their services. 
The specification of such data requirements is standardized across region connectors as _data needs_. 
A data need specifies the data family to be requested and a time frame, 
as well as additional parameters relevant for the data type.

On the frontend, data needs are used to inform the user about what data is provided to the eligible party and to determine which region connectors are available.

The following diagram shows the different types of data needs. 
More details are available in the [operation manual](https://eddie-web.projekte.fh-hagenberg.at/framework/2-integrating/data-needs.html).

```mermaid
classDiagram
    class DataNeed {
        <<abstract>>
        +boolean enabled
        +String type
        +String id
        +String name
        +String description
        +String purpose
        +URL policyLink
        +RegionConnectorFilter regionConnectorFilter
    }

    class AccountingPointDataNeed

    class TimeframedDataNeed {
        <<abstract>>
        +DataNeedDuration duration
    }

    class ValidatedHistoricalDataDataNeed {
        +Granularity minGranularity
        +Granularity maxGranularity
        +EnergyType energyType
    }

    class AiidaDataNeed {
        +String~CronExpression~ transmissionSchedule
        +Set~AiidaSchema~ schemas
        +AiidaAsset asset
        +Set~String~ dataTags
    }
    
    class EnergyType {
        <<enumeration>>
        ELECTRICITY
        NATURAL_GAS
        HYDROGEN
        HEAT
    }

    class AiidaSchema {
        <<enumeration>>
        SMART-METER-P1-RAW
        SMART-METER-P1-CIM
    }

    class AiidaAsset {
        <<enumeration>>
        CONNECTION-AGREEMENT-POINT
        CONTROLLABLE-UNIT
        DEDICATED-MEASUREMENT-DEVICE
        SUBMETER
    }

    class DataNeedDuration

    class RelativeDuration {
        +Duration~ISO8601~ start
        +Duration~ISO8601~ end
        +boolean stickToStartOfCalendarUnit
        +CalendarUnit stickyStartCalendarUnit
    }

    class AbsoluteDuration {
        +Date start
        +Date end
    }
    class RegionConnectorFilter {
        + Type type
        + List~String~ regionConnectorIds
        + String dataNeedId
    }
    class Type {
        <<enumeration>>
        BLOCKLIST
        ALLOWLIST
    }

    DataNeed <|-- AccountingPointDataNeed
    DataNeed <|-- TimeframedDataNeed
    TimeframedDataNeed *-- DataNeedDuration
    TimeframedDataNeed <|-- ValidatedHistoricalDataDataNeed
    ValidatedHistoricalDataDataNeed *-- EnergyType
    DataNeedDuration <|-- AbsoluteDuration
    DataNeedDuration <|-- RelativeDuration
    AiidaDataNeed *-- AiidaAsset
    AiidaDataNeed *-- AiidaSchema
    TimeframedDataNeed <|-- AiidaDataNeed
    DataNeed *-- RegionConnectorFilter
    RegionConnectorFilter *-- Type
```
