---
id: convertDatasetRowToJSON
title: system.kanoa.utilities.convertDatasetRowToJSON
sidebar_position: 1
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Takes a dataset or pyDataset and converts the first row to json. If no rows are found, it creates json will null for values. </HeaderBox>

<HeaderBox header="Syntax">
    <b>convertDatasetRowToJSON(data, rowindex)</b>
    <li> Parameters <br />
        <ul> data: PyObject - dataset or PyDataset </ul>
        <ul> rowIndex: PyObject - index of the row to be converted to JSON </ul>
    </li>
    <li> Returns <br />
        <ul> Dictionary, with the data's column names as keys, and the row's values as values </ul>
    </li>
</HeaderBox>

### Code Examples

```py
# This returns the first line of JSON list of the data entered in col1 and col2

data = system.dataset.toDataSet(["col1","col2"], [[1,2]])
system.kanoa.utilities.convertDatasetRowToJSON(data, 0)
```