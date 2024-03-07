---
id: check-sheets
title: Check Sheets
sidebar_position: 2
hide_table_of_contents: true
---
# Kanoa Quality Check Sheet Configuration

### Introduction
This documentation provides a step-by-step guide on configuring a check sheet in Kanoa Quality through the Check Sheet Configuration Screen.

![Configure Check Sheets](/img/quality-config-check-sheets.png)

### Accessing the Configuration Screen
1. Navigate to the Configuration section.
2. Select ‘Quality Check Sheets’.
3. Choose an existing check sheet or create a new one.

### Configuration Screen Overview
**Close Button**: Located at the top, used to exit the editor.<br />
**Edit Mode Toggle**: Switch between 'Edit' and 'View Only' modes.<br />
**Name Field**: Mandatory field for the check sheet's name.<br />
**Estimated Minutes Field**: Enter the expected duration of the test.

### Test Configuration Sections
The test configuration is divided into four main sections: Info, Settings, Checks, and Triggers.

#### Info Section
**Description**: Add a description for the test.<br />
**Procedure Name**: Type in a procedure name.<br />
**Instructions**: Add detailed instructions.<br />
**PDF Attachments**: Attach PDF files via Ignition Designer.

#### Settings Section
Consists of several subsections:

1. **General**
   - **Enabled Checkbox**: Activate the test.
   - **Sign Off Required Checkbox**: Require a sign off for approval.
   - **Auto Collect Tag Data Checkbox**: Automatically capture check items when scheduled.

2. **Folder**
   - **Check Sheet Type Button**: Sort and save the check sheet in a specific folder.

3. **Assets**
   - **Asset Requirement Checkbox**: Toggle whether an asset is required.
   - **Asset Selection Button**: Choose valid assets for the test.

4. **Items**
   - **Item Requirement Checkbox**: Determine if items are necessary for the test.
   - **Item Selection Button and Dropdown**: Select specific item sets.

5. **Test Fail Actions**
   - **Issue Check Sheets Dropdown**: Choose a check sheet to issue upon test failure.
   - **Notifications Dropdown**: Select a team for email notifications on test failure.

6. **Advanced Options**
   - **Sync Date Option**: Use only under Kanoa support technician guidance.

#### Checks Section
**Group Editor**: Manage tags/pages for checks. Options to add, edit, delete, and move groups.<br />
**Check Items**: Edit check items. Options to add, edit, duplicate, or delete checks.

#### Triggers Section
**Existing Triggers List**: View configured triggers.<br />
**Add Trigger Button**: Choose trigger types: Manual, Product Change, Retest, Shift Change, Time Interval.<br />
**Trigger Configuration**: Select shift, mode, enable trigger, and set threshold numeric entries (Delayed Minutes, Over Minutes, Grace Minutes).

### Completion and Saving
- Ensure all necessary information is entered.
- Saved checks and triggers will be listed.

### Note
- Detailed instructions for updating check items are covered in separate documentation.

