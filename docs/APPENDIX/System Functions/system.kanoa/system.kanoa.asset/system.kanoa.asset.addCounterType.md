---
id: addCounterType
title: system.kanoa.asset.addCounterType
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new counter type.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addCounterType(countTypeInfo, userId)</b>
    <li> Parameters <br />
        <ul>countTypeInfo (dict) - A dictionary containing counter type information:
            - 'counterTypeName' (str): Name of the counter type.
        </ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>counterTypeId (int) - ID of the added counter type.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
count_type_info = {'counterTypeName': 'general'}
user_id = 123
counter_type_id = addCounterType(count_type_info, user_id)
