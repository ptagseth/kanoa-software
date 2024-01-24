---
id: production-order1
title: Production Order
sidebar_position: 5
hide_table_of_contents: true 
---

# Understanding the Concept of Production Orders in Kanoa Ops

## Overview

In Kanoa Ops, Production Orders are essential elements in manufacturing processes, representing instructions or requests to execute a production run. Though known by various names in different manufacturing environments (such as work orders or batch tickets), in Kanoa Ops, they are referred to as Production Orders. These orders typically originate from customer requests or external systems and are crucial for scheduling and executing production to fulfill specific requirements.

## Key Attributes of a Production Order

1. **Source**: Indicates whether the order came from an external source (like an ERP system) or was generated internally within the Kanoa MES.
2. **Order Number**: A unique identifier for each production order.
3. **Product Association**: Specifies the product involved in the order.
4. **Mode**: Usually set to 'production', indicating the type of operation.
5. **Required Quantity and Units**: The total quantity requested in the order.
6. **Scheduled Quantity**: The amount scheduled to be produced in the specific order.
7. **Actual Quantity**: The quantity that has been actually produced against the order.
8. **Due Date**: The deadline for order completion.
9. **Status**: Includes various stages like scheduled, released, closed, in progress, on hold, or completed.
10. **Asset Association**: Links the order to specific assets.
11. **Notes**: Additional information or instructions related to the order.

## Integration and Execution

### ERP System Integration
- Production orders can be imported from ERP systems or defined within Kanoa Ops.

### Scheduling and Execution
- Production orders are scheduled on lines using the Operations Scheduler.
- Orders can be executed on demand via the Line Operation Screen, where they can be pulled up from the schedule or run immediately.

## Importance in Manufacturing

Production Orders in Kanoa Ops serve as:
- Direct responses to customer orders requiring specific production runs.
- Tools for organizing and managing the manufacturing workflow.
- Means to track and report actual production metrics against customer requirements.
- Critical components for calculating OEE, infeed, outfeed, and other production-related data.

## Conclusion

Production Orders are a vital part of the Kanoa Ops system, especially for entities engaged in scheduling work. They represent customer orders that necessitate specific production runs with defined quantities and deadlines. As a scheduling and tracking tool, Production Orders in Kanoa Ops play a pivotal role in ensuring efficient, timely, and customer-focused manufacturing operations.
