---
id: checkSheet
title: Entering Checks
sidebar_position: 3
hide_table_of_contents: true
---

import LayoutIcon from '@mui/icons-material/ViewCompact';
import ArrowIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';
import DateIcon from '@mui/icons-material/CalendarMonth';
import KeypadIcon from '@mui/icons-material/Keyboard';
import DeleteIcon from '@mui/icons-material/Delete';
import Delete2Icon from '@mui/icons-material/DeleteForever';

Check Sheets will be automatically scheduled based on their triggers and the activity on production lines such as production runs, mode and shift changes. 
See [Creating Checks](config/checkSheets) for information on how to setup check sheet triggers.

Scheduled check sheets can be opened from the 'Check Table' or the 'Active Check' screen.
Double-click on a scheduled Check Sheet or select the Edit button to open it for entering check data.

![Checks Schedule](/img/quality/checkTable.png)

![Checks Schedule](/img/quality/activeChecks.png)

Check Sheets can also be created on the fly by clicking the 'Add Check' button.
If the Check Sheet specifies an asset and an item in its configuration, you will be asked to select which asset and which item this check is being performed against.

![Checks Schedule](/img/quality/addCheck.png)
***
### Enter Check data

All check input fields will be displayed as defined by the check sheet.  If Check Groups are used - they will display above the checks themselves.   Check entry can be toggled between a Value Entry Popup window or keyboard input clicking the <KeypadIcon fontSize="small" /> to the upper right. There is also a selection for touch screen entry for devices with the ability.

![Check Sheet](/img/quality-checks-check-sheet.png)

After a check has been entered, the next check is automatically selected. If there are multiple measurement counts, the direction in which the next check is selected can be changed by clicking the <ArrowIcon fontSize="small" /> icon .  A check entry can be cleared by using the <DeleteIcon fontSize="small" /> icon.

If a pick list has been defined for a check item, pick list buttons are displayed for the user to enter the check value. If no picklist is defined for a numeric check, the numeric keypad is displayed. The numeric keypad can also be used instead of the picklist buttons by clicking .

Comments can be added for individual check items or a general comment for the check sheet can be added. If any check fails (as indicated by a red background), a comment will be required when the check sheet is submitted.

Above the Check Groups - to the right, the Spec Checks will be displayed with a graphical display of limits and actuals

A Progress Bar at the top displays progress through the check. Color Coding indicates the status of each check (white/empty for incomplete, color-coded for complete with good/bad thresholds, gray for complete without thresholds).

Click the blue i icon and a dialog box will open with the information for each check as defined in the Check Sheet. 

At any time during check entry,the entry checks sheet can be canceled.
Once the checks are all entered, the check sheet can be submitted for approval and then accepted or rejected.

#### Controls
* **Close Button**: Located in the upper left, used to exit the check.
* **Check Name**: Displays the name of the check.
* **Asset Information**: Shows the assigned asset and current status of the check (e.g., due, coming due)
* **Estimated Time to Complete**: Indicates the time required to complete the check
* **Mode Indicator**: Displays whether the check is in edit mode (for completing the check) or view mode (for reviewing entered data)

* **Timestamp**: Shows the current timestamp associated with the check
* **Edit Item Classes Button**: For associating items to the check, if applicable
* **Toggle Keypad/Button Size**: Switches between touchscreen and keyboard-friendly interfaces
* **Navigation Controls**: Includes buttons for navigating between check entries and a clear button to reset check values
* **Information Button**: Provides additional instructions for the check sheet