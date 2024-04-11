---
id: convertDatasetToDict
title: system.kanoa.utilities.convertDatasetToDict
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Given the name of a key column and value column, this function converts a dataset into a dictionary of key-value pairs (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>convertDatasetToDict(data, keyCol, valueCol)</b>
    <li>Parameters <br />
        <ul>data (Dataset) - The input dataset.</ul>
        <ul>keyCol (String) - The name of the key column, e.g., 'configName'.</ul>
        <ul>valueCol (String) - The name of the value column, e.g., 'configValue'.</ul>
    </li>
    <li>Returns <br />
        <ul>dictionary - A dictionary of key-value pairs.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
data_dict = system.kanoa.utilities.convertDatasetToDict(data, 'configName', 'configValue')

