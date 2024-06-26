---
id: getUserAssetRoles
title: system.kanoa.security.getUserAssetRoles
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Given a user and a requested function, returns the allowed assets, functions, and roles.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getUserAssetRoles(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary with keys such as userId, function, and assetPathList.</ul>
    </li>
    <li>Returns <br />
        <ul>List of dictionaries (List).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
userAssetRoles = system.kanoa.security.getUserAssetRoles({'userId': 1, 'function': configureSecurity', 'assetPathList' ; ['Kanoa Industries']})

