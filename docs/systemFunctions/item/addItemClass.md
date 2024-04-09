---
id: addItemClass
title: system.kanoa.item.addItemClass
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new item class (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addItemClass(itemClassInfo, userId)</b>
    <li>Parameters <br />
        <ul>itemClassInfo (Dictionary) - Dictionary containing item class information (e.g., &#123;'parentId': 56, 'itemClassName': 'FG', 'itemClassDescription': 'Finished Goods', 'itemId': 1, 'itemClassColor': '#FF00FF', 'enabled': True}).</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>itemclassId (Integer) - ID of the added item class.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
newItemClassId = system.kanoa.item.addItemClass({'parentId': 56, 'itemClassName': 'FG', 'itemClassDescription': 'Finished Goods', 'itemId': 1, 'itemClassColor': '#FF00FF', 'enabled': True}, 123)

