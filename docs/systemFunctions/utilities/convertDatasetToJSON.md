---
id: convertDatasetToJSON
title: system.kanoa.utilities.convertDatasetToJSON
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Converts the dataset to a list of dictionaries (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>convertDatasetToJSON(data)</b>
    <li>Parameters <br />
        <ul>data (Dataset) - The input dataset.</ul>
    </li>
    <li>Returns <br />
        <ul>list of dictionaries - A list containing dictionaries representing each row of the dataset.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
json_data = system.kanoa.utilities.convertDatasetToJSON(data)