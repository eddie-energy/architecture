---
title: Data Models
order: 5
---

::: warning Important to mention
EDDIE in general follows the CIM model; However, AIIDA or the Timescale DB respectively, uses its own model.
:::

AIIDA relies on two main databases:

1. TimescaleDB – Stores on-site energy data collected from households.
1. EMQX IAM Database – Manages identity and access control within the EDDIE Framework.

## Timescale DB 
TimescaleDB is a PostgreSQL-based time-series database optimized for handling large-scale, chronologically ordered datasets, which is the case for measurement series from AIIDA. It provides features like automatic partitioning, hypertables, and advanced analytical functions.

### Example Data Model

```sql
CREATE TABLE energy_measurements (
    id SERIAL PRIMARY KEY,
    household_id UUID NOT NULL,
    timestamp TIMESTAMPTZ NOT NULL,
    energy_consumption DOUBLE PRECISION,
    temperature DOUBLE PRECISION,
    voltage DOUBLE PRECISION,
    created_at TIMESTAMPTZ DEFAULT now()
);
```

## EMQX IAM Database
This Database comes with the MQTT broker which is needed at the EDDIE Framework site.
While the MQTT broker mediates all messages between the EP and AIIDA, the IAM database ensures that only authorized clients have access to specific topics.
The IAM database enables the separation and management of permissions between different users and groups, as the MQTT broker is shared by multiple users.
Managing identities and access rights through a centralized IAM database also allows dynamic adjustments of rules and permissions without the need to reconfigure the broker itself. 

### Example Data Model
```json
{
  "users": [
    {
      "id": "user123",
      "username": "test_user",
      "password_hash": "hashed_password",
      "groups": ["group1"],
      "auth_method": "password"
    }
  ],
  "groups": [
    {
      "name": "group1",
      "permissions": [
        {
          "topic": "aiida/sensor_data",
          "actions": ["publish", "subscribe"]
        }
      ]
    }
  ]
}
```
<!--
The following picture shows how the measurement data is stored as a timescale record:

![](./figures/timescale.png) -->
