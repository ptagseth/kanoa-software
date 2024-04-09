---
id: deleteItemUnit
title: system.kanoa.item.deleteItemUnit
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an item unit (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteItemUnit(itemUnitId, userId)</b>
    <li>Parameters <br />
        <ul>itemUnitId (Integer) - ID of the item unit to delete.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>recordsModified (Integer) - Number of records modified.</ul>
        <ul>msg (String) - Error message if deletion fails.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
deletedRecords, errorMsg = system.kanoa.item.deleteItemUnit(1, 123)

