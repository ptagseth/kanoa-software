---
id: check-sheets
title: Check Sheets
sidebar_position: 1
---


import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import DuplicateIcon from '@mui/icons-material/AddToPhotosSharp';
import RefreshIcon from '@mui/icons-material/Cached';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import LayersIcon from '@mui/icons-material/Layers';

import LayoutIcon from '@mui/icons-material/ViewCompact';
import ArrowIcon from '@mui/icons-material/ArrowForward';
import DateIcon from '@mui/icons-material/CalendarMonth';
import KeypadIcon from '@mui/icons-material/Keyboard';
import Delete2Icon from '@mui/icons-material/DeleteForever';

In order to perform and capture a check, that check must be defined in a check sheet. A check sheet is a collection of one more check items to be taken as a group. Check sheets can be configured in **Quality > Configuration > Check Sheets**. 

Existing Check Sheets can be filtered by Asset <LayersIcon fontSize="small" />, Check Type and Enabled/Disabled state.
![Check Sheets](/img/55.png)

Check sheets can be edited <EditIcon fontSize="small" />, deleted <DeleteIcon fontSize="small" sx={{color: "#a72525"}} />, duplicated <DuplicateIcon fontSize="small" sx={{color: "#6823a8"}} />, and added <ControlPointIcon fontSize="small" sx={{color: "#89a726"}} />.

![Check Sheets](/img/checksheets-1.png)

