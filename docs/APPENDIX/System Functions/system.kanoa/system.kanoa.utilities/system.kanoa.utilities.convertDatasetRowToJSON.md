---
id: convertDatasetRowToJSON
title: system.kanoa.utilities.convertDatasetRowToJSON
sidebar_position: 1
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';

<PurpleBox>This function is used in <b>Python Scripting</b></PurpleBox>


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

```