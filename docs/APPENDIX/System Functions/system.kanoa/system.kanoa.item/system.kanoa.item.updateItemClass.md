---
id: updateItemClass
title: system.kanoa.item.updateItemClass
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates an item class (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateItemClass(itemClassInfo, userId)</b>
    <li>Parameters <br />
        <ul>itemClassInfo (Dictionary) - Dictionary containing updated item class information (e.g., &#123;'itemClassId': 1, 'parentId': 56, 'itemClassName': 'FG', 'itemClassDescription': 'Finished Goods', 'itemId': 1, 'itemClassColor': '#FF00FF', 'enabled': True}).</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
modifiedRecords = system.kanoa.item.updateItemClass({'itemClassId': 1, 'parentId': 56, 'itemClassName': 'FG', 'itemClassDescription': 'Finished Goods', 'itemId': 1, 'itemClassColor': '#FF00FF', 'enabled': True}, 123)

