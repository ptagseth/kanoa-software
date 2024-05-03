---
id: deleteItemClass
title: system.kanoa.item.deleteItemClass
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an item class. It may have items or other item classes underneath it. The function attempts to delete, but if there are dependencies, it returns the number of modified records and an error message (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteItemClass(itemClassId, userId)</b>
    <li>Parameters <br />
        <ul>itemClassId (Integer) - ID of the item class to delete.</ul>
        <ul>userId (Integer) - ID of the user.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified (Integer), errorMessage (String).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
itemClassId = 12
userId = 17
deletedRecords, errorMessage = system.kanoa.item.deleteItemClass(itemClassId, userId)

