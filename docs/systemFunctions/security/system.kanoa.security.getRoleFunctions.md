---
id: getRoleFunctions
title: system.kanoa.security.getRoleFunctions
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns role functions based on the provided parameters.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getRoleFunctions(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary with keys such as roleId, roleName, category, and enabled.</ul>
    </li>
    <li>Returns <br />
        <ul>Data (PyDataSet).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
roleFunctionData = system.kanoa.security.getRoleFunctions({'roleId': 1, 'roleName': 'Operator', 'category': 'Ops', 'enabled': True})

