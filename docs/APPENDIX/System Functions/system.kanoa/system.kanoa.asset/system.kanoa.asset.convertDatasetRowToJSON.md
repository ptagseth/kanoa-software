---
id: convertDatasetRowToJSON
title: system.kanoa.asset.convertDatasetRowToJSON
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Takes a dataset or pyDataset and converts the first row to JSON. If no rows are found, it creates JSON with null values. Expects a single row (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>convertDatasetRowToJSON(data, rowIndex)</b>
    <li> Parameters <br />
        <ul>data (dataset or pyDataset) - Dataset containing the rows.</ul>
        <ul>rowIndex (int) - Index of the row to convert.</ul>
    </li>
    <li> Returns <br />
        <ul>dataDict (dictionary).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
data_set = system.db.runQuery("SELECT * FROM myTable", "myDB")
json_data = convertDatasetRowToJSON(data_set, 0)
