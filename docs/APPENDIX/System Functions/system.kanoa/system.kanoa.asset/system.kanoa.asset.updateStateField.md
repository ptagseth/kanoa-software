---
id: updateStateField
title: system.kanoa.asset.updateStateField
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates the passed field value for the given stateId. If the field is enabled, it will update the assetLink Table (kanoaOPS)</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateStateField(stateId, field, value, userId)</b>
    <li> Parameters <br />
        <ul>stateId (int) - The ID of the state</ul>
        <ul>field (string) - Name of the column</ul>
        <ul>value (pyObject) - The new value for the field</ul>
        <ul>userId (int) - User ID</ul>
    </li>
    <li> Returns <br />
        <ul># of records modified (int)</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
modified_records = system.kanoa.asset.updateStateField(123, 'field_name', 'new_value', 789)
