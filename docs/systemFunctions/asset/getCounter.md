---
id: getCounter
title: system.kanoa.asset.getCounter
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Returns the counter (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getCounter(paramsDict)</b>
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
    'assetId': 1,
    'assetPath': 'Kanoa Industries%',
    'counterId': 5,
    'counterName': 'infeed',
    'counterTypeId': 2,
    'counterTypeName': 'infeed'
}
counter_data = system.kanoa.asset.getCounter(parameters)