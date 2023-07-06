---
title: Check Entry Screen
sidebar_position: 2
---

import LayoutIcon from '@mui/icons-material/ViewCompact';
import ArrowIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';
import DateIcon from '@mui/icons-material/CalendarMonth';
import KeypadIcon from '@mui/icons-material/Keyboard';
import DeleteIcon from '@mui/icons-material/Delete';
import Delete2Icon from '@mui/icons-material/DeleteForever';

:::info
The check entry screen can be accessed by double clicking a check sheet in **Quality > Scheduled** checks in the MES application.
:::

![CHeck Entry](/img/check-entry-1.png)


All checks defined for a check sheet are displayed in a table either on the left-hand side of the screen or at the top of the screen. Screen placement is dependent on the measurement count of the checks. The layout can be toggled between vertical and horizontal by clicking on the <LayoutIcon fontSize="small" /> button.

After a check has been entered, the next check is automatically selected. If there are multiple measurement counts, the direction in which the next check is selected can be changed by clicking <ArrowIcon fontSize="small" />.

If this is a product check, the product is automatically taken from the line tag and displayed on the top of the screen. If the product being checked is different, the correct product can be selected by clicking <EditIcon fontSize="small" />.

When a check is taken, the current time is stored. If the check was taken in the past, the correct datetime can be entered by clicking <DateIcon fontSize="small" />.

If a pick list has been defined for a check item, pick list buttons are displayed for the user to enter the check value. If no picklist is defined for a numeric check, the numeric keypad is displayed. The numeric keypad can also be used instead of the picklist buttons by clicking <KeypadIcon fontSize="small" />.

Individual check values can be cleared using <DeleteIcon fontSize="small" />. All entered values can be cleared for a check sheet using <Delete2Icon fontSize="small" />.

Comments can be added for individual check items or a general comment for the check sheet can be added. If any check fails (as indicated by a red background), a comment will be required when the check sheet is submitted.