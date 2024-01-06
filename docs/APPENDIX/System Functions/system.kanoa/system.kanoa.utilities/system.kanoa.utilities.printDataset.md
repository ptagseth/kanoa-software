---
id: printDataset
title: system.kanoa.utilities.printDataset
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">Given a dataset, this function prints out its contents (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>printDataset(data, paramsDict)</b>
    <li>Parameters <br />
        <ul>data (Dataset) - The input dataset.</ul>
        <ul>paramsDict (Dictionary) - A dictionary containing optional parameters: 'wide', 'rows', 'title'.</ul>
    </li>
    <li>Returns <br />
        <ul>None</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
system.kanoa.utilities.printDataset(data, {'wide': True, 'rows': 5, 'title': 'Table Title'})

