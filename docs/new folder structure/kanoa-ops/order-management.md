---
id: order-management
title: Order Management
sidebar_position: 1
hide_table_of_contents: true
---
Whether you call them Production Orders, Manufacturing Orders, Work Orders or Batch Tickets, this screen provides you with the ability to view, create and edit
orders to build porducts on your assets. You can also see orders generated by your ERP if you connected ERP to MES. This can all be done with a couple of lines of code
via web services or middleware tables.

![Schedule Production Orders](/img/orders/orderManagement.png)
***
### Filters
* **Date Range Selector**: Select from our pre-defined list of time periods such as 'Today', 'Yesterday', 'Last Week', 'This Month', 'Last Month', 'Year To Date'
* **Show actual**: When enabled, the query will look through all production runs to see exactly how much has been produced against an order.
***
### Actions
* **Show Filters Button**: Reveals toggles for viewing production orders based on their status (Scheduled, Released, Closed, In Progress, On Hold, Completed).<br />
* **Export Data Button**: Exports table data to a CSV file.<br />
* **Query ERP Button**: Retrieves any ERP collection data present in the system.<br />
* **Add Order**: Adds a new production order<br />
**Delete Order**: Deletes the selected production order<br />
**Edit Order**: Edit the selected production order<br />
***
### Order Editor
The Order Editor can be used to add or edit an order.

![Schedule Production Orders](/img/orders/orderEditor.png)

* **Order #**: Enter in a unique value for this order
* **Item**: Use the item selecotr to select the item to be made for this order
* **Qty**: The required amount to be produced
* **Units**: Ideally the units here will be the same as the units configured for this asset-item in the production rate configuration screen
* **Due Date**: Date this order needs to be completed by
* **Status**: The state of this Order, whether it has been released to production or is held. Whenever we see an operation start on this workorder, we will set the 
status to 'In Progress'.
* **Notes**: Any notes you want to share with the folks running this order.