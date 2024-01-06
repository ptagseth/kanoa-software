---
id: getStateType
title: system.kanoa.asset.getStateType
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Gets State Type data (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getStateType(paramsDict)</b>
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
    'stateTypeId': 1,
    'stateTypeName': 'Running'
}
state_type_data = system.kanoa.asset.getStateType(parameters)
