---
title: Admin Console
---

- View the state of the system at a glance
- View key metrics of permissions and received data
- Find errors in services
- Help customers debug their permissions

## Separate System Monitoring and Admin Console

The Grant Agreement includes "logging, debugging, and analysis" as features of the Admin Console.

This functionality is better handled by specialized tools like [OpenTelemetry](https://opentelemetry.io/) or [Grafana](https://grafana.com/).
Such a setup would include the following features originally attributed to the Admin Console:

- *Exceptions Page*: Where exceptions from run-through processes are automatically displayed and from where corrective actions can be triggered (in a later stage).
- *Logging*: Make logging available at system, service and permission process level.

The Admin Console should still allow the eligible party to analyze domain entities like permissions, data packages, and data needs.

Discussion on monitoring tools: https://github.com/eddie-energy/eddie/issues/774.
