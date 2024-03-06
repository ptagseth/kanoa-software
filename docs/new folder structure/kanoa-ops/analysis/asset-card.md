---
id: asset-card1
title: Asset Card
sidebar_position: 7
hide_table_of_contents: true
---

# Asset Card in Kanoa Ops

## Overview

Kanoa Asset Cards are designed to concisely summarize critical information about an OEE-enabled asset, presenting it in a user-friendly manner. These cards are comprised of four main components: the Title and Action Section, and three content areas - Mode & State Section, Production Order Section, and OEE Section.

![Asset Card](/img/ops-analytics-asset-card.png)

## Components of the Asset Card

### Title and Action Section
Four buttons on the right side for direct navigation to:
  - Line Operation Screen
  - Analytics Screen
  - Schedule for the Asset
  - Reporting Page for detailed reports

### Mode & State Section
**Current Mode and State**: Shows the real-time mode and state of the line.<br />
**Time Ratio Bar**: Illustrates the ratio of time running to unplanned downtime and planned downtime.<br />
**Runtime and Downtime**: Displays the runtime and total downtime for the current production order.

### Production Order Section
**Order Designation**: Indicates the current production order and the included product.<br />
**Production Count Bar**: Shows the current production count relative to the target count.<br />
**Total Units and Remaining Units**: Number of units produced and units remaining in the current order.<br />
**Target and Actual Production Rates**: Displays both target and actual rates per the production order.<br />
**Production Order Indicators**: Alerts if overproduction or under the target rate occurs, or if production is on track.

### OEE Section
**OEE Score**: Displays the Overall Equipment Effectiveness score for the asset.<br />
**Availability, Performance, and Quality Metrics**: Shows these metrics for the current production order.<br />
**12-hour OEE Bar Graph**: A bar graph depicting the last 12 hours of OEE values with tooltips on hover showing exact values and timestamps.


