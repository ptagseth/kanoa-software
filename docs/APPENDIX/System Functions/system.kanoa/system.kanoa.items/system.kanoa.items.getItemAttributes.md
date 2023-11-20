---
id: getItemAttributes
title: system.kanoa.items.getItemAttributes
sidebar_position: 3
---

:::info
This function requires KanoaCore module
:::


### Description
Returns an item's attributes 

### Syntax
**getItemAttributes(itemId: PyObject)**

- **Parameters**  
    itemId: PyObject - (int) id of item 


- **Returns**  
    (PyDataset) row of item's attributes 


### Code Examples

```py

# This returns the rows of attributes with itemID 54 

system.kanoa.items.getItemAttributes(54)

```