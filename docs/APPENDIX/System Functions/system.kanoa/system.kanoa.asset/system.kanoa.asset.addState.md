---
id: addState
title: system.kanoa.asset.addState
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Add a state to the state table (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addState(stateInfo, userId)</b>
    <li> Parameters <br />
        <ul>stateInfo (dict) - Dictionary i.e., &#123;'stateName': 'Running', 'stateColor': None, 'stateCategoryId': 1, 'stateTypeId': 3, 'assetGroupId': None, 'enabled': True}</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>stateId (int) - ID of the added state.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
state_info = {
    'stateName': 'NewState',
    'stateCategoryId': 1,
    'stateTypeId': 1,
    'assetGroupId': 1,
    'enabled': True
}
user_id = 456
state_id = system.kanoa.asset.addState(state_info, user_id)

