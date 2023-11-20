---
id: operations-management
title: Operations Management
sidebar_position: 2
hide_table_of_contents: true
---
The Operations Schedule allows the user to schedule the Production modes for Operations schedule enabled asset. The Operations Schedule will change the modes for the Production Operations without overwriting states set by a PLC tag.

![Mode Editor](/img/OperationsOverview.png)


### Calendar and List View
The schedule can be viewed in either Calendar view or List view.  Granularity of the view can be set to Month, Week or Day.

### Create and modify Operations Schedule
Only assets enabled for Operations Schedule can be scheduled.  Once the asset is selected - click the + icon to add an Operations event to the Schedule.  Choose Type, Create a name, set start and end data before event is saved.  Notes for the event is optional.

Use Recurrence link on editor to setup recurrence of event.

Production Work Orders in either 'Released' or 'Scheduled' state can be added to Operations Scheduler by drag and drop from the list of Work Orders.  

Click on an event and select the edit button to modify an existing scheduled event - or click the delete button to remove a scheduled event.


### Operations Scheduler Mode Changes
When enabled, scheduled operations will automatically set the mode of the asset when the asset is not in an 'idle' mode. This helps in utilization analysis as scheduled maintenance periods will show up as maintenance and not idle. Any time asset is forced into a mode by a plc tag change or set by an operator, the scheduled mode will not be set.

