---
id: deleteUser
title: system.kanoa.security.deleteUser
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a user specified by the userId. SQL cascade will delete the user from the userAssetRole table.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteUser(userId)</b>
    <li>Parameters <br />
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>List of dictionaries (List).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
deletedUserRecords = system.kanoa.security.deleteUser(123)