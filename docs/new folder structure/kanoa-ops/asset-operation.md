---
id: asset-operation
title: Operator Station
sidebar_position: 1
hide_table_of_contents: true
---
The Asset Operation screen allows an operator to manage the day to day operations for an asset. 

![Asset Operation](/img/asset-ops-run-control.png)

From this screen, an operator can...

**Start and End Runs (Run Control)**
* Select production orders and start and end production runs
* Start and end non production order runs
* Select a scheduled event
* Change the mode of an asset to say 'idle', 'maintenance', 'changeover' or any of the modes defined and associated with the asset.

**View Current Production Run KPIs (Run Monitor)**
* View production KPI's for the current run, last 24 hours, last 7 days or last 14 Days
![Asset Operation](/img/asset-ops-run-monitor.png)

**Edit Production Run Downtime and Counts (Manual Entry)**
* Add, edit and delete asset states and downtime events
* Correct production counts
* Create and consume production lots from production runs

**View Asset Schedule (Schedule)**
* View schedule and add or edit schedule events
***
### Editing Production Counts and Lots
It is essential for operators to accurately manage and revise production run data. The functionality to edit counts and downtime ensures that the production data reflects the actual performance and events on the production floor. This screen is instrumental in maintaining the integrity of production data, which is crucial for effective operational analysis and decision-making.
**Counts**<br/>
Users can edit production counts by selecting a production run from the Run Review tab on the Manual Entry screen.

Infeed, outfeed and waste counts can be edited by entering a new value in the numfield and clicking on the save button.
A calculator symbol next to a count indicates that no counts were recorded from the plc for that count and so the count has been calculated from the other two counts.
Adding a count to a calculated count will change it so that it is no longer calculated. It is your responsibility to ensure that counts match up i.e infeed = outfeed + waste.
You can clear a count by using the x next to it and this will cause it to be re-calculated.

**Lots**<br/>
Use the + button on the Counts tab to add a lot. Lot counts can be reconciled with production counts.
![Production Entry](/img/ops-operations-production-entry1.png)
***

### Downtime Event Editor
Anytime the state of an asset changes, a record is created in the mes.stateEvent table. State can be of type 'running', 'unplanned downtime' and 'planned downtime'.
![Production Entry](/img/ops-operations-production-entry2.png)
The Downtime Editor allows the following actions...<br/>

* Edit a state / downtime event
* Add a state
* Delete a state
* Split a state
* Revert a state

**Editing Asset States / Downtime Events**
* Select a downtime event and click the ![Production Entry](/img/components/editButton.png).
* Select the cell that was responsible for the downtime or leave it at the asset (line) level.
* Click on the ![Production Entry](/img/components/editButton.png). to select the new state.<br/>
![Production Entry](/img/asset-operation/editDowntimeEvent.png)
* Updated downtime events are marked with a checkbox.

**Note**
* Downtime events can be deleted in which case the previous state will include the period of time of the deleted event.<br/>
* Downtime events can also be split into multiple events. You can specify the duration for the split and re-code each event as necessary.<br />
* Split events and updated events can be reverted. Deleted events cannot.

