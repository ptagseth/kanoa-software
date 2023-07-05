---
title: Operations Scheduling
sidebar_position: 10
---
Any mode that has been configured for an asset and has the canSchedule attribute set can be scheduled for an asset in this screen.  
The Scheduler supports recurrence rules to allow for recurring events.  
Production orders that are in a ‘Released’ or ‘Scheduled’ state can also be dragged onto the scheduler.

![Mode Editor](/img/24.png)
![Mode Editor](/img/25.png)
![Mode Editor](/img/26.png)

When enabled, scheduled operations will automatically set the mode of the asset when the asset is not in an 'idle' mode. This helps in utilization analysis as scheduled maintenance periods will show up as maintenance and not idle. Any time asset is forced into a mode by a plc tag change or set by an operator, the scheduled mode will not be set.