---
id: check-table
title: Scheduling Checks
sidebar_position: 2
hide_table_of_contents: true
---
The Kanoa Quality Check Table Screen is an integral interface in the Kanoa quality system, offering comprehensive management and review of check sheets. This screen is divided into three distinct sections: the Filter Section, the Action Panel, and the Main Content Area, featuring the Check Table. This documentation will detail the functionalities and navigation of each section.

![Check Table](/img/quality-checks-check-table.png)

## Screen Layout

**Filter Section**: Located at the top, it includes filters for assets, items, check types, and date ranges.<br />
**Action Panel**: Positioned on the left, this panel contains various state filters and management buttons.<br />
**Main Content - Check Table**: The central area displaying the check sheet instances with multiple information columns.

## Filter Section

### Filtering Options
**Filter Assets**: Opens a pop-up for selecting specific assets to filter the check table.<br />
**Filter Items**: Activates the item filters pop-up, narrowing down checks related to a chosen item.<br />
**Manual/Auto Checks Selector**: Toggles between automatic and manual checks. In manual mode, an 'Active Checks' option appears to filter currently active checks.<br />
**Date Range Selection**: Offers a quick date range dropdown, along with manual start and end date filters.

## Action Panel

### State Filters and Management
**Show State Filters Button**: Reveals filters like approved, canceled, coming due, etc.<br />
**Clear/Set All Filters Buttons**: Quickly manage the check table's filter settings.<br />
**Refresh Table Button**: Updates the table with the latest database entries.<br />
**Clear Table Button**: Removes all current content from the table.<br />
**Add Check Sheet Button**: Opens a pop-up for manual check sheet scheduling.<br />
**View Check Sheet Button**: Directs to a detailed view of a check sheet.<br />
**Clear Selection/Delete Check Options**: Facilitates the deselection or deletion of chosen checks.

### Check Table Interactions
**Text Filter**: A tool for filtering checks based on textual content in the table.<br />
**Display Columns**: Includes status, remaining item, asset, scheduled time, trigger, taken on time, user, check status, comments, and shift.<br />
**Viewing Check Details**: Double-clicking a check entry opens its detailed view, similar to using the 'View Check Sheet' button.
***

### Active Checks Dashboard

The Active Checks Dashboard is designed to provide a real-time overview of quality checks within the system that require attention. It is an essential tool for quality control, highlighting checks in various states and facilitating immediate action.

![Active Checks](/img/quality-checks-active-checks.png)

### Numeric Indicators
Displays the current state of all quality checks in the system. Shows the total counts of checks that are overdue, coming due, submitted, rejected, or missed.

### Manual Check Addition
Allows users to manually add a check, opening a manual check pop-up.

### Checks Table
Lists all quality checks needing attention.
**Filter**: Enables searching for specific checks within the system.<br />
For each quality check, the table shows:
  - Name of the check
  - Current status
  - Minutes remaining in the status
  - Associated items and assets
  - Scheduled time and trigger for the test
Double-click on any test in the list to open and start completing that test.
