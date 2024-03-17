---
id: downtime1
title: Downtime
sidebar_position: 1
hide_table_of_contents: true
---

# Downtime

A ready made downtime analysis page is provided as part of the standard Kanoa OPS project. As with every other part of the kanoaMES application, this page can be copied and entirely customized
to suit your specific needs.
There are many ways to look at downtime. We have provided charts to display the downtime analysis is broken

## Filters Section

![Downtime Report](/img/filterbar.png)

### Asset Filter
Opens the asset selector pop-up to choose the desired asset. 

### Time Settings
**Date Range Dropdown**: Allows selection of predefined date ranges for the report.<br />
**Start and End Date Selectors**: Enables setting a custom date range.

### Custom Filters
**Duration Filter**: Filters out downtimes shorter than a specified duration (in minutes).<br />
**Top Downtime Filter**: Limits the report to show the top 'N' distinct downtime states or reasons.

### Report Generation Buttons
**Run Report**: Collects and displays data based on the set filters.<br />
**Clear Button**: Resets all filters to their default settings.

## Report Content Section
### Charts
**Downtime Minutes by Asset Category**
   - Column chart showing downtime minutes categorized by asset.
   - Includes a red line indicating the percentage of overall downtime for each category.

**Downtime by Asset Reason**
   - Column chart detailing downtime by individual reasons.

![Downtime Report](/img/ops-analytics-downtime1.png)

**Downtime by Category, Reason Code, and Shift**
   - Displays downtime minutes grouped by category, reason code, and shift.

**Stacked Column Chart**
   - Represents total downtime over the selected time span.
   - Stacked downtime events to show reason codes behind each downtime instance.

### Downtime Table
- Detailed table of all downtimes contributing to the report.
- Includes filters for on-the-fly examination.
- **Data Columns**: Line, state ID, category, state type, code, start and end time, total duration (seconds), notes, and last modified details.
- **Export Function**: Exports the table data to a CSV file.

![Downtime Report](/img/ops-analytics-downtime2.png)

