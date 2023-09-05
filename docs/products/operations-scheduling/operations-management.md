---
id: operations-management
title: Operations Management
sidebar_position: 2
---
Operatiopns Schedule will allow the user to set the Production events for an Operations schedule enabled asset. The Operations Schedule will change the modes for the Production Operations without overwriting PLC states.

![Mode Editor](/img/Overview.png)


### Calendar vs List View
The schedule can be viewed in both Calendar view and List view.  Granularity of the view can be set to Month, Week or Day.

### Create and modify Operations Schedule
Only assets enabled for Operations Schedule can be scheduled.  Once the asset is selected - click the + icon to add an Operations event to the Schedule.  Choose Type, Create a name, set start and end data before event is saved.  Notes for the event is optional.

Use Recurrence link on editor to setup recurrence of event.

Production Work Orders in either 'Released' or 'Scheduled' state can be added to Operations Scheduler by drag and drop from the list of Work Orders.  

Click on an event and select the edit button to modify an existing scheduled event - or click the delete button to remove a scheduled event.


### Operations Scheduler Mode Changes
When enabled, scheduled operations will automatically set the mode of the asset when the asset is not in an 'idle' mode. This helps in utilization analysis as scheduled maintenance periods will show up as maintenance and not idle. Any time asset is forced into a mode by a plc tag change or set by an operator, the scheduled mode will not be set.

