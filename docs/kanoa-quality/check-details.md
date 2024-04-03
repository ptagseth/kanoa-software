---
id: check-details
title: Check Details
sidebar_position: 2
hide_table_of_contents: true
---
The Check Details screen can be used to performa analysis on check items values within a check sheet. 
Individual and aggregated values a check sheet items offer a comprehensive view of the checks themselves.

![Check Details](/img/quality/qualityDetail.png)

### Screen Layout and Functionalities

#### Filter Section
**Select Check Sheets**: Opens a pop-up to choose the specific check sheet(s) for the report.<br />
**Filter Assets**: Activates an asset filter pop-up to display check sheets related to a chosen asset.<br />
**Filter Items**: Opens an item filter pop-up to limit the report to checks pertaining to a specific item.<br />
**Date Range Selection**: Includes a dropdown and fields for custom start and end dates.<br />
**Select Group Dropdown**: Allows filtering data from a specific tab or check group in the check sheet.

#### Action Panel
**View/Column View Button**: Switches the data display orientation based on user preference.<br />
**Clear Table Button**: Clears data from the main content area.<br />
**Export Button**: Downloads all report data to a CSV file.<br />
**Trend View Button**: Activates a trend view for selected data columns (covered in a separate video).

#### Main Content Area
**Data Display**: Shows all data across selected checks that meet the filter criteria.<br />
**Summary Data Options**: Includes buttons to show summarized values (average, sum, max, range, standard deviation).<br />
**Additional Data Display**: Options to show group names, resources (shift, item, asset), and check status (approved/rejected).<br />
**Text Filter Field**: Allows filtering of the table based on text input.

### Navigating the Report

- Use the top filter section to define the scope of the report, including check sheets, assets, items, date ranges, and specific groups.
- The action panel provides tools for customizing the view and exporting data.
- The main content area is where the aggregated data is displayed, with various options to tailor the data presentation.


### Trend View

The Trend View allows users to analyze data over time through time series or histograms. It also provides the functionality to apply Statistical Process Control (SPC) rules against collected data, enhancing the understanding of trends and patterns.

### Accessing Trend View
Users can access the Trend View by:
- Opening the Check Details screen.
- Running a report on a specific check.
- Selecting the data points they wish to trend.
- Clicking the 'Trend View' button in the action panel.

### Key Features of the Trend View

#### Data Item Selection
Located in the upper left, this option lets users switch between different data points from the opened check sheet.

#### Export Functionality
Users can export the trend data to a CSV file for further analysis or record-keeping.

#### Reporting Modes
**Time Series**: Displays a time series chart of the check sheet data, including calculated upper and lower control limits.<br />
**Histogram**: Shows a histogram of all collected data, with hover-over functionality for detailed counts in each bar.

![Trend View Time Series](/img/quality-analysis-trend-view1.png)

![Trend View Histogram](/img/quality-analysis-trend-view2.png)

#### SPC Rules Application
**Rule Sets Selection**: Users can choose from sets like Nelson, Western Electric, or custom rules.<br />
**Rule Violations Highlighting**: Once rules are applied, any violations are highlighted on the chart.<br />
**Rule Violations Navigation**: Buttons are available to navigate and change the rule violations displayed.

#### Chart Customization
**Y-Axis Scaling**: Adjusts the scaling of the Y-axis on the time series chart.<br />
**Statistical Information**: The histogram mode displays statistical information such as standard deviation, mean, and range.

### Navigating the Trend View
1. Begin by selecting the data item you wish to analyze.
2. Choose between time series or histogram modes based on your analysis needs.
3. Apply SPC rules to identify patterns or anomalies in the data.
4. Utilize the export function to analyze data outside the Kanoa system.