## Creating Check Sheets
To create a new check sheet, click the **Add** icon <ControlPointIcon fontSize="small" sx={{color: "#89a726"}} />. This opens the [Check Sheet Editor](#check-sheet-editor) where the check sheet’s specifications are added. Once the user enters a **Check Sheet Type** and **Name**, the check sheet is automatically created and the remaining fields become accessible.  
**Estimated Minutes** is an optional field that indicates the approximate time required for completing the check sheet.
![Check Sheets](/img/56.png)

### Check Sheet Types
There are three types of check sheets that can be created.
* **Asset Checks**: Requires only an asset to be selected. 
* **Item Checks**: Requires only an item to be selected. Can be applied to a part or a finished product.
* **Production Checks**: Requires both an asset and item to be selected.  
![Check Sheets](/img/57.png)

## Check Sheet Editor


### Info Tab
#### DESCRIPTION

#### PROCEDURE

#### ADD DOCUMENT

#### INSTRUCTIONS
General instructions and information about the check sheet can be entered into the **Instructions** tab. Specific instructions for check can be entered on the ‘Check Items’ tab.

![Check Sheets](/img/checksheets-6.png)

### Settings Tab

#### ASSETS
A check sheet can be configured to only be valid for certain assets. If left blank, this check sheet can be used for all assets. Use the selector on the right to select a list of assets that the check sheet is applicable to. Use the CTRL key to select multiple assets.

#### ITEMS
A check sheet can be configured to only be valid for a certain item. If left blank, this check sheet can be used for all items. Use the dropdowns to select a specific item.

#### ITEM SETS
A check sheet can be configured to only be valid for a certain item set. If left blank, this check sheet can be used for all items. Use the dropdowns to select a specific item set.

#### TOOLING
A check sheet can be configured to trigger a check after a tooling change.
![Check Sheets](/img/59.png)

#### AUTO
Select **Auto** if this check sheet will automatically capture check values directly from the equipment. Leave ‘Auto’ as false if checks are to be manually performed. An auto checks requires plc tag paths to be added to the process attribute.

#### SIGNOFF
This option indicates that this check requires signoff. When disabled, ‘Submitted’ check sheets will automatically be set to an ‘Approved’ status and values will be used in SPC analysis. When enabled, ‘Submitted’ check sheets can be manually ‘Approved’ or ‘Rejected’.

#### ENABLED
If disabled, this check sheet will not be available.  
![Check Sheets](/img/58.png)

#### ON FAIL
A re-test will be automatically scheduled for the selected check sheet upon failure. The re-test can be the same check sheet or a different check sheet as specified in the dropdown.

#### NOTIFY
This options sends an email alert notification to the notification group(s) selected from the dropdown. If left blank, no notification will occur.

#### SYNC TAKEN DATE

![Check Sheets](/img/60.png)

### Checks Tab

#### CHECK GROUPS

#### CREATING CHECK ITEMS

### Triggers Tab



A check sheet can have multiple checks. Check items can be added <AddIcon fontSize="small" />, edited <EditIcon fontSize="small" />, deleted <DeleteIcon fontSize="small" />, and the order in which they appear can be set using the up <UpIcon fontSize="small" /> and down <DownIcon fontSize="small" /> arrows. 

To create new check, click the add :add: icon. This opens the Check Item Selector where the check’s specifications are added. There are three types of checks that can be added to a check sheet, Simple, Process and Product. For more details on check types, see Check Item Types.

![Check Sheets](/img/checksheets-7.png)

Instructions can be added for each check and are displayed when the check is selected. Press the update button to save any changes to the check instructions. 

![Check Sheets](/img/checksheets-8.png)

A check can be required to be completed by selecting the ‘Required’ field.

Multiple measurements can be set to allow for sub-group measurement analysis. By default, the number of measurements is 1. 

Double click these values to change them.


![Check Sheets](/img/checksheets-9.png)

## Check Item Types
The three check types are Simple, Process and Product.

### Simple Checks
Simple check items are just that, simple. A simple check has no specification limits associated with it however pass/fail criteria can be defined in the pick list options. Examples would be checks are visual in nature such as ‘Is the Grecon Blow Detector clean and free of debris?’ or ‘Have all calibration checks been performed?’.

When creating a simple check, a name for the check item, and the data type is all that is required. Values that can be entered for this type of check are then defined in the Pick List. Pass / Fail criteria are defined in the pick lick values and are the same regardless of the product or asset begin checked.

![Check Sheets](/img/checksheets-10.png)

### Process Checks
Process check items should be used when specification limits are needed that are dependent upon the asset being checked. A process check has specification limits dependent upon the asset and product that the check is being performed on. An example of this type of check might be ‘Dryer temperature’ where the required setting may be different based on the age or make or model of the equipment on the production line.

Process attributes and their specifications are defined under ‘Process Specification’. The specification used is then based on the product and asset being checked. Multiple process checks can be selected and added to a check by selecting multiple process attributes using the CTRL key. Process attributes that can be selected are filtered based on all Assets that fall under the Asset(s) defined for the Check Sheet.

### Product Checks
Product check items should be used when specification limits are needed that are dependent upon the product being checked. A product check has specification limits dependent upon the product that the check is being performed on regardless of the asset that the product is being manufactured on. These type of checks might be for width, height and length of the finished product.

Product attributes and their specifications are defined under ‘Product Specification’. The specification used is then based on the product being checked. Multiple product checks can be selected and added to a check by selecting multiple process attributes using the CTRL key.


## Pick Lists

![Check Sheets](/img/checksheets-11.png)


The pick list options provide a method for generating a set of buttons for the person taking the quality checks. If no pick list is selected, the numeric keypad is displayed for numeric value checks. 

The pick list options are:

- **TEXT BOX** – Generates buttons with the text defined in the pick list values. Pick list values are comma separated i.e. Green, Blue, Red. There are no pass/fail checks when using a text box.

- **PASS BOX** - Generates buttons with the text defined in the pick list values. Pick list values are comma separated i.e. OK,NOT OK. The first value is the passing value, all other values are considered to have failed the check. The ‘Include N/A’ checkbox adds a button option that is not considered to have passed or failed.

- **MULTI-PASS BOX** - Generates buttons with the text defined in the pick list values. Pick list values are in json format i.e. {'PASS':['Perfect', 'Good'], 'WARNING':['Fair', 'Average'], 'FAIL':['Bad'].

- **NUMBER BOX** – Generates buttons with whole numbers between LSL and USL for process and product checks. For simple checks, buttons are generated for the range of values defined in the pick list values. Pick list value can be a number i.e. 10, to generate buttons ranging from 1 to 10, or a range such as 5-15, to generate buttons ranging from 5 to 15, or a comma separated list such as 1,3,5,7,9.

- **FRACTION BOX** – Generates buttons with fractions between LSL and USL for process and product checks. The pick list value defines the fraction denominator i.e. 16 will generate 1/16, 1/8, 3/16, ½, 5/16, 3/8 etc. between the LSL and USL for the product or process specification

- **DECIMAL BOX** - Generates buttons with real numbers between LSL and USL for process and product checks. The pick list value defines the precision i.e. 10 will generate buttons for 0.1, 0.2, 0.3 etc. between the LSL and USL for the product or process specification. 100 will generate buttons for 0.01, 0.02, 0.03 etc. between the LSL and USL for the product or process specification.

- **TIME BOX** – Presents the user with a time key pad to enter duration in hours, minutes and seconds for a check. The value is stored in seconds.


## Calculations
When a check item has multiple measurement counts associated with it, average, standard deviation and range values are automatically calculated and displayed in the Check Entry screen. If calculations however need to be performed on different check items, calculated check items can be added to the check sheet via the Calculation tab.

Possible calculation formulas are Average, Sum, Range, Min, Max, Std Dev.

Double-click on the check items in the table to add them to list that be will be passed to the calculator.

Select the Product Attribute whose specification will be used to determine pass/fail status.

![Check Sheets](/img/checksheets-12.png)

![Check Sheets](/img/checksheets-13.png)


## Schedule
If checks need to be taken on certain events such as shift change, or at regular intervals such as ‘once an hour while in production’, triggers can be defined and added to each check sheet on the ‘Schedule’ tab. If no triggers are defined, check sheets can still be generated manually.

![Check Sheets](/img/checksheets-14.png)

### Triggers
- **Product Change** – Whenever the product changes on the line, a new check sheet will be generated if the line mode and shift criteria are met. Product Change triggers have a modifier option:

    - Every Product –Quality check is required every time the product changes

    - Unique Products Per Shift - Quality check is required only once per product per shift

    - Once Per Shift – Only one quality check will be performed per shift

- **Shift Change** – Whenever the shift changes on the line, a new check sheet will be generated if the line mode and shift criteria are met.

- **Mode Change** – Whenever the mode changes on the line, a new check sheet will be generated if the line mode and shift criteria are met.

- **Timed Interval** – A new check sheet will be generated every x mins if the line mode and shift criteria are met.

### Trigger Settings
- **Mode** – Line modes can be Production, Idle, Changeover, Maintenance depending on how line mode is determined. Select the valid mode for the check sheet.

- **Shift** – If a check should only be taken on a certain, it can be defined here, otherwise select ‘All Shifts’.

- **Delay** – When a check becomes due after the check sheet is triggered can be set using the ‘delay’ parameter.

- **Coming Due** – This parameter can be set to inform the quality check person that a check is coming due x minutes before it is due.

- **Overdue** – A check will change status to Overdue x minutes after it was due.

- **Grace** – This parameter defines how long a check sheet will be available before its status is changed to missed.

![Check Sheets](/img/checksheets-15.png)


:::note
If a new check is required based on the trigger and an existing check is already due, the existing check will be disabled and the new check created. Examples of this would a check driven by a timer interval and a shift change occurring. Checks that need to be triggered based on a plc tag change value, such as Glue station Check Weigher, are done through a special tagUDT. It is not configurable and must be set up by a manufacturing IT support person.
:::

