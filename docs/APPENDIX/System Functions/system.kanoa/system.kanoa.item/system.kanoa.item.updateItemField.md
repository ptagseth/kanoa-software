---
id: updateItemField
title: system.kanoa.item.updateItemField
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates an item's field value (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateItemField(itemId, field, value, userId)</b>
    <li>Parameters <br />
        <ul>itemId (Integer) - ID of the item to update.</ul>
        <ul>field (String) - Field name to update (e.g., 'itemName', 'itemDescription', 'itemClassId', 'itemColor', 'enabled').</ul>
        <ul>value (PyObject) - Value corresponding to the field data type.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>itemId (Integer) - ID of the updated item.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
updatedItemId = system.kanoa.item.updateItemField(1, 'itemName', 'NewName', 123)
