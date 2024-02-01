---
id: run-review
title: Run Review
sidebar_position: 3
hide_table_of_contents: true
---

# Run Review in Kanoa Ops

## Overview

The Run Review screen is a comprehensive tool designed for analyzing production runs in a detailed and customizable manner. It is structured into three key sections: a filter bar, action buttons, and the main content table. This documentation provides an overview of each section and their functionalities.

![Run Review](/img/ops-operations-run-review.png)

## Screen Layout

1. **Filter Bar**: Located at the top of the screen, it allows users to refine the data displayed based on specific criteria.
2. **Action Buttons**: Positioned on the left side, these buttons offer various functionalities to interact with the run data.
3. **Run Review Content Table**: The central part of the screen displaying detailed information about each run.

## Filter Bar

### Asset Filter
- **Functionality**: Filter runs by selecting OEE-enabled assets from your asset hierarchy.
- **Access**: Click the 'Filter Assets' button.

### Date Range Filter
- Allows users to specify a start and end date to focus on a particular time period.

### Select Mode Dropdown
- Offers the ability to filter runs based on specific operational modes.

### By Shift Toggle Button
- Enables breaking down a single run or work order into multiple shifts, providing separate entries for different shifts in the same work order.

## Action Buttons

### Data Refresh Button
- Refreshes the run review data based on the current asset and timeframe selected.

### Clear Table Button
- Removes all data from the run review table.

### Clear Selection Button
- Clears any selected run for quick deselection.

### View Details Button
- Opens the production details screen for the selected run (covered in separate documentation).

### Export Button
- Exports the data from the run review table to a CSV file.

## Run Review Content Table

### Content Overview
- The table displays detailed information for each run, including:
  - Current mode
  - Shift (if the By Shift toggle is enabled)
  - Work order
  - Item
  - Infeed, outfeed, and waste counts
  - Start and end times
  - Total runtime and duration
  - Total downtime and unplanned downtime
  - Infeed rate, target rate, and OEE values

### Interactivity
- Users can apply a text filter directly within the table for more specific searches.
- The 'Details' button next to each run entry allows for editing of counts or downtime (as detailed in separate documentation).

## Summary

The Run Review screen in the application is an essential tool for detailed analysis and management of production runs. Its comprehensive filtering options, action buttons, and detailed content table make it an invaluable resource for monitoring and optimizing manufacturing processes.
