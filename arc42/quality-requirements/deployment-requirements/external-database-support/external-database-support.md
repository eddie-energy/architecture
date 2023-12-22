---
title: External Database Support
order: 4
---

## Context

The EDDIE Framework has different deployment options, some of them including a connection to an existing in-house or cloud-hosted database. To establish this connection to an external database, the EDDIE Framework needs to support widely-used databases such as PostgreSQL, MySQL, Microsoft SQL Server, and Oracle Database. The eligible party should be able to configure the deployment option with parameters specifying the connection such existing databases.

## Stimulus
The eligible party executes a Docker compose command to download and run the EDDIE Framework with configurable parameters that establish the connection to an existing in-house or cloud-hosted database.   

## Response
First, the EDDIE Framework is downloaded from a Docker registry. Then it starts running using the specified database.
