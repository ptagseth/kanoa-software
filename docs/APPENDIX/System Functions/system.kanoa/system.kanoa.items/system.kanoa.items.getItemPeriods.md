---
id: getItemPeriods
title: system.kanoa.items.getItemPeriods
sidebar_position: 7
---

:::info
This function requires KanoaCore module
:::


### Description
Returns an item period 

### Syntax
**getItemPeriods(paramsDict: PyDictionary)**

- **Parameters**  
    paramsDict: PyDictionary - (Dictionary) i.e. {'enabled':True, 'itemPeriodId': 2, 'itemPeriodName': 'Minute'} 


- **Returns**  
    (PyDataset) row corresponding to searched item period


### Code Examples

```py
# This returns the time period info for time period item named 'Hour' and enabled

paramsDict = {'enabled': True, 'itemPeriodName': 'Hour'}
system.kanoa.items.getItemPeriods(paramsDict)

```