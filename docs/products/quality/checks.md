---
title: Check Entry
sidebar_position: 2
---

import LayoutIcon from '@mui/icons-material/ViewCompact';
import ArrowIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';
import DateIcon from '@mui/icons-material/CalendarMonth';
import KeypadIcon from '@mui/icons-material/Keyboard';
import DeleteIcon from '@mui/icons-material/Delete';
import Delete2Icon from '@mui/icons-material/DeleteForever';

### Schedule Checks

:::info
The Schedule Check screen will schedule checks using already configured check sheets
:::

![Checks Schedule](/img/Checks-Overview.png)


Use filters above to manage the list of Scheduled Checks created. And use the buttons on the left to View, Edit, Create and Delete Scheduled Checks.

#### Create Check Sheet

![Checks Create](/img/Checks-Create.png)

To Create / Schedule a Check 

Pick the type of check:
- Asset Check
- Item Check
- Production Check

Select which asset this check will utilize and also identify what specific items

Select a configured Check Sheet - with all checks defined.

### Check Entry


![Checks Entry](/img/Checks-Enter1.png)

To start entry of Checks - open up a Check by double click on the scheduled check.

All check input fields will be displayed as defined by the check sheet.  If Check Groups are used - they will display above the checks themselves.   Check entry can be toggled between a Value Entry Popup window or keyboard input clicking the <KeypadIcon fontSize="small" /> to the upper right. There is also a selection for touch screen entry for devices with the ability.

After a check has been entered, the next check is automatically selected. If there are multiple measurement counts, the direction in which the next check is selected can be changed by clicking the <ArrowIcon fontSize="small" /> icon .  A check entry can be cleared by using the <DeleteIcon fontSize="small" /> icon.

If a pick list has been defined for a check item, pick list buttons are displayed for the user to enter the check value. If no picklist is defined for a numeric check, the numeric keypad is displayed. The numeric keypad can also be used instead of the picklist buttons by clicking .

Comments can be added for individual check items or a general comment for the check sheet can be added. If any check fails (as indicated by a red background), a comment will be required when the check sheet is submitted.

Above the Check Groups - to the right, the Spec Checks will be displayed - with a graphical display of limits and actuals

Click the blue i icon - and a dialog box will open with the information for each check as defined in the Check Sheet. 

At any time during checks entry - the entry checks sheet can be Cancelled.
Once the checks are all entered - the Checks can be Submitted for approval and then Accepted, Rejected.