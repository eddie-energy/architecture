---
title: Transfer Model Attributes
---

## **Class and attributes CIM Transfer Data Base**

## MarketEvaluationPoint

The location where one or more products are measured. This may be a physical or virtual location.

| **Attribute** | **Type** | **Mandatory\*** | **Details** |
| --- | --- | --- | --- |
| mRID | MeasurementPointID\_ String | 1 | A unique identification of the measurement point. In the ESMP context, the "model authority" is defined as an authorized issuing office that provides an agreed identification coding scheme for market participant, domain, measurement point, resources (generator, lines, substations, etc.) identification. Master resource identifier issued by a model authority. The mRID is globally unique within an exchange context. Global uniqueness is easily achieved by using a UUID for the mRID. It is strongly recommended to do this. For CIMXML data files in RDF syntax, the mRID is mapped to rdf:ID or rdf:about attributes that identify CIM object elements. |
| description | String | 0..1 | The description is a free human readable text describing or naming the object. It may be non unique and may not correlate to a naming hierarchy. |
| name | String | 0..1 | The name is any free human readable and possibly non unique text naming the object. |
| connectionCategory | String | 0..1 | A code used to specify the connection category. |
| physicalConnectionCapacity | Decimal | 0..1 | Quantitative information about the maximum capacity of the connection for the usage point. |
| disconnectionMethod | String | 0..1 | The disconnection method is an indication of how the usage point is physically connected or disconnected. |

\*Mandatory: Mandatory fields are indicated by 1, optional fields by 0..1

## MeterReading

Set of values obtained from the meter.

| **Attribute** | **Type** | **Mandatory\*** | **Details** |
| --- | --- | --- | --- |
| mRID | ResourceID\_String | 0..1 | The unique identification of the meter reading. In the ESMP context, the "model authority" is defined as a party (originator of the exchange) that provides an identification in the context of a business exchange. Master resource identifier issued by a model authority. The mRID is unique within an exchange context. Global uniqueness is easily achieved by using a UUID, as specified in RFC 4122, for the mRID. The use of UUID is strongly recommended. For CIMXML data files in RDF syntax conforming to IEC 61970-552 Edition 1, the mRID is mapped to rdf:ID or rdf:about attributes that identify CIM object elements. |
| name | String | 0..1 | The name is any free human readable and possibly non unique text naming the object. |

\*Mandatory: Mandatory fields are indicated by 1, optional fields by 0..1

## Reading

Specific value measured by a meter or other asset, or calculated by a system. Each Reading is associated with a specific ReadingType.

| **Attribute** | **Type** | **Mandatory\*** | **Details** |
| --- | --- | --- | --- |
| reason | ReasonCode\_String | 0..1 | Reason for this reading being taken. |
| position | Integer | 0..1 | A sequential value representing the relative position within a given time interval. |
| mRID | ResourceID\_String | 0..1 | The identification of the reading. Master resource identifier issued by a model authority. The mRID is unique within an exchange context. Global uniqueness is easily achieved by using a UUID, as specified in RFC 4122, for the mRID. The use of UUID is strongly recommended. For CIMXML data files in RDF syntax conforming to IEC 61970-552 Edition 1, the mRID is mapped to rdf:ID or rdf:about attributes that identify CIM object elements. |
| valueMissing | Boolean | 0..1 | The indication whether or not the quantity of this reading is missing. |

\*Mandatory: Mandatory fields are indicated by 1, optional fields by 0..1

## TimeSeries

A set of time-ordered quantities being exchanged in relation to a product.

In the ESMP profile, the TimeSeries provides not only time-ordered quantities but also time-ordered information.

| **Attribute** | **Type** | **Mandatory\*** | **Details** |
| --- | --- | --- | --- |
| mRID | ID\_String | 0..1 | A unique identification of the time series. In the ESMP context, the "model authority" is defined as a party (originator of the exchange) that provides a unique identification in the context of a business exchange such as time series identification, bid identification, ... Master resource identifier issued by a model authority. The mRID is globally unique within an exchange context. Global uniqueness is easily achieved by using a UUID for the mRID. It is strongly recommended to do this. For CIMXML data files in RDF syntax, the mRID is mapped to rdf:ID or rdf:about attributes that identify CIM object elements. |
| description | String | 0..1 | The description is a free human readable text describing or naming the object. It may be non unique and may not correlate to a naming hierarchy. |
| version | ESMPVersion\_String | 0..1 | The identification of the version of the time series. |
| businessType | BusinessKind\_String | 0..1 | The identification of the nature of the time series. |
| name | String | 0..1 | The name is any free human readable and possibly non unique text naming the object. |
| objectAggregation | ObjectAggregationKin d\_String | 0..1 | The identification of the domain that is the common denominator used to aggregate a time series. |
| curveType | CurveType\_String | 0..1 | The identification of the coded representation of the type of curve being described. |
| cancelledTS | ESMPBoolean\_String | 0..1 | An indicator stating that the TimeSeries, identified by the mRID, is withdrawn as well as all the values sent in a previous version of the TimeSeries in a previous document. |

