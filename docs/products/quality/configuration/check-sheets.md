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

Check sheets can be viewed <RemoveRedEyeIcon fontSize="small" />, deleted <DeleteIcon fontSize="small" sx={{color: "#a72525"}} />, duplicated <DuplicateIcon fontSize="small" sx={{color: "#6823a8"}} />, and added <ControlPointIcon fontSize="small" sx={{color: "#89a726"}} /> using the sidebar. To edit a check sheet, click <RemoveRedEyeIcon fontSize="small" /> View Check Sheet then switch from <RemoveRedEyeIcon fontSize="small" sx={{color: "#489FE2"}} /> View Mode to  <EditIcon fontSize="small" sx={{color: "#a72525"}} /> **Edit Mode** by clicking the icon in the top right.

![Check Sheets](/img/checksheets-1.png)

## Creating Check Sheets
To create a new check sheet, click the **Add** icon <ControlPointIcon fontSize="small" sx={{color: "#89a726"}} />. This opens the [Check Sheet Editor](#check-sheet-editor) where its specifications are added. Once the user enters a **Check Sheet Name**, the check sheet is automatically created and the remaining fields become accessible.  
**Estimated Minutes** is an optional field that indicates the approximate time required for completing the check sheet. If filled out, a check will automatically be added to the check sheet for the user to input time taken for all checks.
![Check Sheets](/img/56.png)

## Check Sheet Editor

### Info Tab
#### DESCRIPTION
A general description about the check sheet can be entered in the **Description** category. 

#### PROCEDURE
The check sheet's procedure can be entered in the **Procedure** tab. 

#### ADD DOCUMENT
Clicking on the _ icon opens a popup that allows the user to select and add a document to the check sheet. Compatible document types are ___. The document can be viewed on the right hand side in the PDF viewer. 

#### INSTRUCTIONS
Instructions to complete the check sheet can be entered in the **Instructions** tab.

![Check Sheets](/img/checksheets-6.png)

### Settings Tab

#### AUTO
Select **Auto** if this check sheet will automatically capture check values directly from the equipment. Leave ‘Auto’ as false if checks are to be manually performed. An auto check requires PLC tag paths to be added to attributes.

#### SIGNOFF
This option indicates that this check requires signoff. When disabled, **Submitted** check sheets will automatically be set to an **Approved** status and values will be used in SPC analysis. When enabled, **Submitted** check sheets can be manually **Approved** or **Rejected**.

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

![Check Sheets](/img/60.png)

### Checks Tab
The checks tab displays a table of check items associated with the check sheet.

#### CHECK GROUPS
Check items can be broken up into groups. To create a new check group, click the **Add Group** icon. Enter a **Name** for the new group and click **Save**.

#### CREATING CHECK ITEMS
New checks can be added by clicking on the **Add Check** icon in the Checks tab. This will open the check entry screen. Further information on check item entry can be located here.

### Triggers Tab
The triggers tab displays a table of triggers associated with the check sheet.


## Check Item Entry
A check sheet can have multiple checks. Check items can be added <AddIcon fontSize="small" />, edited <EditIcon fontSize="small" />, deleted <DeleteIcon fontSize="small" />, and the order in which they appear can be set using the up <UpIcon fontSize="small" /> and down <DownIcon fontSize="small" /> arrows. 

To create new check, click the <AddIcon fontSize="small" /> add icon. This opens the Check Entry Screen where the check’s specifications are added. If a field in the Check Item Editor is marked with an asterisk, it is required.

![Check Sheets](/img/checksheets-7.png)

### General
* Name: A name is required for all check items. 
* Group: A check item can be organized with similar checks by adding it to a group.
* Enabled: A check item can either be enabled or disabled. If enabled, it will appear in the check sheet. 
* Required: A check item can be required to be completed before submitting the check sheet by selecting the **Required** field.

### Data Properties
* Data Type:
* Number of Measurements: Multiple measurements can be set to allow for sub-group measurement analysis. By default, the number of measurements is 1.
* Units:
* Check Type: The three check types are Check, Calculated and Trigger.
  * Check:
  * Calculated:
  * Trigger:
* Format:

