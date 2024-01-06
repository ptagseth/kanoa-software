---
id: deleteRole
title: system.kanoa.security.deleteRole
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaConfig</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a user role.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteRole(roleId)</b>
    <li>Parameters <br />
        <ul>roleId (Integer) - Role ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Number of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
system.kanoa.security.deleteRole(1)