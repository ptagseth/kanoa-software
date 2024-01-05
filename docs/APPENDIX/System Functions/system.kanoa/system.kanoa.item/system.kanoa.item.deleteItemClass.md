---
id: deleteItemClass
title: system.kanoa.item.deleteItemClass
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an item class. It may have items or other item classes underneath it. The function attempts to delete, but if there are dependencies, it returns the number of modified records and an error message (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteItemClass(itemClassId)</b>
    <li>Parameters <br />
        <ul>itemClassId (Integer) - ID of the item class to delete.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified (Integer), errorMessage (String).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
deletedRecords, errorMessage = deleteItemClass(1)

