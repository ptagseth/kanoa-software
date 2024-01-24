---
id: attribute-detail-editor
title: Attribute Detail Editor
sidebar_position: 5
hide_table_of_contents: true
---
# Kanoa Quality Attribute Detail Editor Screen

## Introduction
This document provides detailed instructions for using the Kanoa Quality Attribute Detail Editor screen. This feature is essential for configuring and managing quality attributes within the Kanoa quality configuration system.

## Accessing the Detail Editor
1. **Navigate** to the Attribute Editors in the Kanoa Quality Configuration.
2. **Select** the attribute you wish to edit.
3. **Click** on "View Attribute Settings" to open the Attribute Detail Editor pop-up.

## Attribute Detail Editor Overview
The Detail Editor is divided into two main tabs: **Data Source** and **Tolerance**.

![Attribute Detail Editor](/img/quality-config-attribute-detail-editor1.png)

![Attribute Detail Editor](/img/quality-config-attribute-detail-editor2.png)

### Data Source Tab
- **Purpose**: To associate an attribute with a tag in the commission.
- **Initial View**: Displays a list of existing data connections and an option to add a new data source.
- **Actions**:
  - **Selecting a Data Source**: Reveals options to clear selection or delete the association.
  - **Viewing Configuration**: Selecting an existing data source shows its configuration settings.
  - **Asset Selection**: Click to open the Asset Selection pop-up.
  - **Tag Selection**: Click to open the Tag Selector pop-up for associating a commission tag.
  - **Additional Settings**:
    - Scale factor input field.
    - Checkbox to ignore zero values.
    - Checkbox to enable the association.

### Creating a New Data Source
- **Process**: Click the "Data Source" button for a blank setup.
- **Options**: Asset selection, tag association, scale factor, and checkboxes for ignoring zero values and enabling the connection.

### Tolerance Tab
- **Functionality**: Similar to the Data Source tab.
- **Initial View**: Options to add a tolerance and a list of existing tolerances.
- **Actions**:
  - **Selecting a Tolerance**: Options to clear selection or delete the association.
  - **Asset and Item Association**:
    - Asset field: Opens the Asset Selector pop-up.
    - Item field: Opens the Items pop-up for associating tolerance with a specific item or item set.
  - **Tolerance Values**:
    - Fields for Lower Limit (LEL), Lower Specification Limit (LSL), Lower Control Limit (LCL), Upper Control Limit (UCL), Upper Specification Limit (USL), and Upper Limit (UEL).
    - Input for target values, lower limits, and upper limits affecting Tolerance feedback.

## Conclusion
The Kanoa Quality Attribute Detail Editor is a comprehensive tool for managing data source and tolerance settings of quality attributes. It allows precise configuration to ensure accurate data analysis and quality control within the Kanoa platform.
