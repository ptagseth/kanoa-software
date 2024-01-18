---
id: getCheckItemStates
title: system.kanoa.quality.config.getCheckItemStates
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns check item states in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getCheckItemStates(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary with optional parameters, e.g., &#123;'chkItemStateId': 1, 'chkItemStateName': 'Failed', 'enabled': True}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset checkItemStateData - Check item state data.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params_dict = {'chkItemStateId': 1, 'chkItemStateName': 'Failed', 'enabled': True}
check_item_state_data = system.kanoa.quality.config.getCheckItemStates(paramsDict=params_dict)

# Process the retrieved data
for row in check_item_state_data:
    print(row['chkItemStateId'], row['chkItemStateName'], row['enabled'], row['chkItemStateColor'])

