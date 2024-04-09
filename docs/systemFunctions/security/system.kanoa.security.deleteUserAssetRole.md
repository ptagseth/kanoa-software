---
id: deleteUserAssetRole
title: system.kanoa.security.deleteUserAssetRole
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a user asset role association.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteUserAssetRole(paramsDict)</b>
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
system.kanoa.security.deleteUserAssetRole({'roleId': 1, 'assetId': 3, 'userId': 6}, 123)

