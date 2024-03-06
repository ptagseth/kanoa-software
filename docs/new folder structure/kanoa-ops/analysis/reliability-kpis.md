---
id: reliability-kpis
title: Reliability KPI's
sidebar_position: 4
hide_table_of_contents: true
---

# Reliability KPIs Report in Kanoa Ops
## Overview
The Kanoa Ops Reliability KPIs Report is an extensive tool designed to offer in-depth insights into the reliability aspects of assets within an enterprise. It's structured with robust filtering options and divided into two primary tabs: Charts and KPIs, catering to both visual and numerical data analysis.

## Filters Section
### General Filters
**Data and Clear Data Buttons**: For running and resetting the report.<br />
**Asset Selector**: Choose specific assets, an area, or an entire plant for reporting. <br />
**Date Range Selector**: Predefined or custom date range selection using start and end date fields.<br />
**Asset Group Filter**: Filter assets within a selected group.

### Shortstop Field
Defines the threshold for what constitutes a shortstop in the report.

## Report Tabs
### Charts Tab
#### Legend and Line Toggle
Shows lines for each asset and toggle buttons to display associated data.

#### Asset Equalization Report
**Stacked Column Chart**: Displays time-in for each asset by mode.<br />
**Pie Chart**: Shows a distribution of time-in across all selected assets.

![Reliability KPIs Report](/img/ops-analytics-kpis1.png)


#### Lost Bucket Summary and Details
**Left Pane (Lost Bucket Summary)**: Categorizes downtime (e.g., breakdown, speed loss, quality loss) and displays total time spent in each category per asset.<br />
**Right Pane (Details)**: Offers a granular breakdown of reasons behind each downtime category in a stacked column format.

![Reliability KPIs Report](/img/ops-analytics-kpis2.png)


### KPIs Tab
Provides numeric data for integration into other reports, covering:
  - Production Data (Scheduled, Planned, and Actual Runtime)
  - Availability (Setups, Adjustments, Process Failures, Breakdowns)
  - Performance (Minor Stops, Speed Losses)
  - Quality (Quality Losses)

![Reliability KPIs Report](/img/ops-analytics-kpis3.png)


### Additional Features
**Data Export**: Almost every chart includes an export data button for downloading information in CSV format.<br />
**Data Table**: Underneath the reports, a table displays detailed information such as asset state, start date, duration, notes, and modification details.



