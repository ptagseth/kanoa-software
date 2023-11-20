---
id: convertDatasetRowToJSON
title: system.kanoa.utilities.convertDatasetRowToJSON
sidebar_position: 1
hide_table_of_contents: true
---

:::info
This function requires KanoaCore module
:::

### Description
Takes a dataset or pyDataset and converts the first row to json. If no rows are found, it creates json will null for values. 

### Syntax
**convertDatasetRowToJSON(data, rowindex)**

- **Parameters**  
    data: PyObject - dataset or PyDataset

    rowIndex: PyObject - index of the row to be converted to JSON

- **Returns**  
    Dictionary, with the data's column names as keys, and the row's values as values


### Code Examples

```py
# This returns the first line of JSON list of the data entered in col1 and col2

data = system.dataset.toDataSet(["col1","col2"], [[1,2]])
system.kanoa.utilities.convertDatasetRowToJSON(data, 0)
```