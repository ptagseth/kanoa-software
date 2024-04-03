---
id: order-management
title: Order Management
sidebar_position: 1
hide_table_of_contents: true
---
Whether you call them Production Orders, Manufacturing Orders, Work Orders or Batch Tickets, this screen provides you with the ability to view, create and edit
orders to build products on your assets. 
You can also view orders from your ERP when you connect the two systems together. This can all be done via web services or middleware tables. 

![Schedule Production Orders](/img/orders/orderManagement.png)
***
#### Filtering
Orders can be filtered based on due date and by their status. If an order does not have a due date set, it will be included regardless of the date range selected.
The state filter button toggles the state selector.

The **Show Actual** checkbox will show what has actually been produced against a production order whether the order was run once or across multiple runs on multiple assets.
Enabling this will slow down the query as it will look for all production runs against this production order.
***
#### Order States
We have provided the following the order states and these are considered 'reserved' in our system, but there is nothing stopping you from creating our own states.

* **Released**: 'Released' to production
* **Hold**: A hold has been placed on this order
* **In Progress**: There are active runs in progress on this order or this order has been partially completed. The first time a production run is started against an order, MES will change the state to 'In Progress'.
* **Completed**: This production order has been completed
* **Closed**: This production order has been closed

***

#### Adding & Editing Orders
Click the '+' button to add a new production order. 
To edit an existing order, select it in the table and click ![order-management](/img/components/editButton.png).

![Schedule Production Orders](/img/orders/orderEditor.png)

* **Order #**: Enter in a unique value for this order
* **Item**: Use the item selector to select the item (product) to be made
* **Qty**: The required amount to be produced
* **Units**: Ideally the units here will be the same as the units configured for this asset-item in the production rate configuration screen
* **Due Date**: Date this order needs to be completed by (optional)
* **Status**: The state of this Order, whether it has been released to production or is held. Whenever we see an operation start on this workorder, we will set the 
status to 'In Progress'.
* **Notes**: Any notes you want to share with the folks running this order.

To delete an order, select it in the table and click ![order-management](/img/components/deleteEvent.png).


