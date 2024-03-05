---
id: production-orders1
title: Production Orders
sidebar_position: 1
hide_table_of_contents: true
---

# Production Orders in Kanoa Ops

## Overview

The Kanoa Ops Production Orders Screen is a comprehensive interface for managing production orders. It allows users to view, create, and import production orders from ERP systems, providing a centralized platform for handling production workflows.

![Schedule Production Orders](/img/ops-scheduling-production-orders.png)

## Interface Components

### Date Filter
**Function**: Filters production orders based on their creation date.<br />
**Customization**: Users can manually edit start and end dates for custom date ranges.

### Filter and Options Section
**Show Filters Button**: Reveals toggles for viewing production orders based on their status (Scheduled, Released, Closed, In Progress, On Hold, Completed).<br />
**All Filters Toggle**: Enables or disables all filters simultaneously.<br />
**Data Button**: Refreshes the data displayed in the table.<br />
**Clear Table Button**: Clears all data from the table.<br />
**Export Data Button**: Exports table data to a CSV file.<br />
**Query ERP Button**: Retrieves any ERP collection data present in the system.<br />
**Add Button**: Manually adds new production orders to the system.<br />
**Delete Button**: Deletes Production Orders from the system.<br />
**Edit Button**: Allows users to edit Production Order data.<br />
**Clear Selection Button**: Un-selects all selected data.<br />

### Production Order Table
**Content**: Displays each production order registered in the system.<br />
**Data Points**: Source (ERP or Kanoa MES), order number, product, required quantity, units, scheduled quantity, actual quantity, due date, status, associated assets, notes, and creation date.<br />
**Interaction**: Production orders can be selected for editing or more detailed viewing.<br />

### Editing and Creating Production Orders
**Edit Options**: Edit a production order by double-clicking on it or using the edit button.<br />
**New Order Creation**: Use the add button to input order details such as order number, item, mode, quantity, units, due date, status, and notes.

