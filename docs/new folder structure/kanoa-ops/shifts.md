---
id: shifts
title: Shift Management
sidebar_position: 3
hide_table_of_contents: true
---
Manage personnel shifts across your entire enterprise, whether at the plant level or for specific assets. This screen allows for the creation, viewing, 
and editing of shifts in a user-friendly interface, accommodating the diverse scheduling needs of different areas or lines within your enterprise.

![Schedule Shifts](/img/shifts/scheduling-shifts.png)

We use the BIJC Calendar component, thanks to Chris Taylor and Lewis Storey for this ignition implementation of fullcalendar.io. For more information on this component please refer to [bijc calander](https://modules.bijc.co.uk/?page_id=76).

***
### Features
**Site Time Zone**<br />
KanoaOPS provides support for enterprises with sites in different timezones. When a site is selected, the calendar will show the shift times in the sites' timezone.<br />
A sites' timezone is set as a custom attribute called 'tz' in the asset configuration screen.

**Inherited Shifts**<br />
Shifts can be created at the site, at the area or at the asset level. When an asset doesn't have a shift associated with itself, it will look up the asset hierarchy
for a shift. This means that you can create the shifts at the site level and all assets underneath will respect that shift. If an asset or area requires a different shift,
simply create the shift at that level. Note, as soon as a shift is created at a level, no shifts will be inherited at that level.<br />

**Complex Shift Rotation Patterns**<br />
We use the dateutil rrule object which offers a complete and fast implementation of the recurrence rules documented in the [iCalendar RFC](https://datatracker.ietf.org/doc/html/rfc5545).
This makes the scheduling of repeating shifts very simple and pretty much identical to how it is done in google calendar, iCalendar and Microsofts calendar.<br />

To create say a four shift rotation pattern, simply create the schedule pattern for each week and set it to repeat every x weeks.

![Schedule Operations](/img/schedule/recurrence.png)<br />
***
### Filters
* **Asset Selector**: Click on the asset selector ![operationsSchedule](/img/components/assetSelector.png) to select which assets the scheduled events are shown for.<br />
* **Display mode**: Scheduled events can be shown on a calendar or as a list.
* **Period**: Calendar or list can be shown for a month, week or day.<br />
***
### Adding Shifts
1. In the calendar view, select the time you wish to schedule the shift for.
2. Click ![operationsSchedule](/img/components/addEvent.png) button.
3. Select the asset if it has not already been populated.
4. Select the shift name. If the shiftname does not exist, you can create it by typing the name of it in the dropdown and select 'create'.
5. Click on the circle to choose a color for this shift.
6. Set start and end times.
7. For recurring events, click on the 'Does Not Repeat' link to edit recurrence options. 

![operationsSchedule](/img/shifts/shiftEventEditor.png)

**Note**: Shifts do not have to be repeating, but in general they should be. Use non repeating shift entries for special one off shifts.

***
### Editing Shifts
1. In the calendar view, select the shift you wish to edit and click ![operationsSchedule](/img/components/editEvent.png) button.

***
### Deleting Shifts
1. In the calendar view, select the shift you wish to delete and click ![operationsSchedule](/img/components/deleteEvent.png) button. You can also use the keyboard 'delete' key. 