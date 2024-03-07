---
id: states
title: States
sidebar_position: 3
hide_table_of_contents: true
---

# Kanoa Ops State Configuration

## Overview

The State Configuration screen in Kanoa Ops is a crucial interface for managing asset states within the application. This document will guide you through the process of configuring asset states, including adding, editing, deleting, and attaching states to assets.

### Screen Layout
The State Configuration screen is divided into three main sections:<br />
**Asset Tree**: Located on the left side of the screen, it displays a hierarchical view of all assets.<br />
**Action Buttons**: Situated in the middle, these buttons are used for various actions like adding, editing, and deleting states.<br />
**Master State List**: This is the main content area on the right, showing a comprehensive list of all states.

![State Configuration](/img/ops-config-state.png)

### Master State List
Kanoa Ops maintains a master state list similar to modes. This list is used throughout the application and can be assigned to individual assets as needed.

## Managing States
### Adding a New State
1. **Access**: Click the 'Add' button in the action buttons area.
2. **Required Information**: Enter the State Name, State Type, Category, Asset Group, and whether the state is Enabled or not.
   - **State Type**: Must be one of the following - Planned Downtime, Running, or Unplanned Downtime.
   - **Category**: Can be adjusted based on specific operational needs.
   - **Asset Group Association**: Optionally assign the state ID to a particular asset group.
   - **Enabled**: Toggle this to make the state available for use in the application.

### Editing an Existing State
1. **Selection**: Choose the desired state from the Master State List.
2. **Edit**: Click the 'Edit' button.
3. **Update**: Modify any necessary fields and click 'Save'.

### Deleting a State
1. **Selection**: Choose the state you wish to delete from the list.
2. **Delete**: Click the 'Delete' button.

## Attaching States to Assets
1. **Linking**: Click on the state and the asset you want to link.
2. **Asset State Links**: A field of asset state links will appear at the bottom of the screen.
3. **PLC Code Designation**: Add a PLC code designation for the link. This code is vital as it is linked to the state tag in your OEE UDT, indicating the machine's state at the time.

### Bulk Operations
**Multiple Selections**: You can select multiple assets or states to link many elements simultaneously. Use the shift key to select multiple states or assets and link them in one action.

## Summary
The State Configuration screen in Kanoa Ops is designed for comprehensive management of asset states, ensuring efficient and organized control over your operational workflow. This guide should assist you in effectively utilizing the screen for your asset management needs.