\*Mandatory: Mandatory fields are indicated by 1, optional fields by 0..1

## DateAndOrTime

The Date and or the Time.

| **Attribute** | **Type** | **Mandatory\*** | **Details** |
| --- | --- | --- | --- |
| date | Date | 0..1 | The date as "YYYY-MM-DD", which conforms with ISO 8601. |
| time | Time | 0..1 | The time as "hh:mm:ss.sssZ", which conforms with ISO 8601. |
| dateTime | DateTime | 0..1 | Date and time as per ISO 8601 YYYY-MM-DDThh:mm:ss.sssZ . |

\*Mandatory: Mandatory fields are indicated by 1, optional fields by 0..1

## Measure\_Unit

The particular quantity, defined and adopted by convention, with which other quantities of the same kind are compared in order to express their magnitudes relative to that quantity.

| **Attribute** | **Type** | **Mandatory\*** | **Details** |
| --- | --- | --- | --- |
| name | MeasurementUnitKind \_String | 1 | The identification of the formal code for a measurement unit (UN/ECE Recommendation 20). |

\*Mandatory: Mandatory fields are indicated by 1, optional fields by 0..1

## UnitOfMeasureTypeList

(synonym MeasurementUnit) The unit of measure that is applied to a quantity. The measurement units shall be in compliance with UN/ECE Recommendation 20.

| **Attribute** | **Type** | **Mandatory\*** | **Details** |
| --- | --- | --- | --- |
| ampere | | 1 | The unit of electrical current in the International system of Units (SI) equivalent to one Coulomb per second. |
| megavolt-ampere | | 1 | MVA unit as per UN/CEFACT recommendation 20. |
| One | | 1 | A unit for dimensionless quantities, also called quantities of dimension one. |
| cubic hectometres | | 1 | A unit of volume equal to one million cubic metres. |
| kilovolt | | 1 | kV unit as per UN/CEFACT recommendation 20. |
| kilometre | | 1 | km unit as per UN/CEFACT recommendation 20. |
| kilovolt ampere reactive | | 1 | A unit of electrical reactive power represented by a current of one thousand amperes flowing due to a potential difference of one thousand volts where the sine of the phase angle between them is 1. The unity power factor is expressed in thousands of a volt ampere reactive. |
| gigawatt hour | | 1 | GWh unit as per UN/CEFACT recommendation 20. |
| kilowatt hour | | 1 | A total amount of electrical energy transferred or consumed in one hour. |
| kilowatt | | 1 | A unit of bulk power flow, which can be defined as the rate of energy transfer /consumption when a current of 1000 amperes flows due to a potential of 1000 volts at unity power factor expressed in thousands of a watt. |
| megavolt ampere reactive hours| | 1 | Total amount of reactive power across a power system. |
| megavolt ampere reactive | | 1 | A unit of electrical reactive power represented by a current of one thousand amperes flowing due to a potential difference of one thousand volts where the sine of the phase angle between them is 1. |
| megawatt | | 1 | A unit of bulk power flow, which can be defined as the rate of energy transfer /consumption when a current of 1000 amperes flows due to a potential of 1000 volts at unity power factor expressed in millions of a watt. |
| cubic metres per second | | 1 | The volume flow rate of cubic metre per second. |
| cubic metre | | 1 | A Cubic metre. |
| metre | | 1 | The length of a metre. |
| megawatt hours | | 1 | The total amount of bulk energy transferred or consumed. |
| percent | | 1 | A unit of proportion equal to 0.01. |
| gigawatt | | 1 | GW unit as per UN/CEFACT recommendation 20. |
| watt | | 1 | The watt is the International System of Units (SI) standard unit of power (energy per unit time), the equivalent of one joule per second. |
| meter per second | | 1 | A unit of measurement of the speed expressed in m/s. |
| degree (unit of angle) | | 1 | A unit of measurement of angles expressed in a 0 to 360 degree gradient. |
| watt per square meter | | 1 | A unit of measurement of the density of heat flow rate expressed in watt per square meter. |
| Celsius | | 1 | A unit of measurement of temperature expressed in degree Celsius. |
| OKTA unit | | 1 | A unit of measurement of the cloudiness expressed in OKTA or OCTA, i.e. A unit of count defining the number of eighth-parts as a measure of the celestial dome cloud coverage. |
| hectopascal | | 1 | A unit of measurement of the pressure expressed in hectopascal. |
| millimeter | | 1 | A unit of measurement of length expressed in millimeter. |
| K (Kelvin) | | 1 | Temperature unit refer ISO 80000-5 (Quantities and units, Part 5: Thermodynamics). |

