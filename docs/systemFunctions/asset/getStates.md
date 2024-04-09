---
id: getStates
title: system.kanoa.asset.getStates
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Returns state info for the given parameters (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getStates(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict (dict) - Dictionary containing filter parameters.</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
parameters = {
    'enabled': True,
    'stateName': 'Running',
    'stateId': 1,
    'stateTypeName': 'Type1',
    'stateTypeId': 2,
    'assetGroupId': 1
}
state_info = system.kanoa.asset.getStates(parameters)
