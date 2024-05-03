---
id: getGroups
title: system.kanoa.quality.config.getGroups
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns check item groups in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getGroups(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary with optional parameters, e.g., &#123;'chkItemGroupId': 1, 'chkShtId': 2, 'chkItemGroupName': 'Group 1'}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset checkItemGroupsData - Check item groups data.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params_dict = {'chkItemGroupId': 1, 'chkShtId': 2, 'chkItemGroupName': 'Group 1'}
check_item_groups_data = system.kanoa.quality.config.getGroups(paramsDict=params_dict)

# Process the retrieved data
for row in check_item_groups_data:
    print(row['chkItemGroupId'], row['chkShtId'], row['chkItemGroupName'], row['sortOrder'])

