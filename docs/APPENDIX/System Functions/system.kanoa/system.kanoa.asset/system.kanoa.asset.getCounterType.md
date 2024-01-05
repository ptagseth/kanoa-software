---
id: getCounterType
title: system.kanoa.asset.getCounterType
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Returns the counter type (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getCounterType(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict (dict) - Dictionary containing filter parameters.</ul>
    </li>
    <li> Returns <br />
        <ul>data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
parameters = {
    'enabled': True,
    'counterTypeId': 1,
    'counterTypeName': 'infeed'
}
counter_type_data = getCounterType(parameters)