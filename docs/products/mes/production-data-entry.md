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
import FilterAltIcon from '@mui/icons-material/FilterAlt';

The **Production Data Entry** table records data pertaining to asset operation modes, downtime events, and production counts. It can be accessed from the [Asset Operation](docs/products/mes/asset-operation.md) and [Run Review](docs/products/mes/performance-analytics/run-review.md) screens.

Select a line using the **Asset Selector** in the top left and use the date range selector to select the relevant time frame.
![Editing Downtime](/img/42.png)

## Editing Asset Operation
To edit asset operation, open the asset operation screen

## Downtime
To access downtime data, [open the production data entry table](docs/products/mes/asset-operation.md#accessing-production-data-entry). Then, click on an asset and select the **Downtime** tab.
   ![Editing Downtime](/img/38.png)

### Editing Downtime Events
To edit downtime, open the downtime data table and click on a downtime event. The following functionality is available: 
* **Revert** <UndoIcon fontSize="small" sx={{color: "#db9b57"}}/> : Allows the user to undo changes they made while editing a downtime event.
* **Split** <CallSplitIcon fontSize="small" sx={{color: "#89a726"}} /> : Separates a singular downtime event into two separate events. 
* **Delete** <DeleteForeverIcon fontSize="small" sx={{color: "#d85857"}} /> : Deletes a downtime event
* **Edit** <EditIcon fontSize="small" sx={{color: "#2d82d2"}} /> : Opens the Edit Events pop-up. 
  * The **Select Asset** dropdown allows the downtime event to be made specific to an individual cell. 
  * The **Select Bucket** and **Select Reason** dropdowns allow the user to select the downtime category and reason respectively. Downtime reasons can be configured in [States](docs/products/mes/asset-management/states.md). A breakdown of downtime events by category or reason is provided in [Downtime Analytics](docs/products/mes/performance-analytics/downtime.md). 
  * The **Part Required** check box allows the user to indicate that a part is needed in the case of an equipment breakdown. 
  * The **Comment** box allows any further details to be added below. 
  * Click <CheckBoxIcon fontSize="small" sx={{color: "#bcda57"}}/> to save your changes or <ClearIcon fontSize="small" /> to cancel.

![Editing Downtime](/img/41.png)  
![Editing Downtime](/img/39.png)

### Filtering Downtime Events
The downtime events can be filtered using options in the footer of the table.  
The **Show Uncoded** and **Show Coded** options filter downtime events based on whether or not they have been edited.  
**Duration** allows the user to only display events longer than a specified time duration.  
The right side of the footer displays a summary of the table results.
![Editing Downtime](/img/44.png)

Otherwise, click the <FilterAltIcon fontSize="small" /> button at the top of the table to expand the standard table filter. 
![Editing Downtime](/img/43.png)

## Production Counts

### Editing Production Counts
To edit production run counts, 