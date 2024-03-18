---
id: operations1
title: Scheduling Operations
sidebar_position: 2
hide_table_of_contents: true
---
The operations schedule provides everyone in your organization with a clear view of current and planned activities. 
To truly gain deep insight into how your assets are being used, schedule information is crucial, and we strongly recommend that while you may have a different solution
for scheduling and planning, whether that is done in ERP or excel, that information needs to be shared with MES. Why? Because analyzinf the performance of your 
manufacturing data is only useful if it is contextualized and keeping schedule information separate from production information limits your ability to gain insights into 'just how well are we scheduling?'. 
In fact we would go so far as to say that poor scheduling of resources in terms of asset, material and personnel may well be your No.1 cause of inefficiency.
Whether you use our built-in scheduling solution or a third party, integrating production scheduling information into the MES application is an important step in
driving continuous improvement.

We use the BIJC Calendar component, thanks to Chris Taylor and Lewis Storey for this ignition implementation of fullcalendar.io. For more information on this component please refer to [bijc calander](https://modules.bijc.co.uk/?page_id=76).

![Schedule Operations](/img/schedule/schedule.png)
***
### Features
**Recurring Events**<br />
We are using the dateutil rrule object which offers a complete and fast implementation of the recurrence rules documented in the [iCalendar RFC](https://datatracker.ietf.org/doc/html/rfc5545).
This makes the scheduling of repeating operations and shifts very simple and pretty much identical to how it is done in google calendar, iCalendar and Microsofts calendar.<br />

![Schedule Operations](/img/schedule/recurrence.png)<br />

**Auto Scheduling**<br />
When enabled, an asset is constantly checking for scheduled events. Whenever an operation ends, if any event such as maintenance or changeover has been scheduled,
the asset is automatically set to the scheduled event mode. When the scheduled event ends, the asset will be set to an idle mode. The source of the mode whether is was set
by the plc, an operator or the schedule is stored along with the mode event. This information is what drives insights into asset utilization in that actual non-production
events are captured rather than just seeing the asset in a production or idle mode. 

The auto-schedule will only set the asset mode from the schedule when the current mode has not been set by the plc or by an operator. 

Auto-scheduling configuration is set in the Asset Mode Link. 
Additionally the tag [Kanoa]kanoa/mes/config/schedule/endScheduledRuns determines whether a scheduled Production run should be ended automatically or by the plc or operator.
***
### Filters
* **Asset Selector**: Click on the asset selector ![operationsSchedule](/img/components/assetSelector.png) to select which assets the scheduled events are shown for.<br />
* **Display mode**: Scheduled events can be shown on a calendar or as a list.
* **Period**: Calendar or list can be shown for a month, week or day.<br />
***
### Adding Events
1. In the calendar view, select the time you wish to schedule the event for.
2. Click ![operationsSchedule](/img/components/addEvent.png) button.
2. Select the asset and type of event. If the event is 'Production' you can select a work order to be run or an item to produce or leave it just blank.
3. Name the event, set start and end times, and add any relevant notes.
4. For recurring events, click on the 'Does Not Repeat' link to edit recurrence options. Note events that have a work order associated with thme cannot be recurring.


**Orders**<br />
Orders can also be scheduled by clicking on the ![operationsSchedule](/img/components/eventSelector.png) button in the top bar.

![operationsSchedule](/img/schedule/orderEventSelectorBox.png)


Set 'Item Enabled' to show production orders that can be produced on this asset. 
Setting 'Asset Specific' will ensure only orders that call out to be produced on this asset will be shown. Note this tends to only affect orders that have been
received from an ERP system where the asset has been specified.

Orders can be filtered by their status.

When an order is dragged onto the schedule, the total duration will be determined by the schedule rate (or standard rate if no schedule rate has been set) for 
this asset-item combo. The schedule and standard rate are set in the Materials Configuration page.

**Note**<br />
Dragging an order may well cause multiple events to be scheduled at the same time. It is up to you to ensure that only one event exists at any time for an asset
for auto-scheduling to work correctly. The auto-schedule will only look at the first event scheduled when multiple events exist for an asset.

***
### Editing Events
1. In the calendar view, select the event you wish to edit and click ![operationsSchedule](/img/components/editEvent.png) button.

***
### Deleting Events
1. In the calendar view, select the event you wish to delete and click ![operationsSchedule](/img/components/deleteEvent.png) button. You can also use the keyboard 'delete' key.