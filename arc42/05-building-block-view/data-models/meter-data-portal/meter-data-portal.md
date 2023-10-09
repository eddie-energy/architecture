---
title: Meter Data Portal
---

The Regional Data-sharing Infrastructure of each country may be using a different data model to represent the energy data of a customer. For this reason, the EDDIE Framework converts the received data from a country-specific format to a unified format that is based on the Common Information Model [CIM](../../../08-crosscut-concepts/domain-models/cim/cim.md) as derived from the standard IEC62325-351 Ed.3. Specifically, the data model that is used internally by the EDDIE Framework for representing historical validated data is shown in the class diagram below.

<div align="center">
<img src="./figures/VHD Assembly Extended.png">
</div>

The meta model of this model is shown in the class diagram below.

<div align="center">
<img src="./figures/CIM transfer Data.png">
</div>

A detailed description of the attributes of this model is provided [here](../data-model-master-data/Class%20and%20attributes%20CIM%20Transfer%20Data%20Base.md). 

To convert the data received from the Regional Data-sharing Infrastructure from the country-specific model to our CIM-compliant data model, we have created mappings which can be found in the link below.

> Mappings to country-specific models are presented [here](./country-data-models/country-data-models.md).




