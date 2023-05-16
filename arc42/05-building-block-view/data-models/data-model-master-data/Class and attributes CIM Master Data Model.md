---
title: Data Model Attributes
---

## **Class and attributes CIM Master Data Model**

## AreaID\_String

The coded identification of a domain, i.e. balance area, grid area, etc.

In the ESMP context, it is an authorized issuing office that provides an agreed identification coding scheme for domain identification.

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| codingScheme | CodingSchemeTypeList | 1 | DomainQualification. |
| value | String | 1 | Main Core value Space. |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## MarketRoleKind\_String

The identification of the role played by a party.

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| value | RoleTypeList | 1 | Main Core value Space. |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## PartyID\_String

The identification of an actor in the energy market.

In the ESMP context, it is an authorized issuing office that provides an agreed identification coding scheme for market participant identification.

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| codingScheme | CodingSchemeTypeLis t | 1 | DomainQualification. |
| value | String | 1 | Main Core value Space. |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## MarketRole

The identification of the intended behaviour of a market participant played within a given business process.

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| type | MarketRoleKind\_Strin g | 1 | The identification of the role played by a market player. |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## MarketParticipant

The identification of the party participating in energy market business processes.

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| mRID | PartyID\_String | 0..1 | The identification of a party in the energy market. In the ESMP context, the "model authority" is defined as an authorized issuing office that provides an agreed identification coding scheme for market participant, domain, measurement point, resources (generator, lines, substations, etc.) identification. Master resource identifier issued by a model authority. The mRID is globally unique within an exchange context. Global uniqueness is easily achieved by using a UUID for the mRID. It is strongly recommended to do this. For CIMXML data files in RDF syntax, the mRID is mapped to rdf:ID or rdf:about attributes that identify CIM object elements. |
| name | String | 0..1 | The name is any free human readable and possibly non unique text naming the object. |
| streetAddress | StreetAddress | 0..1 | Street address. |
| phone1 | TelephoneNumber | 0..1 | Phone number. |
| electronicAddress | ElectronicAddress | 0..1 | Electronic address. |
| description | String | 0..1 | The description is a free human readable text describing or naming the object. It may be non unique and may not correlate to a naming hierarchy. |
| webSite | String | 0..1 | |
| identificationOfOrganisation | String | 0..1 | |
| typeOfIdentification | String | 0..1 | |
| typeOfOnboarding | onboardingType | 0..1 | |
| jumpOffUrl | String | 0..1 | |
| gridArea | String | 0..1 | |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## CodingSchemeTypeList

