---
id: getItems
title: system.kanoa.quality.config.getItems
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns items with linked itemSets in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getItems(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary with optional parameters, e.g., &#123;'enabled': True, 'itemName': 'Item 1', 'itemId': 2, 'itemSetIds': [1, 2], 'itemClassPaths': ['/path1', '/path2']}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset itemsData - Items data with linked itemSets.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params_dict_items = {'enabled': True, 'itemName': 'Item 1', 'itemId': 2, 'itemSetIds': [1, 2], 'itemClassPaths': ['/path1', '/path2']}
items_data = system.kanoa.quality.config.getItems(paramsDict=params_dict_items)

# Process the retrieved data
for row in items_data:
    print(row['itemId'], row['itemName'], row['itemSetId'], row['itemSetName'])

