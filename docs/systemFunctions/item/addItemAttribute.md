---
id: addItemAttribute
title: system.kanoa.item.addItemAttribute
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds an item attribute. If it already exists, it will update it (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addItemAttribute(itemInfo, userId)</b>
    <li>Parameters <br />
        <ul>itemInfo (Dictionary) - Dictionary containing item attribute information (e.g., &#123;'itemAttrName': 'weight', 'itemId': 1, 'itemAttrValue': 57.4}).</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>itemAttrId (Integer) - ID of the added/updated item attribute.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
newItemAttrId = system.kanoa.item.addItemAttribute({'itemAttrName': 'weight', 'itemId': 1, 'itemAttrValue': 57.4}, 123)