Codification scheme used to identify the coding scheme used for the set of coded values to identify specific objects.

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| EIC | | 1 | The coding scheme is the Energy Identification Coding Scheme (EIC), maintained by ENTSO-E. |
| GS1 | | 1 | The coding scheme for the preceding attribute is the Global Location Number (GLN 13) or Global Service Relation Number (GSRN 18), maintained by GS1. |
| Andorra National coding scheme | | 1 | The National coding scheme of the country in question. |
| Albania National coding scheme | | 1 | The National coding scheme of the country in question. |
| Armenia National coding scheme | | 1 | The National coding scheme of the country in question. |
| Austria National coding scheme | | 1 | The National coding scheme of the country in question. |
| Azerbaijan National coding scheme | | 1 | The National coding scheme of the country in question. |
| Bosnia and Herzegovina National coding scheme | | 1 | The National coding scheme of the country in question. |
| Belgium National coding scheme | | 1 | The National coding scheme of the country in question. |
| Bulgaria National coding scheme | | 1 | The National coding scheme of the country in question. |
| Switzerland National coding scheme | | 1 | The National coding scheme of the country in question. |
| Serbia and Montenegro National coding scheme | | 1 | The National coding scheme of the country in question. |
| Czech Republic National coding scheme | | 1 | The National coding scheme of the country in question. |
| Germany National coding scheme | | 1 | The National coding scheme of the country in question. |
| Denmark National coding scheme | | 1 | The National coding scheme of the country in question. |
| Estonia National coding scheme | | 1 | The National coding scheme of the country in question. |
| Spain National coding scheme | | 1 | The National coding scheme of the country in question. |
| Finland National coding scheme | | 1 | The National coding scheme of the country in question. |
| France National coding scheme | | 1 | The National coding scheme of the country in question. |
| United Kingdom National coding scheme | | 1 | The National coding scheme of the country in question. |
| Georgia National coding scheme | | 1 | The National coding scheme of the country in question. |
| Gibraltar National coding scheme | | 1 | The National coding scheme of the country in question. |
| Greece National coding scheme | | 1 | The National coding scheme of the country in question. |
| Croatia National coding scheme | | 1 | The National coding scheme of the country in question. |
| Hungary National coding scheme | | 1 | The National coding scheme of the country in question. |
| Ireland National coding scheme | | 1 | The National coding scheme of the country in question. |
| Italy National coding scheme | | 1 | The National coding scheme of the country in question. |
| Kyrgyzstan National coding scheme | | 1 | The National coding scheme of the country in question. |
| Kazakhstan National coding scheme | | 1 | The National coding scheme of the country in question. |
| Liechtenstein National coding scheme | | 1 | The National coding scheme of the country in question. |
| Lithuania National coding scheme | | 1 | The National coding scheme of the country in question. |
| Luxembourg National coding scheme | | 1 | The National coding scheme of the country in question. |
| Latvia National coding scheme | | 1 | The National coding scheme of the country in question. |
| Morocco National coding scheme | | 1 | The National coding scheme of the country in question. |
| Moldavia National coding scheme | | 1 | The National coding scheme of the country in question. |
| Macedonia National coding scheme | | 1 | The National coding scheme of the country in question. |
| Netherlands National coding scheme | | 1 | The National coding scheme of the country in question. |
| Nordic Regional coding scheme | | 1 | The coding scheme of the Nordic region which covers Denmark, Finland, Norway and Sweden. |
| Norway National coding scheme | | 1 | The National coding scheme of the country in question. |
| Poland National coding scheme | | 1 | The National coding scheme of the country in question. |
| Portugal National coding scheme | | 1 | The National coding scheme of the country in question. |
| Romania National coding scheme | | 1 | The National coding scheme of the country in question. |
| Russian Federation National coding scheme | | 1 | The National coding scheme of the country in question. |
| Sweden National coding scheme | | 1 | The National coding scheme of the country in question. |
| Slovenia National coding scheme | | 1 | The National coding scheme of the country in question. |
| Slovakia National coding scheme | | 1 | The National coding scheme of the country in question. |
| Turkey National coding scheme | | 1 | The National coding scheme of the country in question. |
| Ukraine National coding scheme | | 1 | The National coding scheme of the country in question. |
| CGM | | 1 | The coding scheme used for Common Grid Model Exchange Standard (CGMES). |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## RoleTypeList

Identification of the role played by a party.

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| Trade responsible party | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Consumption responsible party | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Combined power exchange (not to be used) | | 1 | This role is no longer in the ENTSO-E Harmonised Role Model Document. |
| System operator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Imbalance settlement responsible | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Production responsible party | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Transmission capacity allocator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Balance responsible party | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Metered data aggregator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Billing agent | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Market operator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Balance supplier | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Consumer | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Control area operator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Control block operator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |

