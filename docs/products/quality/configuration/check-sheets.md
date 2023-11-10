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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';

In order to perform and capture a check, that check must be defined in a check sheet. A check sheet is a collection of one more check items to be taken as a group. Check sheets can be configured in **Quality > Configuration > Check Sheets**. 

Existing Check Sheets can be filtered by Asset <LayersIcon fontSize="small" /> and Enabled/Disabled state.
![Check Sheets](/img/55.png)

The following functionality is available to configure check sheets:
* **View** <RemoveRedEyeIcon fontSize="small" />: Opens a check sheet in a view-only mode. To edit a check sheet, click the <RemoveRedEyeIcon fontSize="small" sx={{color: "#489fe2"}} /> View Mode icon on the top left to switch to <EditIcon fontSize="small" sx={{color: "#a72525"}} /> Edit Mode.
* **Delete** <DeleteIcon fontSize="small" sx={{color: "#a72525"}} />: Deletes the currently selected check sheet. Click OK in the popup to confirmation deletion. If there is historical data associated with the check sheet, the user will be prompted with another popup to see if they want to proceed with deletion.
* **Duplicate** <DuplicateIcon fontSize="small" sx={{color: "#6823a8"}} />: Creates a duplicate of the currently selected checklist, preserving all specifications and details. The new check sheet will have the same name with a (1) attached.
* **Add** <ControlPointIcon fontSize="small" sx={{color: "#89a726"}} />: The add icon [creates a new empty check sheet](#creating-check-sheets).

![Check Sheets](/img/checksheets-1.png)

## Creating Check Sheets
To create a new check sheet, click the **Add** <ControlPointIcon fontSize="small" sx={{color: "#89a726"}} /> icon. This opens the [Check Sheet Editor](#check-sheet-editor) where the check sheet's specifications are added. Once the user enters a **Check Sheet Name**, the check sheet is automatically created and the remaining fields become accessible.  
**Estimated Minutes** is an optional field that indicates the approximate time required for completing the check sheet. If filled out, a check will automatically be added to the check sheet for the user to input time taken for all checks.
![Check Sheets](/img/56.png)

## Check Sheet Editor

### Info Tab
#### DESCRIPTION
A general description about the check sheet can be entered in the **Description** category. 

#### PROCEDURE
The check sheet's procedure can be entered in the **Procedure** tab. 

#### ADD DOCUMENT
Clicking on the _ icon opens a popup that allows the user to select and add a PDF document to the check sheet. The document can be viewed on the right hand side in the PDF viewer. 

#### INSTRUCTIONS
Instructions to complete the check sheet can be entered in the **Instructions** tab.

![Check Sheets](/img/checksheets-6.png)

### Settings Tab

#### AUTO
Select **Auto** if this check sheet will automatically capture check values directly from the equipment. Leave ‘Auto’ as false if checks are to be manually performed. An auto check requires PLC tag paths to be added to attributes.

#### SIGN-OFF
This option indicates that this check requires sign-off. When disabled, **Submitted** check sheets will automatically be set to an **Approved** status and values will be used in SPC analysis. When enabled, **Submitted** check sheets can be manually **Approved** or **Rejected**.

#### ENABLED
If disabled, this check sheet will not be available.

#### ASSET REQUIRED
Select **Asset Required** to access the asset selector and choose assets applicable to the check sheet. Use the CTRL key to select multiple assets. By choosing **Asset Required**, all check items on this check sheet will require you to pick the asset for which you are conducting the assessment.

#### ITEM REQUIRED
Select **Item Required** to access the item and item set selectors and choose items applicable to the check sheet.  You can select multiple items using the CTRL key or through item sets. By choosing **Item Required**, all check items on this check sheet will require you to pick the item for which you are conducting the assessment.

#### CHECK SHEET TYPES
Check sheets are categorized by type into custom folders for convenient grouping with similar check sheets. The folder hierarchy enables the nesting of check sheet types within parent folders and sub-folders. Click on the <SnippetFolderIcon fontSize="small" /> icon to open the check sheet folder selector.  
To add a new check sheet type, select a parent folder and click the **Add Check Type** <AddIcon fontSize="small" /> button. If no parent folder is selected, the check sheet type will stand alone or can be assigned sub-folders of its own. Enter a **Name** for the check sheet folder, select **Enabled** or **Disabled**, and press the **Save** button.  
Check sheet folders can also be deleted by selecting the folder and pressing the **Delete** button. 

#### TOOLING
A check sheet can be configured to trigger a check after a tooling change using the tooling selector.

#### ON FAIL
A re-test will be automatically scheduled for the selected check sheet upon failure. The re-test can be the same check sheet or a different check sheet as specified in the dropdown.

#### NOTIFY
This options sends an email alert notification to the notification group(s) selected from the dropdown. If left blank, no notification will occur.

#### SYNC DATE
Sync Date allows the user to override the date that the check was taken. By default, the 'Taken Date' is the date that the check sheet is submitted. In order to sync the check sheet's dates, create a check of type 'Datetime' and select it in the dropdown. 

![Check Sheets](/img/66.png)

### Checks Tab
The checks tab displays a table of check items associated with the check sheet.

#### CHECK GROUPS
Check items can be broken up into groups. To create a new check group, click the **Add Group** icon. Enter a **Name** for the new group and click **Save**.
![Check Sheets](/img/64.png)

#### CREATING CHECK ITEMS
New checks can be added by clicking on the **Add Check** icon in the Checks tab. This will open the check entry screen. Further information on check item entry can be located [here](#check-item-entry).

![Check Sheets](/img/65.png)

### Triggers Tab
The triggers tab displays a table of triggers associated with the check sheet. Triggers allow you to schedule checks to correspond with different events. Triggers can be added, deleted or edited. Clicking the add or edit button will open the trigger editor. 

![Check Sheets](/img/61.png)

#### TRIGGER TYPES
Trigger type is selected in the **Select Trigger** dropdown. The following trigger types are available:

- **Manual** – The manual trigger cna be configured with any combination of the fields to create a custom trigger. 

- **Mode Change** – Whenever the mode changes on the line, a new check sheet will be generated if the line mode and shift criteria are met.

- **Product Change** – Whenever the product changes on the line, a new check sheet will be generated if the line mode and shift criteria are met. Product Change triggers have a modifier option:

  - Every Product – Quality check is required every time the product changes

  - Unique Products Per Shift - Quality check is required only once per product per shift

  - Once Per Shift – Only one quality check will be performed per shift

- **Re-test** – Whenever a check fails, a re-test check sheet will be generated that indicates what data needs to be collected for the re-test. The re-test check sheet can be scheduled to occur a specific amount of time after the failure occurs. 

- **Shift Change** – Whenever the shift changes on the line, a new check sheet will be generated if the line mode and shift criteria are met.

- **Timed Interval** – A new check sheet will be generated every x minutes if the line mode and shift criteria are met. The duration of the interval is specified in the field to the right of the trigger type.
  
![Check Sheets](/img/62.png)

#### TRIGGER SETTINGS

- **Shift** – If a check should only be taken on a certain shift, it can be defined here, otherwise select ‘All Shifts’.

- **Mode** – If a check should only be taken on a certain mode, it can be defined here, otherwise select 'All Modes'.

- **Delay** – When a check becomes due after the check sheet is triggered can be set using the ‘Delay’ parameter.

- **Coming Due** – This parameter can be set to inform the quality check person that a check is coming due x minutes before it is due.

- **Overdue** – A check will change status to Overdue x minutes after it was due.

- **Grace** – This parameter defines how long a check sheet will be available before its status is changed to missed.

- **Enabled** – Select the Enabled checkbox to make trigger available for use. Disabling the trigger allows it to be hidden without permanently deleting the configuration.
  
![Check Sheets](/img/63.png)

:::note
If a new check is required based on the trigger and an existing check is already due, the existing check will be disabled and the new check created. Examples of this would a check driven by a timer interval and a shift change occurring. Checks that need to be triggered based on a plc tag change value, such as Glue station Check Weigher, are done through a special tagUDT. It is not configurable and must be set up by a manufacturing IT support person.
:::

## Check Item Entry
A check sheet can have multiple checks. Check items can be added <AddIcon fontSize="small" />, edited <EditIcon fontSize="small" />, deleted <DeleteIcon fontSize="small" />, and the order in which they appear can be set using the up <UpIcon fontSize="small" /> and down <DownIcon fontSize="small" /> arrows. 

To create new check, click the <AddIcon fontSize="small" /> add icon. This opens the Check Entry Screen where the check’s specifications are added. If a field in the Check Item Editor is marked with an asterisk, it is required.

![Check Sheets](/img/checksheets-7.png)

### General
#### NAME
A name is required for all check items. 

#### CHECK TYPE
The three check types are Check, Calculated and Trigger.
* **Check** – Check value data is collected manually or from a defined data source.
* **Calculated** – Check value data is calculated based on other check values.
* **Trigger** – Check value is used as a trigger to pull other check values.

#### GROUP
A check item can be organized with similar checks by adding it to a group.

#### ENABLED
A check item can either be enabled or disabled. If enabled, it will appear in the check sheet. 

#### REQUIRED
By selecting the **Required** field, a check item is required to be completed before submitting the check sheet.

#### DYNAMIC
This option is only visible if there is a tolerance selected for the check item.

### Data Properties
#### DATA TYPE
The data type dropdown specifies the type of data that users will provide for this check item. The data type options are as follows: 
* **Boolean** – A data type representing true or false values.
* **Datetime** – A data type for representing calendar dates and times.
* **Float** – A data type for representing decimal numbers. Pick list options include number, time, and fraction.
* **Integer** – A data type for representing whole numbers. Pick list options include number, time, and fraction.
* **String** – A data type for representing sequences of characters. Pick list options include tree, text, and boolean.

:::note 
Only boolean and datetime data types are available for trigger checks. Boolean is used to indicate 'Take check' and datetime indicates 'Take check and get the value at the datetime selected'.
:::

#### NUMBER OF MEASUREMENTS 
Multiple measurements can be set to allow for subgroup measurement analysis. By default, the number of measurements is 1. 

#### UNITS
Use the dropdown to specify the engineering units for the sample. To add a new unit, enter it in the dropdown and select the **Create:** option that becomes visible. A unit can be deleted by clicking the Delete <DeleteIcon fontSize="small" sx={{color: "#a72525"}} /> button to the right of the units dropdown. If you attempt to delete a unit that is being used, an error will be thrown.

#### FORMAT
Specify a formatting reference for the data recorded in this check item.

* **Zero (0)** – Specifies a required digit
* **Pound (\#)** – Specifies an optional digit 
* **Comma (,)** – The grouping separator 
* **Period (.)** – The decimal separator
* **Dash (-)** – A minus sign 
* **E** – Scientific notation 
* **Semicolon (;)** – Used to separate positive and negative patterns. The negative sub-pattern will only be used to specify the prefix and suffix. The number of digits, minimal digits, and other characteristics are all the same as the positive pattern. 
* **Percent (%)** – Multiplies the value by 100 and shows as a percent
* **Apostrophe (')** – Used to quote special characters

#### INSTRUCTIONS
Instructions can be added for each check item and are displayed when the check is selected.

### Advanced Settings
#### DATA SOURCE AND TOLERANCE
The data source and tolerance option is only available for check items of type **Check**.  
Use the attribute selector to link the check item with a data source tag path and tolerance. 

#### PICK LIST
Pick lists are only available for check items of type **Check**.  
The pick list options provide a method for generating a set of buttons for the person taking the quality checks. If no pick list is selected, the numeric keypad is displayed for numeric value checks. Pick lists can only be configured on **Check** type check items.

The pick list options are:

* **TEXT BOX** – Generates buttons with the text defined in the pick list values. Pick list values are comma separated i.e. Green, Blue, Red. There are no pass/fail checks when using a text box.

* **PASS BOX** – Generates buttons with the text defined in the pick list values. Pick list values are comma separated i.e. OK,NOT OK. The first value is the passing value, all other values are considered to have failed the check. The ‘Include N/A’ checkbox adds a button option that is not considered to have passed or failed.

* **MULTI-PASS BOX** – Generates buttons with the text defined in the pick list values. Pick list values are in json format i.e. {'PASS':['Perfect', 'Good'], 'WARNING':['Fair', 'Average'], 'FAIL':['Bad'].

* **NUMBER BOX** – Generates buttons with whole numbers between LSL and USL for process and product checks. For simple checks, buttons are generated for the range of values defined in the pick list values. Pick list value can be a number i.e. 10, to generate buttons ranging from 1 to 10, or a range such as 5-15, to generate buttons ranging from 5 to 15, or a comma separated list such as 1,3,5,7,9.

* **FRACTION BOX** – Generates buttons with fractions between LSL and USL for process and product checks. The pick list value defines the fraction denominator i.e. 16 will generate 1/16, 1/8, 3/16, ½, 5/16, 3/8 etc. between the LSL and USL for the product or process specification

* **DECIMAL BOX** – Generates buttons with real numbers between LSL and USL for process and product checks. The pick list value defines the precision i.e. 10 will generate buttons for 0.1, 0.2, 0.3 etc. between the LSL and USL for the product or process specification. 100 will generate buttons for 0.01, 0.02, 0.03 etc. between the LSL and USL for the product or process specification.

* **TIME BOX** – Presents the user with a time key pad to enter duration in hours, minutes and seconds for a check. The value is stored in seconds.

#### CALCULATIONS
The calculator option is only available for check items of type **Calculated**.  
When a check item has multiple measurement counts associated with it, average, standard deviation and range values are automatically calculated and displayed in the Check Entry screen. If calculations however need to be performed on different check items, calculated check items can be added to the check sheet via the Calculation tab.

Possible calculation formulas are Average, Sum, Range, Min, Max, Std Dev.

Double-click on the check items in the table to add them to list that will be passed to the calculator.

Select the Attribute whose specification will be used to determine pass/fail status.

#### TRIGGERED CHECK
The triggered check option is only available for check items of type **Check**.  
If you have separate trigger checks defined within the check sheet, they can be selected in the Select Check Trigger dropdown. This allows you to synchronize this check to be prompted by another trigger. 
