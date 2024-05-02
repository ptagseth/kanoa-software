---
id: deleteItemAttribute
title: system.kanoa.item.deleteItemAttribute
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an item attribute (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteItemAttribute(itemAttrId, userId)</b>
    <li>Parameters <br />
        <ul>itemAttrId (Integer) - ID of the item attribute to delete.</ul>
        <ul>userId (Integer) - ID of the user.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
itemAttrId = 24
userId = 17
deletedRecords = system.kanoa.item.deleteItemAttribute(itemAttrId, userId)

