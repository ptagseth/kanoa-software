---
id: getPickList
title: system.kanoa.quality.config.getPickList
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns pickList options in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getPickList(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary with optional parameters, e.g., &#123;'pickListId': 1, 'pickListName': 'Fraction', 'dataTypeName': 'Float', 'enabled': True}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset pickListData - PickList data.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params_dict_picklist = {'pickListId': 1, 'pickListName': 'Fraction', 'dataTypeName': 'Float', 'enabled': True}
picklist_data = system.kanoa.quality.config.getPickList(paramsDict=params_dict_picklist)

# Process the retrieved data
for row in picklist_data:
    print(row['pickListId'], row['pickListName'], row['dataTypeName'], row['enabled'])

