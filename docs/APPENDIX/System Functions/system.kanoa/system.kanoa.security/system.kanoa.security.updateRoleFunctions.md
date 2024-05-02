---
id: updateRoleFunctions
title: system.kanoa.security.updateRoleFunctions
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Inserts or deletes a role function link based on the provided information.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateRoleFunctions(roleFunctionInfo, userId)</b>
    <li>Parameters <br />
        <ul>roleFunctionInfo (Dictionary) - Information about the role function link, including roleId, functionId, and enabled.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        None.
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
system.kanoa.security.updateRoleFunctions({'roleId': 1, 'functionId': 7, 'enabled': True}, 123)

