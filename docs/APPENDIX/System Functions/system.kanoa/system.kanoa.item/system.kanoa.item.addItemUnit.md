---
id: addItemUnit
title: system.kanoa.item.addItemUnit
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new item unit (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addItemUnit(unitName, userId)</b>
    <li>Parameters <br />
        <ul>unitName (String) - Name of the new item unit.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>itemUnitId (Integer) - ID of the newly added item unit.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
newUnitId = addItemUnit('KanoaUnit', 123)

