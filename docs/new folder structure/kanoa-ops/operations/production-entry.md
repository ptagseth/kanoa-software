---
id: production-entry
title: Production Entry
sidebar_position: 3
hide_table_of_contents: true
---

# Production Entry in Kanoa Ops

## Overview

The Production Entry screen in the application is designed to allow users to edit data captured during a production run. This screen is critical for ensuring the accuracy and reliability of production data. It is divided into two main sections: Counts and Downtime, each offering specific functionalities for managing production run data.

## Screen Layout

1. **Counts Tab**: Focused on editing feed, outfeed, and waste counts.
2. **Downtime Tab**: Dedicated to managing downtime events recorded during a production run.

## Counts Tab

### Key Features
- **Date and Time Information**: Displays the dates and times when the feed, outfeed, and waste counts were recorded.
- **Editable Counts**: Allows operators to edit the infeed, outfeed, and waste counts along with their respective units.
- **Calculated Counts**: A calculator icon indicates when a count (infeed, outfeed, or waste) has been calculated based on the other two counts.
- **Editing Counts**: 
  - Select the count to be edited.
  - Use the 'Clear Discount' button to reset and auto-calculate the count based on other data collected.
  - Directly enter the new count and hit 'Save' to update the field.

![Production Entry](/img/ops-operations-production-entry1.png)

## Downtime Tab

### Layout
- **Action Bar**: Located on the left, used for editing downtime events.
- **Downtime Table**: Central table displaying detailed downtime information.
- **Filters**: At the bottom of the screen, for sorting and displaying downtime events.

### Functionality
- **Filters**: Options to show all downtimes, uncoded downtimes, or coded downtimes only. Includes a duration filter.
- **Downtime Information**: 
  - Unique identifier of the downtime.
  - Associated asset.
  - State and type of downtime.
  - Category, starting and ending time, and total duration.
  - Notes added to the downtime.
  - Checkbox indicating if the downtime has been manually updated.
- **Editing Downtime**: 
  - Select a downtime event.
  - Click the 'Edit' button to modify the associated asset, state, type, and add comments.
  - Updated downtimes are marked with a checkbox.

![Production Entry](/img/ops-operations-production-entry2.png)

### Additional Actions
- **Splitting Downtime**: Allows splitting a single downtime event into multiple events. You can specify the duration for the split and re-code as necessary.
- **Delete Button**: Removes recorded downtime events.
- **Revert Changes**: Reverts any modifications made to the downtime data.

## Summary

The Production Entry screen is an essential tool for operators to accurately manage and revise production run data. The functionality to edit counts and downtime ensures that the production data reflects the actual performance and events on the production floor. This screen is instrumental in maintaining the integrity of production data, which is crucial for effective operational analysis and decision-making.

