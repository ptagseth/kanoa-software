---
id: addItem
title: system.kanoa.item.addItem
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds an item (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addItem(itemInfo, userId)</b>
    <li>Parameters <br />
        <ul>itemInfo (Dictionary) - Dictionary containing item information.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>itemId (Integer) - ID of the newly added item.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
itemInfo = {
    'itemName': 'Sausages',
    'itemDescription': 'Delicious bangers',
    'itemClassId': None,
    'itemColor': None,
    'enabled': True
}
newItemId = system.kanoa.item.addItem(itemInfo, 123)