\*Mandatory: Mandatory fields are indicated by 1, optional fields by 0..1 

## Quantity

Description of quantities needed in the data exchange.

The type of the quantity is described either by the role of the association or the quantityType attribute.

The quality attribute provides the information about the quality of the quantity (measured, estimated, etc.).

| **Attribute** | **Type** | **Mandatory\*** | **Details** |
| --- | --- | --- | --- |
| quantity | Decimal | 0..1 | The quantity value. The association role provides the information about what is expressed. |
| quality | Quality\_String | 0..1 | The description of the quality of the quantity. |
| type | String | 0..1 | The description of the type of the quantity. |

\*Mandatory: Mandatory fields are indicated by 1, optional fields by 0..1

## EnergyProductKind\_String

The identification of the nature of an energy product such as power, energy, reactive power, etc.

| **Attribute** | **Type** | **Mandatory\*** | **Details** |
| --- | --- | --- | --- |
| value | EnergyProductTypeLis t | 1 | Main Core value Space. |

\*Mandatory: Mandatory fields are indicated by 1, optional fields by 0..1

## EnergyProductTypeList

The identification of the nature of an energy product such as power, energy, reactive power, etc.

| **Attribute** | **Type** | **Mandatory\*** | **Details** |
| --- | --- | --- | --- |
| Active power | | 1 | The product of voltage and the in-phase component of alternating current measured in units of watts and standard multiples thereof. |
| Reactive power | | 1 | The product of voltage and current and the sine of the phase angle between them, measured in units of voltamperes reactive and standard multiples thereof. (not used for planned schedules). |
| Active energy | | 1 | The electrical energy produced, flowing or supplied by an electrical circuit during a time interval, being the integral with respect to time of instantaneous active power, measured in units of watt-hours, or standard multiples thereof. |
| Reactive energy | | 1 | The integral with respect to time of reactive power (not used for planned schedules). |
| Capacitive Reactive energy | | 1 | Capacitive reactive energy. |
| Inductive Reactive energy | | 1 | Inductive reactive energy. |
| Water | | 1 | For hydro power stations, this enables the identification of the quantity of water stored behind a dam (volume, head level, etc.), or the constraints in the flow of water. |
| Capacitive reactive power | | 1 | Capacitive reactive power. |
| Inductive reactive power | | 1 | Inductive reactive power. |

\*Mandatory: Mandatory fields are indicated by 1, optional fields by 0..1

## Time\_Period

The identification of a time interval or a duration.

| **Attribute** | **Type** | **Mandatory\*** | **Details** |
| --- | --- | --- | --- |
| timeInterval | ESMP\_DateTimeInterv al | 1 | The start and end date and time for a given interval. |

\*Mandatory: Mandatory fields are indicated by 1, optional fields by 0..1

## ESMP\_DateTimeInterval

This datatype enables to express the start date and time, and the end date and time of a time interval with a specific pattern. This pattern is the YYYY-MM-DDThh:mmZ.

| **Attribute** | **Type** | **Mandatory\*** | **Details** |
| --- | --- | --- | --- |
| start | YMDHM\_DateTime | 1 | The start date and time of the interval with a minute resolution. |
| end | YMDHM\_DateTime | 1 | The end date and time of the interval with a minute resolution. |

\*Mandatory: Mandatory fields are indicated by 1, optional fields by 0..1

## YMDHM\_DateTime

In ESMP, the date and time is expressed as "YYYY-MM-DDThh:mmZ", which conforms with ISO 8601 UTC time zone. This date and time is without the seconds.

| **Attribute** | **Type** | **Mandatory\*** | **Details** |
| --- | --- | --- | --- |
| value | DateTime | 1 | The date and time as "YYYY-MM-DDThh:mmZ", which conforms with the ISO 8601 UTC time zone. |

\*Mandatory: Mandatory fields are indicated by 1, optional fields by 0..1