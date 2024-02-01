---
id: asset-operation
title: Asset Operation
sidebar_position: 1
hide_table_of_contents: true
---

# Asset Operation in Kanoa Ops

## Overview
The Kanoa Ops Asset Operation Screen serves as a comprehensive interface for operators, providing tools necessary for day-to-day operations and control of OEE (Overall Equipment Effectiveness) enabled assets. This screen is divided into three main sections: the Asset Selector, the Asset Status and Navigation, and the Detail View.

### 1. Asset Selector (Top Section)
- **Functionality:** Allows operators to confirm or change the current asset.
- **Error Handling:** If a non-OEE enabled asset is selected, an error message prompts the user to choose an OEE-enabled asset.

### 2. Asset Status and Navigation (Left Section)
- **Content:**
  - **Asset Name:** Displays the name of the current asset.
  - **Asset Status:** Shows the current mode, who set the mode, the production order, and the current product being run.
  - **State Indicator:** Indicates the current state of the equipment, duration in this state, and color coding based on configuration settings.
  - **Control Buttons:** Located at the bottom, these buttons change the content displayed in the Detail View.

### 3. Detail View (Right Section)
This section changes based on the selected control button in the Asset Status and Navigation area. It includes four subsections:

#### a. Run Control
- **Purpose:** To start and stop orders and change modes on the line.
- **Functionality:**
  - **Buttons:** Two buttons to end an active run or start a new run (enabled/disabled based on line state).
  - **Tabs:** For scheduled work order, product, and mode. Select a tab and action, then click "Start Run" for a new run.

![Asset Operation](/img/asset-ops-run-control.png)

#### b. Run Monitor
- **Function:** Provides real-time feedback on performance.
- **Features:**
  - **Tabs:** For OEE, availability, performance, quality, and throughput.
  - **Reports:** Include time filters, auto-refresh options, and start/end times.

![Asset Operation](/img/asset-ops-run-monitor.png)

#### c. Manual Entry
- **Default Tabs:** Downtime and States, Run Review.
- **Functionality:** Allows editing of downtime events and reviewing past production runs.
- **Customization:** Additional tabs for manual entry may be added depending on implementation.

![Asset Operation](/img/asset-ops-manual-entry.png)

#### d. Schedule View
- **Display:** Shows a calendar with the current week's schedule for the selected asset.

![Asset Operation](/img/asset-ops-schedule.png)

