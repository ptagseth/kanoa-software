---
id: getChecks
title: system.kanoa.quality.config.getChecks
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns the check items for the given parameters in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getChecks(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary with optional parameters, e.g., &#123;'chkShtId': 1, 'chkItemId': 6, 'chkItemTypeName': 'Calculator', 'checkName': 'check 1', 'groupId': 4, 'dataTypeName': 'float', 'isNumeric': True, 'enabled': True, 'dynamic': True}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset checkData - Dataset containing check items.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params = {'chkShtId': 1, 'chkItemId': 6, 'chkItemTypeName': 'Calculator', 'checkName': 'check 1', 'groupId': 4, 'dataTypeName': 'float', 'isNumeric': True, 'enabled': True, 'dynamic': True}
check_data = system.kanoa.quality.config.getChecks(paramsDict=params)

# Accessing data in the dataset
for row in check_data:
    print(f"Check Item ID: {row['chkItemId']}, Check Name: {row['chkItemName']}, Group ID: {row['chkItemGroupId']}")

