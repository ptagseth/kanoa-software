---
title: KPI Matrix
sidebar_position: 9
hide_table_of_contents: true
---

:::info
The KPI Matrix functionality is a tool to provide insight to production KPIs.  The user will have the ability to rapidly analyze the chosen KPIs from tag data.
:::

Users not logged in can view public matrices 

## Login
In upper right corner - click login icon.
Use your Koch ID and Password to log in to the application.


IMAGE - Upper right menu

### User Permissions
Once logged in, you can hover over the login icon and see your current roles.


IMAGE - User logged in with Permissions

### Logout
Click the logout icon next to the login icon to log out of the application.

### Roles & Permissions

**Division Admin**
The Division Admin can view all matrices, both public and private. They can create, edit and delete their own matrices.
The can delete any matrix, both public and private.

**Site Admin**
The Site Admin can view all public matrices as well as all their own.  They can view any private matrix within their own site. They can create, edit and delete their own matrices.  They can delete any matrix within their own site.

**User**
The User can view their own public and private matrices, and any other public matrix. They can create, edit and delete only their own matrices.

**Guest**
The Guest can only view public matrices.  They have no create, edit or delete permissions.


## Create / Edit a Matrix

### Matrix Editor
Open the left menu and click the Matrix Editor.  This will open a view to the Folder editor and the Matrix creator and editor.

IMAGE - with Folder Editor and Matrix editor - with descriptions

#### Folder Editor
Open the folder editor by clicking the add folder icon (+) above folder structure. 
In the folder editor - select folder to edit or the location of the new folder.  Click Add button to add a new folder.  
Enter info - set folder name, color, Roles if applicable. Click Save button.
Delete folders - select folder to delete, click Delete Icon.

Drag drop a matrix from one folder to another.  Select the matrix, hold the left mouse button until it is in the desired folder and then  release the mouse button.

IMAGE - Details of Folder Editor - explain fields, buttons and links

#### Create / Edit a Matrix
* Create a new Matrix - select a folder for the location of the Matrix.  Fill the matrix info - name, folder, icon and sort order.  Click the Enabled box to enable data to flow to the matrix so it can be viewed.  Save the Matrix using the Save icon in the top menu.

* Edit an existing Matrix - select the Matrix, change the info of the Matrix as needed (Name, Icon, Color, Sort Order). 

* Matrix Groups - Organize the Matrix data by setting up groups.  Minimum one group must be created.  Create a name for each group, set background color for group.

* Add data tags - Click the selector tree for data tags.  Each data tag selected will be added to the group.  Once done with selection - close the selector window with the Close button at the bottom.

* Delete data tags - Select a data tag and click the Delete icon in the left menu. Confirm.


## View a Matrix

### Matrix view

**Normal Use Case:**
    1. Select the Matrix
    2. Set the time period for data
    3. Set data interval (default 1 hr)
    4. Check choices for Ignore Zeros and Show Summary
    5. Set Row vs Column view
    6. Click Get Data - bring in data
    7. Select Data tag to inspect further
    8. Click Trend View

IMAGE - of Matrix view with button and icons explained

### Top Menu
* Matrix Selector - Select the Matrix.  Use the search function to search in folders.

* Data period - Select the time period for the data to be plotted - choices are today, yesterday, this week, last week, this month, etc.  Or set a custom time period.  Set the start date and time and end date and time.

* Data Interval - the data is aggregated in intervals of 1 hr, 30 mins, 15 mins

* Group by Shift or Run.  This is an optional field - it can be utilized to sort by a specific Shift or Run.

* Group by Matrix Group. This can be utilized if the Matrix data is organized by separate Matrix groups.

### Left Menu

**Clear table**
Click this icon to clear the displayed data.

**Export data**
Click the export button to export the data displayed in Excel format.

**Trend View**
Select a single data tag and plot the trend over a time period.
    • Time Series - Select the Time Series format to plot the data in a time series.  Use the Nelson and WECO rules to determine if the graph is unpredictable.
        ○ Nelson Rules are a method to determine if some measured variable is out of control (unpredictable vs consistent).
        Read more about the Nelson Rules here:  https://en.wikipedia.org/wiki/Nelson_rules
        ○ WECO Rules to detect out of control r non-random conditions in your control charts.
        Read more about the WECO (Western Electric) Rules here:  https://en.wikipedia.org/wiki/Western_Electric_rules
    • Bar Chart - Select the Bar format for the data to be displayed in bar chart.
    • Histogram - select a data tag to show the distribution of the data.  Select Min and Max values to limit outliers.
    • Table - Select the Table format for data in raw table format
    • Export data - click the export button to export the data in Excel format.

IMAGE - Trend View

**Tag history browser**
Browse the tag data history with the Tag History Browser. See available data, prior to any calculations or any other modifications.


### Tag History Browser

**Production View**
This is for multiple plots of aggregated data.  Display a data set for a desired time range.  Select multiple data sets (use CTRL button to select multiple sets) to compare and click the Production View icon.  Select the desired view. Or use the selection tree to pick the data sets to plot.
    • Time Series - select the Time Series format to plot the data in a time series.  Select the Separate plot box to separate the data series.
    • Bar Chart - Select the Bar format for the data to be displayed in bar chart for comparison.  Click the Separate Plot to separate the data series.
    • Table - Select the Table format for data in raw table format
    • Export data - click the export button to export the data in Excel format.



IMAGE - Product View with two plots


