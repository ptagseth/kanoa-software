---
id: addRole
title: system.kanoa.security.addRole
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Adds a user role.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addRole(roleName, userId)</b>
    <li>Parameters <br />
        <ul>roleName (String) - Role name.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>roleId (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
roleId = system.kanoa.security.addRole('Operator', 123)

