---
id: checkDetails
title: Check Details
sidebar_position: 2
hide_table_of_contents: true
---
The Check Details screen can be used to perform analysis on all check items values within a check sheet. 

![Check Details](/img/quality/checkDetails.png)

Select a Check Sheet using the ![Check Details](/img/quality/selectCheckSheetButton.png) button. You can filter the results for a specific asset and/or item and for a set date range.
You can show all check data in the table or filter by Check Group. The table view can be formatted to have check items displayed in the column or by row. This is a preference thing, Having check items displayed as a column works faster in large datasets
and provide a slew of analytical measures such as min, max, average, std. dev that are not displayed when the time stamp is displayed in the column. Each timestamp is an instance of when the checks
within a check sheet were performed.

The information shown in the table can be furthered extended by enabling the following checkboxes...
- Show Summary  - Display summary data (Sum, Avg, Min, Max, Range, Std Dev)
- Show Group - Display Group info
- Show Resources - Include resources as Item, Asset, Shift, etc.
- Show Status - Include Check Sheet status
- Show individual Measurements - Display individual measurements 

***
### ![Check Details](/img/quality/trendButton.png) Trend View

You can trend any check item by selecting it in the table and clicking the ![Check Details](/img/quality/trendButton.png).The Trend View allows users to analyze data over time through time series or histograms. It also provides the functionality to apply Statistical Process Control (SPC) rules against collected data, enhancing the understanding of trends and patterns.
The trend view can be viewed by selecting a data point and clicking the 'Trend View' button. Once in the trend view, the datapoint being trended can be changed by clicking on a different datapoint
in the table or using the tree selector to select a different datapoint.

![Trend View Time Series](/img/quality/spcChart.png)

#### Applying SPC Rules
Nelson and Western Electric SPC Rules can be applied to any trend and any rule violations are highlighted on the chart.

Users can export the trend data to a CSV file for further analysis

The charting can be switched between...
* **Time Series**: Displays a time series chart of the check sheet data, including calculated upper and lower control limits.
* **Histogram**: Shows a histogram of all collected data, with hover-over functionality for detailed counts in each bar.
* **Bar Chart**: Shows a Bar Chart of all collected data, with hover-over functionality for detailed counts in each bar.
* **Tabular**: displays the raw data in a table

![Trend View Histogram](/img/quality-analysis-trend-view2.png)