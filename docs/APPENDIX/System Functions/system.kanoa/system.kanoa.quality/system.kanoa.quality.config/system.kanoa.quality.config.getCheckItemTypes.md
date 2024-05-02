---
id: getCheckItemTypes
title: system.kanoa.quality.config.getCheckItemTypes
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns check item types in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getCheckItemTypes(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary with optional parameters, e.g., &#123;'chkItemTypeId': 1, 'chkItemTypeName': 'Check', 'enabled': True}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset checkItemTypeData - Check item type data.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params_dict = {'chkItemTypeId': 1, 'chkItemTypeName': 'Check', 'enabled': True}
check_item_type_data = system.kanoa.quality.config.getCheckItemTypes(paramsDict=params_dict)

# Process the retrieved data
for row in check_item_type_data:
    print(row['chkItemTypeId'], row['chkItemTypeName'], row['enabled'])

