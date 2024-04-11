---
id: addUserAssetRole
title: system.kanoa.security.addUserAssetRole
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Updates user roles for assets.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addUserAssetRole(paramsDict, userId)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary with keys such as roleId, assetId, and userId.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Number of records created or updated (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
recordsModified = system.kanoa.security.addUserAssetRole({'roleId': 1, 'assetId': 3, 'userId': 6}, 123)

