---
id: production-data-entry
title: Production Data Entry
sidebar_position: 5
---
import CreateIcon from '@mui/icons-material/Create';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ClearIcon from '@mui/icons-material/Clear';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import UndoIcon from '@mui/icons-material/Undo';

## Editing Asset Operation
Asset Operation can be edited from the [Asset Operation Screen](docs/products/mes/asset-operation.md).


## Editing Downtime
Downtime can be edited from both the [Asset Operation Screen](docs/products/mes/asset-operation.md) and the [Run Review Screen](docs/products/mes/performance-analytics/run-review.md).  
To edit downtime, click on an event in the downtime data table. The following functionality is available: 
* **Split** <CallSplitIcon fontSize="small" /> : Separates a singular downtime event into two separate events. 
* **Edit** <EditIcon fontSize="small" /> : Opens an Edit Events pop-up. 
  * The **Select Asset** dropdown allows the downtime event to be made specific to an individual cell. 
  * The **Select Bucket** and **Select Reason** dropdowns allow the user to select the downtime category and reason respectively. These downtime reasons can be configured in [States](docs/products/mes/asset-management/states.md). A breakdown of downtime events by category or reason is provided in [Downtime Analytics](docs/products/mes/performance-analytics/downtime.md). 
  * The **Part Required** check box allows the user to indicate that a part is needed in the case of an equipment breakdown. 
  * The **Comment** box allows any further details to be added below. 
  * Click <CheckBoxIcon fontSize="small" /> to save your changes or <ClearIcon fontSize="small" /> to cancel. 
* **Delete** <DeleteForeverIcon fontSize="small" /> : Deletes a downtime event
* **Revert** <UndoIcon fontSize="small" /> : Allows the user to undo changes they made while editing a downtime event.


![Editing Downtime](/img/39.png)

## Editing Production Counts
Production run counts can be edited from the [Run Review Screen](docs/products/mes/performance-analytics/run-review.md).