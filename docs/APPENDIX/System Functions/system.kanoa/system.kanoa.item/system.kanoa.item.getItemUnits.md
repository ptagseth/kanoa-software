---
id: getItemUnits
title: system.kanoa.item.getItemUnits
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns item units (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getItemUnits(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary containing filter parameters.</ul>
    </li>
    <li>Returns <br />
        <ul>data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
parameters = {
    'itemPeriodId': 1,
    'enabled': True,
    'itemUnitId': 2,
    'itemUnitName': 'unit'
}
itemUnitsData = system.kanoa.item.getItemUnits(parameters)