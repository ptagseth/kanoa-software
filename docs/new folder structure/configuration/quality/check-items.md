---
id: check-items
title: Check Items
sidebar_position: 3
hide_table_of_contents: true
---
# Kanoa Quality Check Item Configuration

### Introduction
This guide outlines the process of configuring check items in Kanoa Quality. Check items are individual tests within a check sheet, and a check sheet is a collection of these items organized into groups.

![Configure Check Items](/img/quality-config-check-items.png)

### Accessing Check Item Configuration
1. Navigate to the Check Sheet Configuration Screen.
2. Access the 'Check' tab.
3. Use the 'Add Check' or 'Edit Check Item' button to open the Check Item Editor.

### Check Item Editor Overview
The Check Item Editor comprises several dynamic sections, changing based on the selected check type. The primary sections include:

#### General Section
- **Check Name**: Assign a name to the check.
- **Check Item ID**: A read-only field generated after completion.
- **Group/Tab Section**: Select from a dropdown list of defined check groups.
- **Enabled Checkbox**: Activate or deactivate the check.
- **Required Checkbox**: Make the check mandatory for completing the check sheet.
- **Check Type Dropdown**: Choose the type of field for data entry (Boolean, Float, Integer, String).

### Check Types and Configuration
Depending on the selected check type, different subsections will appear:

#### Check Type: Check
- **Data Properties**:
  - **Number of Measurements**: Set default measurements; enables variation analysis.
  - **Assign Attribute**: Assign an attribute to the check item.
  - **Units**: Define engineering units for data display.
  - **Format**: Enter a format string for data presentation.
- **Entry Options**:
  - **Entry Method Dropdown**: Select an entry method; options vary based on data type.
  - **Trigger Dropdown**: Choose a trigger from existing check sheet triggers.
  - **Pick List Options**: Edit, clear, or test pick list values.
- **Instructions**: Text field for detailed check instructions.

#### Check Type: Calculated
- **Data Properties**:
  - **Number of Measurements**: Define the number of measurements for the calculated check.
- **Calculator**:
  - **Select Calculation Dropdown**: Choose a mathematical formula (Average, Sum, Range, Min/Max, Standard Deviation, etc.).
  - **Select Calculation Dropdown - Eval**: Incorporates other check item data points into a formula, requiring a complete eval statement for functionality.
  - **Select Calculation Dropdown - Script**: Allows the setup of scripts called from the Ignition Designer for check item calculation.
  - **Formula Section**: Displays formula and previews results.
- **Instructions**: Enter instructions for operators.

#### Check Type: Trigger
- **Instructions**: A single section for entering text instructions related to the trigger.

### Saving and Closing
At the bottom of the Check Item Editor, there are two action buttons:
- **Close**: Exit without saving.
- **Save and Close**: Save changes and exit.

### Conclusion
This documentation is designed to guide users through the process of configuring check items in Kanoa Quality. By understanding the functionality of each section and the dynamic nature of the Check Item Editor, users can efficiently create and manage check items tailored to their specific requirements in the manufacturing and data analysis sectors. For further assistance or advanced usage, refer to the comprehensive Kanoa Quality documentation or contact support.

