---
id: getItemSetLinks
title: system.kanoa.quality.config.getItemSetLinks
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns itemSetLinks for the given parameters in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getItemSetLinks(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary with optional parameters, e.g., &#123;'itemSetLinkId': 1, 'itemSetId': 1, 'enabled': True, 'itemName': 'some item name', 'itemSetName': 'some itemset name'}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset itemSetLinksData - ItemSetLinks data.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params_dict_item_set_links = {'itemSetLinkId': 1, 'itemSetId': 1, 'enabled': True, 'itemName': 'some item name', 'itemSetName': 'some itemset name'}
item_set_links_data = system.kanoa.quality.config.getItemSetLinks(paramsDict=params_dict_item_set_links)

# Process the retrieved data
for row in item_set_links_data:
    print(row['itemSetLinkId'], row['itemId'], row['itemName'], row['itemSetId'], row['itemSetName'])

