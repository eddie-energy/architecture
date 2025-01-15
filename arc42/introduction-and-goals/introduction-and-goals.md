---
title: Introduction and Goals
order: 1
---
This document serves as a comprehensive guide to the architecture, key components, and interactions of the systems within the EDDIE project: the EDDIE Framework, the Administrative Interface for In-house Data Access (AIIDA), and the Marketplace. Its primary purpose is to enable a shared understanding among all stakeholders of how the system supports the establishment of a Common European Energy Data Space.

The EDDIE project aims to address the lack of large-scale, uniform, and easy access to energy data across European Member States. By providing a decentralized, open-source framework, EDDIE facilitates secure and efficient data sharing, supporting energy service providers, consumers, and other stakeholders.

The following goals have been established for this system:

| Goal | Description |
|-|-|
| Create a Common European Energy Data Space | Enable seamless, cross-border energy services by providing a unified data-sharing interface. |
| Enhance Data Interoperability | Standardize data access and ensure compatibility with existing national energy data-sharing infrastructures. |
| Empower Stakeholders | Provide tools and interfaces for energy service providers and end-users to interact with energy data securely and efficiently. |
| Promote Scalability and Flexibility | Support integration with diverse systems and accommodate future data-sharing needs. |
| Ensure Compliance and Security | Adhere to GDPR and other relevant regulations to protect user privacy and data integrity. |
| Support Innovation and Economic Growth | Lower data integration costs, foster market competition, and enable new energy-related services. |

## Requirements Overview

### Essential Content Requirements

| Id      | Requirement                        | Explanation                                                                                                   |
|---------|------------------------------------|---------------------------------------------------------------------------------------------------------------|
| C1      | Provide In-house Data Access       | Develop software to act as an In-house Consent Administrator (ICA) and Metered Data Administrator (MDA) for in-house measured data. Ensure compatibility with existing hardware already available in-house, e.g.,home automation systems, NAS, minicomputers, and SoCs. Initially focus on standardized interfaces as per Directive (EU) 2019/944. |
| C1.1    | Support additional data sources    | Extend support to sub-meter data and other sources, aligning with evolving legislative and technical standards. |
| C2      | Real-Time Data Integration         | Enable near real-time data integration from AIIDA into the EDDIE Framework. Ensure data streams are "detectable" while addressing security, usability, and performance challenges. |
| C3      | Customer Observability and Manageability | Provide intuitive interfaces for customers to monitor and manage data sharing. Integrate seamlessly with smart home apps to encourage adoption. |



### Essential Functional Requirements

| Id      | Requirement                        | Explanation                                                                                                   |
|---------|------------------------------------|---------------------------------------------------------------------------------------------------------------|
| F1      | Decentralized Architecture         | Allow EDDIE Framework installation on any computer or cloud environment without requiring a central instance. |
| F2      | Open-Source Framework              | Make the EDDIE Framework and AIIDA freely available, with no licensing constraints, supporting community-driven development. |
| F3      | Ensure Security and Privacy        | Ensure GDPR compliance, safeguarding data privacy and integrity. Implement robust consent management for secure data sharing. |
| F4      | Far-Reaching Compatibility         | Ensure compatibility with regional data-sharing infrastructures across Europe (potentially, and beyond Europe) to support cross-border collaboration. |



### Essential Business Requirements

| Id      | Requirement                        | Explanation                                                                                                   |
|---------|------------------------------------|---------------------------------------------------------------------------------------------------------------|
| B1      | Framework Accessibility            | Provide a scalable, open-source framework that can be installed in eligible domains without centralized intermediaries. |
| B2      | AIIDA Integration                  | Offer AIIDA as an integrable interface with smart home systems and edge devices for secure, consent-based sharing of real-time data. |
| B3      | Scientific Assessment and Community Involvement | Conduct assessments on data-sharing from social, economic, and technological perspectives. Prioritize human-centered design for user acceptance. |
| B4      | Data Services Marketplace          | Establish a web-based and mobile-accessible marketplace for customers to explore and utilize EDDIE-based applications while retaining full control over their data. |


## Quality Goals

The main quality goals for the architecture aim to ensure the system's effectiveness, efficiency, security, and maintainability.

#### Primary Quality Goals  

| **Id**  | **Quality Goal**     | **Description**                                                                                                                |
|---------|-----------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Q1      | Interoperability      | Ensure seamless integration with diverse national data-sharing infrastructures and protocols across European Member States.     |
| Q2      | Security and Privacy  | Protect sensitive user data by adhering to GDPR and ensuring secure data transfer, storage, and processing.                    |
| Q3      | Scalability           | Support the handling of large-scale energy data, including real-time streams from more than 70% of European metering points.   |
| Q4      | Reliability           | Provide a highly reliable system with minimal downtime to ensure uninterrupted access to energy data.                          |
| Q5      | Usability             | Deliver intuitive, user-friendly interfaces for both end-users and administrators, ensuring smooth navigation and interaction.  |  

#### Secondary Quality Goals  

| **Id**  | **Quality Goal**      | **Description**                                                                                                                |
|---------|------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Q6      | Maintainability        | Ensure the system is easy to modify, extend, and maintain, particularly given its open-source nature and community involvement. |
| Q7      | Performance Efficiency | Optimize data processing times and minimize latency for real-time data access and analysis.                                    |
| Q8      | Flexibility            | Allow for seamless updates and integration of new data sources, services, and technologies.                                    |
| Q9      | Portability            | Ensure the framework can be deployed on various platforms, including cloud environments, on-premise servers, and edge devices. |
| Q10     | Compliance             | Ensure alignment with relevant energy and data-related legislation, including Directive (EU) 2019/944 and the EU Green Deal.   |  

## Stakeholders

Stakeholders are all person, roles or organizations that somehow interact with the architecture, because they need to work with the system, document or develop it.

Roles that may be involved are:

| Abbr. | Role | Description |
|-|-|-|
| EP | Eligible Party | A Party requesting or processing data shared by the customer. |
| PA | Permission Administrator | A party responsible for administrating a register of consents. The PA makes information about the consent (but not necessarily the data to be shared) available on request for entitled parties in the sector. |
| OCA | Online Consent Administrator | PA with a constant and publicly usable interface through an online service. |
| ICA | In-house Consent Administrator | Functional service managing the access to in-house data sources that would not be available online. Within the context of the EDDIE project, AIIDA is targeted to act as such. |
| MDA | Metered Data Administrator | A party responsible for storing and distributing validated measured data. |
| MS | Member State | Member State of the European Union. Within the scope of this project, MS can be viewed in a wider sense, meaning rather “regional cluster supporting data-sharing”, but political borders and data-sharing infrastructure responsibility for an area are not always the same. |
| FSP | Flexibility Service Provider | Independent energy service providers aggregating flexibilities into energy and grid ancillary service markets. |
| BRP | Balance Responsible Party | A party that is – according to the Harmonized Electricity Market Role Model (HEMRM) - responsible for its imbalances, meaning the difference between the energy volume physically injected to or withdrawn from the system and the final nominated energy volume, including any imbalance adjustment within a given imbalance settlement period. |
| DER | Distributed Energy Resource | Distributed Energy Resources are energy resources spread over different levels and locations throughout the energy systems, typically within residential low voltage environments. They can consist of Distributed Generation (e.g., photovoltaic systems), Distributed Flexible Loads (e.g., heat pumps, smart heaters) as well as Distributed Storage (e.g., standalone batteries, V1G and V2X electric vehicles) |
