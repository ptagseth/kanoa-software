---
id: kanoa-ops
title: Operations Management
sidebar_position: 1
hide_table_of_contents: true
---

Understand how your plant is performing and where to focus continuous improvement efforts. 
Kanoa Ops includes everything required for the day-to-day organization and operation of a manufacturing site and tracks performance, OEE, and downtime to provide production insights and analytics.

### How It Works

#### Configure Your Assets
For Kanoa Ops to provide valuable insights for your plant, it is important to define your unique assets, products, and processes.
Kanoa Ops allows you to define your enterprises...

* [Assets](configuration/assets), organized based on the ISA-95 Equipment Model
* [Products and materials](configuration/materials), including baseline parameters for each
* Asset [modes](configuration/modes) and [states](configuration/states)
* [Shift schedules](configuration/shifts)

* Plant configuration is done entirely in-app, so qualified users with the proper permissions can make changes without extensive training or software expertise.

![kanoa-ops](/img/asset-config/asset-table-config.png)

Click here to go to the [Asset Configuration section](configuration/assets)

***
#### Connect Data
Kanoa Ops supports a variety of data connectivity options, making an extensible system that can grow to collect more data from more systems as adoption increases and requirements evolve.
Machine Performance and OEE data can be collected via PLCs and automation equipment through Ignition's built-in OPC server or Industry 4.0 protocols like MQTT.
Web APIs allow Kanoa Ops to access business systems like ERP to automatically download material specifications and production schedules.
When automatic data collection is not an option, Kanoa Ops provides manual entry solutions so that every single asset can be accounted for.

***
#### Manage Production Orders
Whether you call them work orders, production orders or batch tickets, our order management system allows you to create orders that can be scheduled or exceuted and then tracked.
Orders can be created in the MES or pulled directly from your ERP or both.

![kanoa-ops](/img/orders/orderManagement.png) 

Click here to go to the [Order Management section](kanoa-ops/order-management)
***
#### Schedule Work
Leverage Kanoa Ops and Ignition's Web Services modules to connect to Enterprise Resource Planning (ERP) systems for material scheduling data.
Tie Kanoa Ops scheduling directly into ERP scheduling for a seamless integration; or pull work orders from ERP and do Detailed Operational Scheduling at the plant-level.
Kanoa Ops also provides an interface for managing shift and crew schedules for additional data context. Kanoa Ops supports complex shift rotation patterns to reduce the manual work required to keep the system up-to-date.

![kanoa-ops](/img/schedule/schedule.png) 

Click here to go to the [Operations Scheduling section](kanoa-ops/schedule-operations)
***
#### Operator Station
We've provided a ready built Operator Station screen where your operators can select orders, view the schedule, execute operations and update production counts or code downtime events. 
And it's entirely customizable!

![kanoa-ops](/img/asset-operation/asset-ops-run-control.png) 

Click here to go to the [Operator Station section](kanoa-ops/asset-operation)
***