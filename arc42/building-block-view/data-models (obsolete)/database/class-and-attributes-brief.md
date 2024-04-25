---
title: Data Model (Short)
---

## Class: National Competent Authority

| Attribute | Description |
| --- | --- |
| Country | Member state we are describing |
| Company | Name of appointed national competent authority. |
| Website | Website of appointed national competent authority. |
| Official contact | Contact details for managing the mappings of national practices. |
| Status | open- in progress; done- information compilation completed |

## Class: Data Exchange Environment

| Attribute | Description |
| --- | --- |
| Country: | Member state we are describing |
| Company | Name of appointed national competent authority. |
| Website | Website of appointed national competent authority. |
| Official contact | Contact details for Contact details for national data management provisions. |
| Documentation | Description of the Member State provisions with regards to data access. |

## Class: Metered Data administrator

| Attribute | Description |
| --- | --- |
| Country | Member state we are describing |
| Market Role | Market player playing the role of MDA |
| Name | Name of the organisation. |
| Type of identification | ACER registration code, Legal Entity Identifier (LEI), Bank Identifier Code (BIC), Energy Identification Code (EIC), Global Location Number (GLN/GS1) or National Identification Code (NIC). |
| Identification of organisation | Code or identification of the organisation (nominated as 'metered data administrator') based on the types of identification mentioned in the previous field. |
| Website | Link to website or application that is used to download data. |
| Official contact | Contact details for data access by final customers or eligible parties. |
| Metering grid area | A geospatial information of the operational area. |
| Metering Points Served | Number of metering points for which the metered data administrator is administering metered data. |
| Permission administrator | Permission administrator associated with it. |

## Class: Metering Point Administrator

| Attribute | Description |
| --- | --- |
| Country | Country: Member state we are describing |
| Market Role | market player playing the role of MDA |
| Name | Name of the organisation. |
| Type of identification | ACER registration code, Legal Entity Identifier (LEI), Bank Identifier Code (BIC), Energy Identification Code (EIC), Global Location Number (GLN/GS1) or National Identification Code (NIC). |
| Identification of organisation | Code or identification of the organisation (nominated as 'metered data administrator') based on the types of identification mentioned in the previous field. |
| Website | Link to website or application that is used to download data. |
| Official contact | Contact details for data access by final customers or eligible parties. |
| Metering grid area | A geospatial information of the operational area. |

## Class: Data Access Provider

| Attribute | Description |
| --- | --- |
| Country | Member state we are describing |
| Market Role | Market player playing the role |
| Name | Name: Name of the organisation. |
| Type of identification | ACER registration code, Legal Entity Identifier (LEI), Bank Identifier Code (BIC), Energy Identification Code (EIC), Global Location Number (GLN/GS1) or National Identification Code (NIC). |
| Identification of organisation | Code or identification of the organisation (nominated as 'metered data administrator') based on the types of identification mentioned in the previous field. |
| Website | Link to website or application that is used for final customer data access. |
| Official contact | Contact details for data access by final customers or eligible parties. |

## Class: Permission Administrator

| Attribute | Description |
| --- | --- |
| Country | Member state we are describing |
| Market Role | Market player playing the role |
| Name | Name of the organisation. |
| Type of identification | ACER registration code, Legal Entity Identifier (LEI), Bank Identifier Code (BIC), Energy Identification Code (EIC), Global Location Number (GLN/GS1) or National Identification Code (NIC). |
| Identification of organisation | Code or identification of the organisation (nominated as 'metered data administrator') based on the types of identification mentioned in the previous field. |
| Jump-off URL to Permission Portal | The web address where the end-users can be redirected to accept the consent/permission. |
| Website | The website |
| Contact | The contact |
| Permission management responsibility | Permission management responsibility for Metered data administrators for which the permission administrator manages permissions. Note: it is also valid for a metered data administrator to utilise several permission administrators, and for a permission administrator to act for multiple metered data administrators. |
| Documentation of access | A self-sufficient explanation of the Member State provisions with regards to utilising access to validated historical metering and consumption data by an eligible party. It is recommended to also include an English version of this documentation. |
| Identity service provider | Identity service provider utilised by the permission administrator to authenticate final customers. |
| Eligible party on-boarding | Either a link to the English documentation of the on-boarding procedure or a complete, self-sufficient explanation in English for how an eligible party can on-board to the production environment to utilise access to validated historical metering and consumption data by an eligible party. |
| Eligible party test on-boarding | If applicable, either a link to the English documentation of the onboarding procedure or a complete, self-sufficient explanation in English for how an eligible party can onboard to a test environment to utilise access to validated historical metering and consumption data by an eligible party. |
| Price list for access to data by eligible parties | Description of all costs for eligible parties. |

## Class: Near real-time Data Interfaces

| Attribute | Description |
| --- | --- |
| Country | Member state we are describing |
| Company | Name of the organisation |
| Basic class | Basic class of interface utilised |
| Vendor | Name of the vendor organisation. |
| Metering point administrators using the model: | Identifiers of the metering point administrators using the model. |
| Physical interface standard. | Name and version of the standard used. |
| Communication protocol | Name and version of the standard used. |
| Data formats | Name and version of the standard used. |