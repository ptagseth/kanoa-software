---
id: getItemUnit
title: system.kanoa.item.getItemUnit
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns item units (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getItemUnit(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary containing filter parameters.</ul>
    </li>
    <li>Returns <br />
        <ul>pyDataset.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
parameters = {
    'enabled': True,
    'itemUnitId': 1,
    'itemUnitName': 'KanoaUnit'
}
itemUnitData = system.kanoa.item.getItemUnit(parameters)
