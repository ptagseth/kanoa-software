---
id: item-sets
title: Item Sets
sidebar_position: 3
hide_table_of_contents: true
---
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

Item sets allow the user to logically group items together outside their item class. By grouping items into item sets, you can associate check sheets and tolerance specifications with multiple items at once. Item Sets and associated specifications can be configured in **Quality > Configuration > Item Sets**.

The Item Sets view displays a table of all items, which can be filtered by item class or item set.
![Item Sets](/img/product-sets-1.png)

### Configuring Item Sets

To add, edit or delete item sets, click the <EditIcon fontSize="small" /> **Edit Item Sets** button. This opens the Item Set Editor popup. 
* **Add Item Set**: Click the <AddIcon fontSize="small" /> **Add Item Set** button to create a new item set. Double-click the empty Item Set and Description fields to add a name and description. Check the Enabled checkbox to make the item set visible.  
* **Edit Item Set**: Select the item set you wish to edit. Double-click and make changes to the fields you want to edit. Click the save button.  
* **Delete Item Set**: Select the item set you wish to delete. Click the **Delete Item Set** button. Click the OK button in the deletion confirmation popup.


### Associating Items to an Item Set

You can select one or more items using the CTRL key. The **Item Set Linker** is located above the table and visible when you have items selected. Use the dropdown to select the Item Set you wish the items to be grouped in and click the **Link** button. The **Unlink** button is located to the left of the table and clears the item set associated with any selected items.
![Item Sets](/img/product-sets-2.png)

:::note
An item can only belong to one item set
:::
