---
id: deleteItemAttribute
title: system.kanoa.item.deleteItemAttribute
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an item attribute (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteItemAttribute(itemAttrId)</b>
    <li>Parameters <br />
        <ul>itemAttrId (Integer) - ID of the item attribute to delete.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
deletedRecords = deleteItemAttribute(56)

