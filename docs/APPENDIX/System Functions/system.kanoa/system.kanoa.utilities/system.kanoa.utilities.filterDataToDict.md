---
id: filterDataToDict
title: system.kanoa.utilities.filterDataToDict
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Given a dataset, this function returns a dictionary of key-value pairs using the specified key and value columns (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>filterDataToDict(data, keyCol, valueCol)</b>
    <li>Parameters <br />
        <ul>data (Dataset) - The input dataset.</ul>
        <ul>keyCol (String) - The name of the column to be used as the dictionary key.</ul>
        <ul>valueCol (String) - The name of the column to be used as the dictionary value.</ul>
    </li>
    <li>Returns <br />
        <ul>dictionary - A dictionary of key-value pairs.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
data_dict = system.kanoa.utilities.filterDataToDict(data, keyCol, valueCol)
