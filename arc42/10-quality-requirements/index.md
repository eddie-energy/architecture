---
title: Quality Requirements
---

##### Content

This section contains all quality requirements as quality tree with
scenarios. The most important ones have already been described in
section 1.2. (quality goals)

Here you can also capture quality requirements with lesser priority,
which will not create high risks when they are not fully achieved.

##### Motivation

Since quality requirements will have a lot of influence on architectural
decisions you should know for every stakeholder what is really important
to them, concrete and measurable.

See [Quality Requirements](https://docs.arc42.org/section-10/) in the
arc42 documentation.

## Quality Tree

##### Content

The quality tree (as defined in ATAM -- Architecture Tradeoff Analysis
Method) with quality/evaluation scenarios as leafs.

##### Motivation

The tree structure with priorities provides an overview for a sometimes
large number of quality requirements.

##### Form

The quality tree is a high-level overview of the quality goals and
requirements:

-   tree-like refinement of the term \"quality\". Use \"quality\" or
    \"usefulness\" as a root

-   a mind map with quality categories as main branches

In any case the tree should include links to the scenarios of the
following section.

## Quality Scenarios

##### Contents

Concretization of (sometimes vague or implicit) quality requirements
using (quality) scenarios.

These scenarios describe what should happen when a stimulus arrives at
the system.

For architects, two kinds of scenarios are important:

-   Usage scenarios (also called application scenarios or use case
    scenarios) describe the system's runtime reaction to a certain
    stimulus. This also includes scenarios that describe the system's
    efficiency or performance. Example: The system reacts to a user's
    request within one second.

-   Change scenarios describe a modification of the system or of its
    immediate environment. Example: Additional functionality is
    implemented or requirements for a quality attribute change.

##### Motivation

Scenarios make quality requirements concrete and allow to more easily
measure or decide whether they are fulfilled.

Especially when you want to assess your architecture using methods like
ATAM you need to describe your quality goals (from section 1.2) more
precisely down to a level of scenarios that can be discussed and
evaluated.

##### Form

Tabular or free form text.



Following this guidance, we propose EDDIE – a European Distributed Data Infrastructure for Energy – with six main objectives as solution to Establish the Grounds for a Common European Energy Data Space as described in Table 1.

<table>
<tr>
    <th style="width: 8ch">Obj.  Nr</th>
    <th style="width: 60%">Description of Main Objective (OBJ)</th>
    <th>Related WP (Tasks) and Milestone (due month)</th>
</tr>
<tr>
    <th>OBJ#1</th>
    <td>Deliver a unified, de-central and highly scalable European interface – the EDDIE Framework – to validated historical and near real-time energy consumption data from different data sources based on the work of the EU Smart Grids Task Force’s Expert Group 1 for data interoperability.</td>
    <td><li>WP2 (T2.1, T2.2, T2.3, T2.4)
        <li>Milestone 3 (M18)</td>
</tr>
<tr>
    <th>OBJ#2</th>
    <td>Develop a consent-based interface – the Administrative Interface for In-house Data Access (AIIDA) – installable in standard home automation environments and in-house computing systems to facilitate the consent-based use of in-house data sources from smart meters and downstream submetering like the standardised interface mandatory for all smart metering systems installed after July 4th, 2019, as required by Article 20(a) of Directive (EU) 2019/944.</td>
    <td><li>WP3-4 (T3.1, T3.2, T3.3, T3.4, T4.1, T4.2, T4.3, T4.4)
        <li>Milestone 3 (M18)</td>
</tr>
<tr>
    <th>OBJ#3</th>
    <td>Provide demonstrated connectors to that unified European interface for more than 70% of European metering points with the deliverables produced as part of the EDDIE Framework, and clearly defined paths to attach more.</td>
    <td><li>WP5-6 (T5.2, T5.3, T5.4, T6.2, T6.3, T6.4, T6.5, T6.6, T6.7)
        <li>Milestone 4 (M24)</td>
</tr>
<tr>
    <th>OBJ#4</th>
    <td>Carry out scientific assessment of relevant aspects of energy data-sharing covering energy and behavioural economics, data privacy, governance, portability and compliance considerations, as well as a much-needed security and safety views on these infrastructures, keeping in mind that the criticality levels of services based on shared energy data might not be clear yet.</td>
    <td><li>WP6-8 (T6.1, T6.2, T7.1, T7.2, T7.3, T7.4, T8.5)
        <li>Milestone 4 (M24)</td>
</tr>
<tr>
    <th>OBJ#5</th>
    <td>Ensure that EDDIE is ready to be used, to stay, and to be further developed by an open-source community, European organisations and players with a stake or interest in general by means of diverse exploitation and dissemination activities. All software components delivered by EDDIE will be ready-to-use and feature technology readiness level (TRL) 7 or better.</td>
    <td><li>WP2 (T2.4), WP7-9 (T7.2, T8.1, T8.2, T8.4, T8.5, T9.1, T9.2, T9.3)
        <li>Milestone 5 (M30)</td>
</tr>
<tr>
    <th>OBJ#6</th>
    <td>Identify and disseminate small or big hurdles while conceptualizing and developing EDDIE to Member State (MS) data-sharing infrastructure operators, national and European legislation to allow for improvement and convergence in that sector.</td>
    <td><li>WP1-9 (T1.3, T2.3, T3.1, T4.1, T5.1, T6.1, T7.1, T7.3, T7.4, T8.3, T9.2)
        <li>Milestone 7 (M36)</td>
</tr>
</table>


Table 1 The six main objectives of EDDIE including a reference to related Work Packages, Tasks and Milestones


1.1.3	Vision and uniqueness of EDDIE
The vision of EDDIE and what makes EDDIE specific, is that it aims for a solution that is (1) decentralised, (2) open-source, (3) not-for-profit and (4) far-reaching. In the following, we describe these four pillars that form EDDIE’s vision for a unique solution in detail:
•	Decentralised: The EDDIE Framework is installable on any computer or cloud environment under the full control of the actor using it. There is no need for a central instance or a Pan-European Data Hub. The decentralised approach also guarantees for a maximum degree of scalability, flexibility and resilience.
•	Open-source: The EDDIE Framework and AIIDA can be freely downloaded, forked and changed, without any fees or licensing constraints. After the project lifecycle, the EDDIE consortium will transfer the management and maintenance to a relevant body. That point in time will also coincide nicely with European developments in the field of interoperability and the decision to which organisation to hand over will be respecting these.
•	Not-for-profit: Apart from the innovation and know-how generated in the work on EDDIE, neither of the consortium partners is expecting any direct returns or profit out of the deliverables. All participants have expertise in different domains or geographical areas, which they want to contribute to a greater – common – profit and a reliable infrastructure for an enhanced market.
•	Far-reaching: EDDIE is for a good share initiated and driven by European data-sharing infrastructure operators who are participants in the consortium. This involvement means that we have these organisations aboard which need to make the data available directly in the project and on a broad geographical basis. 

1.1.4	Key Exploitable Results (KERs), outcomes and impact
qualified consortium, this leads to four Key Exploitable Results (KERs) as described in Table 2.
KER Nr.	Description of Key Exploitable Result (KER)	Related to Objective
KER#1	Provide the EDDIE Framework as a dependable, scalable and extensible European Distributed Data Infrastructure for Energy Framework (EDDIE Framework), open-source and free to use and change. The EDDIE Framework will be installable in the domain of eligible parties with the need of access to energy data on a customer consent basis. There will be no need for additional centralised intermediaries. This main outcome is aligned with European interoperability, digitalisation and data-related legislation, and also provides means to feed back into these initiatives, leading in turn to better informed decision-making.	OBJ#1
KER#2	Provide AIIDA as an Administrative Interface for In-house Data Access (AIIDA), easily integrable in domestic software systems like smart home solutions or edge devices, making use of existing or additional hardware to be easily deployed in consumer houses. Provide customers a new solution to make available data streams from the standardised near real-time interface on the smart meter (priority) and a variety of in-house sensors. Allow customers to share their data with services using the EDDIE Framework, on a secure, clean and manageable consent basis. 	OBJ#2
KER#3	Provide extensive scientific assessment and share real-world experience on various aspects of data-sharing, from a social, economic and technological point of view. The academic institutions within the EDDIE consortium will care about this scientific assessment from energy and behavioural economics, regulatory and legislative, and system safety and security aspects. For all prototypes, we put a focus on human-centred design and user research to support the social acceptance of new energy technologies and increase participation of consumers in energy. 	OBJ#4
OBJ#6
KER#4	Provide the EDDIE Data Services Market Place as a web-based and/or mobile solution, which allows end-users to easily access applications based on the EDDIE Framework, learn about the services offered, use services of interest and participate in the data-sharing community. End-users must and will always retain full control over their own and private data at all times. The EDDIE Data Services Market Place will also contain all demonstrated prototypes.	OBJ#3
OBJ#5
Table 2 Overview of project participants, together with their geographical position and roles


oreover, with EDDIE we present a strategy to ensure the wide usability, adjustability and application of EDDIE within and beyond the project duration: (1) The consortium is fully committed to the open-source idea: all project deliverables will be free to download, fork and use; (2) Training activities will be carried out, including a strategy how to continue after the project; (3) Academic partners will train students on EDDIE and let them implement prototype applications in their teaching activities.
