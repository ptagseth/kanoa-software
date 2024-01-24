---
id: downtime1
title: Downtime
sidebar_position: 1
hide_table_of_contents: true
---

# Downtime Report

## Overview

The Kanoa Ops Downtime Report is a comprehensive tool designed to analyze and report on asset downtime. This report is essential for identifying patterns, reasons, and durations of downtime across selected assets. It is divided into two main sections: Filters and Report Content.

## Filters Section

### Asset Filter
- **Function**: Selects the asset to report on.
- **Access**: Opens the asset selector pop-up to choose the desired asset. 

### Time Settings
- **Date Range Dropdown**: Allows selection of predefined date ranges for the report.
- **Start and End Date Selectors**: Enables setting a custom date range.

### Custom Filters
- **Duration Filter**: Filters out downtimes shorter than a specified duration (in minutes).
- **Top Downtime Filter**: Limits the report to show the top 'N' distinct downtime states or reasons.

### Report Generation Buttons
- **Run Report**: Collects and displays data based on the set filters.
- **Clear Button**: Resets all filters to their default settings.

## Report Content Section

### Charts
1. **Downtime Minutes by Asset Category**
   - Column chart showing downtime minutes categorized by asset.
   - Includes a red line indicating the percentage of overall downtime for each category.

2. **Downtime by Asset Reason**
   - Column chart detailing downtime by individual reasons.

3. **Downtime by Category, Reason Code, and Shift**
   - Displays downtime minutes grouped by category, reason code, and shift.

4. **Stacked Column Chart**
   - Represents total downtime over the selected time span.
   - Stacked downtime events to show reason codes behind each downtime instance.

### Downtime Table
- Detailed table of all downtimes contributing to the report.
- Includes filters for on-the-fly examination.
- **Data Columns**: Line, state ID, category, state type, code, start and end time, total duration (seconds), notes, and last modified details.
- **Export Function**: Exports the table data to a CSV file.
