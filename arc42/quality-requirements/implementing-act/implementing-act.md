---
title: Implementing Act (SGTF)
order: 1
---

## Context

The behavior of the EDDIE Framework regarding handling historical validated energy consumption data of customers, needs to comply with the Implementing Act of the Smart Grids TaskForce (SGTF), in alignment with the [Implementing Regulation (EU)](https://eur-lex.europa.eu/eli/reg_impl/2023/1162/oj) and the [Network Code for Demand Response](https://consultations.entsoe.eu/markets/public-consultation-networkcode-demand-response/) of the ENTSO-E. To this end, the process diagrams below shows the place of the EDDIE Framework in the context of the following SGTF procedures. 

- SGTF Procedure 1: <s> Access validated historical consumption data by the customer </s> [not covered by EDDIE]
- SGTF Procedure 2: Access to Historical Validated Consumption Data by the Eligible Party
- SGTF Procedure 3: <s> The Eligible Party Terminates a Service </s> [not covered by EDDIE]
- SGTF Procedure 4: Revocation of an Active Permission
- SGTF Procedure 5: <s> Activate near real-time flow from smart meter  </s> [not covered by EDDIE]
- SGTF Procedure 6: Read near real-time flow from smart meter 

Note:  As of January 2024 the Smart Grids Task Force passed over their work on drafting implementation acts to the Joined Working Group.

### Overview 

Below you will find an overview of how the three supported SGTF procedures interact with the EDDIE environment. The trigger that starts the support for procedure 2 is in white, procedure 3 in blue  and procedure 4 in purple. Note that procedure 4 concerning revocation has two possible triggers: the final customer (3a in the diagram) and the Metered Data Administrator (3b in the diagram).

  ![](./figures/sgtf-use-cases.png)


To further aid the interpretation, the following diagrams are enhanced with a color scheme indicating what is directly within the scope of the EDDIE Framework [marked in yellow], what is indirectly within scope [marked in grey] (e.g. the communication between eligible party and metered data administrator) and what is out of scope [marked in pink] (e.g. the customer identifying the eligible party).

### SGTF Procedure 2: Access to Historical Validated Consumption Data by the Eligible Party
Content: The final customer shares his data with an eligible party.

Stimulus: The final customer fills out the Permission form of the EDDIE Framework, and the EDDIE Framework initiates the process of accessing the historical validated data from the Regional Data-sharing Infrastructure.

Response: The EDDIE Framework follows the process indicated by the SGTF use case 2 (show in the diagram above) to access the historical validated data of the customer.


![](./figures/sgtf-use-case-2.png)

### SGTF Procedure 3: The Eligible Party Terminates a Service

Not applicable.

### SGTFProcedure 4: Revocation of an Active Permission

Content: an active permission is revoked.

Stimulus: Either the final customer or the Metering Data administrator initiates this process.

Response: The revocation of an active Permission is final.

![](./figures/revocation-of-an-active-consent.png)


### SGTF Procedure 5: Activate near real-time flow from smart meter 

Not applicable


### SGTF Procedure 6: Read near real-time flow from smart meter 

Content: a smart meter outputs near real-time data directly from the P1 port.

Stimulus: The EDDIE framework, i.c. AIIDA (the Adminsitrative Inhouse Interface for Data Access) is triggered by a message received by the smart meter. 

Response: The smart meter data is processed by The EDDIE framework, i.c. AIIDA, and made distributable to eligible parties.

![](./figures/read-near-real-time-data-from-smart-meter.png)






