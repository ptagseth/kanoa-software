---
id: updateItem
title: system.kanoa.item.updateItem
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates an item (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateItem(itemInfo, userId)</b>
    <li>Parameters <br />
        <ul>itemInfo (Dictionary) - Dictionary containing updated item information.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>itemId (Integer) - ID of the updated item.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
itemInfo = {
    'itemName': 'Sausages',
    'itemDescription': 'Delicious bangers',
    'itemClassId': None,
    'itemColor': 'Red',
    'enabled': True,
    'itemId': 1
}
updatedItemId = system.kanoa.item.updateItem(itemInfo, 123)
