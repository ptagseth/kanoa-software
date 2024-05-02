---
id: getItemSets
title: system.kanoa.quality.config.getItemSets
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns itemSets for the given parameters in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getItemSets(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary with optional parameters, e.g., &#123;'itemSetId': 1, 'enabled': True, 'itemSetName': 'Set 1'}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset itemSetsData - ItemSets data.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params_dict_item_sets = {'itemSetId': 1, 'enabled': True, 'itemSetName': 'Set 1'}
item_sets_data = system.kanoa.quality.config.getItemSets(paramsDict=params_dict_item_sets)

# Process the retrieved data
for row in item_sets_data:
    print(row['itemSetId'], row['itemSetName'], row['itemSetDescription'])

