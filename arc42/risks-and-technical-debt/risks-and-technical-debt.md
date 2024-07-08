---
title: Risks and Technical Debts
order: 12
---

<!-- "Risk management is project management for grown-ups" (Tim Lister,
Atlantic Systems Guild.)

List of risks and/or technical debts ordered by
priority, probably including suggested
measures to minimize, mitigate or avoid risks or reduce technical debts. -->

## Overview

Various technical risks and technical debts are identified during the design of the system. Technical risks refer to occurrences of unwanted and sometimes unexpected behaviors that could impact the operation of the system negatively. Technical debts refer to identified behaviors, solutions, and concepts that may improve the operation of the system but are not realized.

## Technical Risks

The table below shows an overview of the identified technical risks.
| Risk | Applicable Measures |
|-|-|
| AIIDA sending unvalidated data which differ from the validated values.| - |
| AIIDA causing upload bottlenecks due to limited bandwidth.| Reduce volume or frequency of real-time data transmissions. |
| Regional Data-sharing Infrastructure modifies APIs.| Update the affected Regional Connector. |



## Technical Debts

The table below shows an overview of the identified technical debts.

| Debt | Possible Solutions |
|-|-|
| - | - |
