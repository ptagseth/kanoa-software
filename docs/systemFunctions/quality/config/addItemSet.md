---
id: addItemSet
title: system.kanoa.quality.config.addItemSet
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds an item set in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addItemSet(itemSetInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict itemSetInfo - Dictionary, e.g., &#123;'itemSetName': 'Set 1', 'itemSetDescription': 'Description 1', 'sortOrder': 3, 'enabled': True}</ul>
        <ul>int userId - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>int itemSetId - ID of the added item set.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
item_set_info = {'itemSetName': 'Set 1', 'itemSetDescription': 'Description 1', 'sortOrder': 3, 'enabled': True}
user_id = 123
added_item_set_id = system.kanoa.quality.config.addItemSet(itemSetInfo=item_set_info, userId=user_id)

print(f"Added item set with ID: {added_item_set_id}")