| Coordination center operator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| --- | --- | --- | --- |
| Grid access provider | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Grid operator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Meter administrator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Party connected to grid | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Producer | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Profile maintenance party | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Meter operator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Metered data collector | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Metered data responsible | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Metering point administrator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Resource Provider | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Scheduling coordinator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Capacity Trader | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Interconnection Trade Responsible | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Nomination Validator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. |
| Market information aggregator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. A party that collects information from different sources and assembles it to provide a summary of the market. |
| Information receiver | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. A party, not necessarily a market participant, which receives information about the market. |
| Reserve Allocator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. A party that informs the market of reserve requirements, receives tenders against the requirements and in compliance with the prequalification criteria, determines what tenders meet requirements and assigns tenders. |
| MOL Responsible | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. A party that Informs the market of reserve requirements, receives tenders against the requirements and in compliance with the prequalification criteria, determines what tenders meet requirements and assigns tenders. |
| Capacity Coordinator | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. A party, acting on behalf of the SOs involved, responsible for establishing a coordinated Offered Capacity and/or NTC and/or ATC between several Market Balance Areas. |
| Reconciliation Accountable | | 1 | Refer to role model definitions in the ENTSO-E Harmonised Role Model Document. A party that is financially accountable for the reconciled volume of energy products for a profiled local metering point. |
| Reconciliation Responsible | | 1 | A party that is responsible for reconciling, within a metering grid area, the volumes used in the imbalance settlement process for profiled metering points and the actual metered quantities. |
| Data provider | | 1 | A party that is responsible for providing information to a central authority. |
| Local Issuing Office (LIO) | | 1 | A party that is responsible for operating a Local Issuing Office (LIO). |
| Central Issuing Office (CIO) | | 1 | A party that is responsible for operating a Central Issuing Office (CIO). |
| EIC Participant | | 1 | A party that participates in the EIC environment. |
| Weather analyser | | 1 | A party that analyses the current and forecast weather situation and establishes a prognosis of its impact on the renewable energy environment as well as the overall load. |
| Regional Security Coordinator (RSC) | | 1 | The RSC as defined in the System Operation guideline. |
| Energy Service Company (ESCO) | | 1 | A party offering energy-related services to the Party Connected to Grid, but not directly active in the energy value chain or the physical infrastructure itself. The ESCO may provide insight services as well as energy management services. |
| Balancing Service Provider | | 1 | A party with reserve-providing units or reserve-providing groups able to provide balancing services to LFC Operators. |
| Permission Administrator | | 1 | A party with reserve-providing units or reserve-providing groups able to provide balancing services to LFC Operators. |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## ElectronicAddress

Electronic address information.

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| email1 | Characters70\_String | 1 | Primary email address. |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## StreetAddress

General purpose street address information.

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| streetDetail | StreetDetail | 1 | Street detail. |
| postalCode | Characters10\_String | 1 | Postal code for the address. |
| townDetail | TownDetail | 1 | Town detail. |
| language | String | 0..1 | The language in which the address is specified using ISO60039-1 two digit code. |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## TelephoneNumber

Telephone number.

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| ituPhone | Characters15\_String | 1 | Phone number according to ITU E.164. |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## String

A string consisting of a sequence of 8 bit characters. The character encoding is UTF-8. The string length is unspecified and unlimited.

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
\*Verpl: Mandatory fields a re indicated by 1, Optional fields by 0..1. 

## Country

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| codingScheme | CodingSchemeTypeLis t | 1 | |
| value | String | 1 | |
| country\_flag | blob | 1 | |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## NationalCompetentAuthority

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| company | String | 1 | |
| webSite | String | 1 | |
| officialContact | String | 1 | |
| status | String | 1 | |
| logo | String | 1 | |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## NearRealTimeDataInterface

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| company | String | 1 | |
| classOfInterfaceUtilised | String | 1 | |
| vendor | String | 1 | |
| physicalInterfaceStandard | String | 1 | |
| standardFollowed | String | 1 | |
| logo | blob | 1 | |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## VHCDSpecificInfo

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| twoLetterCode | String | 1 | |
| typicalAvailability | timeOfDay | 1 | |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## DataExchangeEnvironment

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| company | String | 1 | |
| website | URL | 1 | |
| officialContact | String | 1 | |
| documentation | URL | 1 | |
| logo | blob | 1 | |
| nationalRegulatoryBasis | String | 1 | |
| markdownEnglishDoc | String | 1 | |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.

## onboardingType

| **Veldnaam** | **Type** | **Verpl\*** | **Details** |
| --- | --- | --- | --- |
| eligiblePartyTestOnboarding | String | 1 | |
| eligiblePartyLiveOnboarding | String | 1 | |
| descriptionOfPricingSchema | String | 1 | |
| marketRole | String | 1 | |

\*Verpl: Mandatory fields are indicated by 1, Optional fields by 0..1.