---
id: getRoles
title: system.kanoa.security.getRoles
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns roles based on the provided parameters.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getRoles(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary with keys such as roleId, roleName, and enabled.</ul>
    </li>
    <li>Returns <br />
        <ul>PyDataSet.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
rolesData = system.kanoa.security.getRoles({'roleId': 1, 'roleName': 'Operator', 'enabled': True})
