---
id: production-data-entry
title: Production Data Entry
sidebar_position: 5
hide_table_of_contents: true
---
import CreateIcon from '@mui/icons-material/Create';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ClearIcon from '@mui/icons-material/Clear';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import UndoIcon from '@mui/icons-material/Undo';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SaveIcon from '@mui/icons-material/Save';

The **Production Data Entry** table records data pertaining to asset operation modes, downtime events, and production counts. It can be accessed from the [Asset Operation](docs/products/ops/asset-operation.md) and [Run Review](docs/products/ops/performance-analytics/run-review.md) screens.

## Accessing Production Data Entry
1. Select a line using the **Asset Selector** in the top left.
![Production Data Entry](/img/36.png)
2. If you are accessing Production Data Entry from the Asset Operation page, click on the <CreateIcon fontSize="small" /> **Production Entry** tab.
![Production Data Entry](/img/45.png)
3. Use the date range selector to select the relevant time frame.
![Production Data Entry](/img/37.png)

## Editing Downtime
To access downtime data, open the production data entry table. Then, click on an asset and select the **Downtime** tab.
   ![Editing Downtime](/img/41.png)

To edit downtime, click on a downtime event. The following functionality is available: 
* **Revert** <UndoIcon fontSize="small" sx={{color: "#db9b57"}}/> : Allows the user to undo changes they made while editing a downtime event.
* **Split** <CallSplitIcon fontSize="small" sx={{color: "#89a726"}} /> : Separates a singular downtime event into two separate events. Select the location of the split using the popup and press <CallSplitIcon fontSize="small" />
  to save.
  ![Production Data Entry](/img/46.png)
* **Delete** <DeleteForeverIcon fontSize="small" sx={{color: "#d85857"}} /> : Deletes a downtime event
* **Edit** <EditIcon fontSize="small" sx={{color: "#2d82d2"}} /> : Opens the Edit Events pop-up. 
  * The **Select Asset** dropdown allows the downtime event to be made specific to an individual cell. 
  * The **Select Bucket** and **Select Reason** dropdowns allow the user to select the downtime category and reason respectively. Downtime reasons can be configured in [States](docs/products/ops/asset-management/states.md). A breakdown of downtime events by category or reason is provided in [Downtime Analytics](docs/products/ops/performance-analytics/downtime.md). 
  * The **Part Required** check box allows the user to indicate that a part is needed in the case of an equipment breakdown. 
  * The **Comment** box allows any further details to be added below. 
  * Click <CheckBoxIcon fontSize="small" sx={{color: "#bcda57"}}/> to save your changes or <ClearIcon fontSize="small" /> to cancel.

![Editing Downtime](/img/39.png)

### Filtering Downtime Events
The downtime events can be filtered using options in the footer of the table.  
The **Show Uncoded** and **Show Coded** options filter downtime events based on whether they have been edited.  
**Duration** allows the user to only display events longer than a specified time duration.  
The right side of the footer displays a summary of the table results.
![Editing Downtime](/img/44.png)

Additionally, click the <FilterAltIcon fontSize="small" /> button at the top of the table to expand the standard table filter. 
![Editing Downtime](/img/43.png)

## Editing Production Counts
To access production counts, open the production data entry table. Then, click on an asset and select the **Counts** tab.
The **Counts** tab displays infeed units, outfeed units and waste units associated with an asset.
![Editing Counts](/img/47.png)

The user can manually replace infeed, outfeed, or waste values through the production counts screen by clicking on the corresponding box, typing a new value and pressing <SaveIcon fontSize="small" sx={{color: "#89a726"}} />.  
To clear a value, press the <ClearIcon fontSize="small" /> to the right of the placeholder. Once cleared, a calculator icon will be displayed, indicating that the new value has been calculated automatically.
![Editing Counts](/img/49.png)

Infeed, outfeed and waste units can be configured in [Asset Management](/category/asset-management). Additionally, the user can configure package count to seamlessly handle the conversions between infeed units (i.e. bottles) and outfeed units (i.e. cases).

If there is a discrepancy in the recorded infeed, outfeed and waste units, a warning will be displayed.
![Editing Counts](/img/48.png)