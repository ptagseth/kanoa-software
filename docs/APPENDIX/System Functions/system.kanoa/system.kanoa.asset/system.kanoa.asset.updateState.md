---
id: updateState
title: system.kanoa.asset.updateState
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Update the state info for a given stateId. Update stateAssetLink table accordingly (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateState(stateInfo, userId)</b>
    <li> Parameters <br />
        <ul>stateInfo (dict) - Dictionary containing updated state information.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
state_info = {
    'stateId': 123,
    'stateName': 'UpdatedState',
    'stateCategoryId': 2,
    'stateTypeId': 2,
    'assetGroupId': 2,
    'enabled': False
}
user_id = 456
records_modified = system.kanoa.asset.updateState(state_info, user_id)

