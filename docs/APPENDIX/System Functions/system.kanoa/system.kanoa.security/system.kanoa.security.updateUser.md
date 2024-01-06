---
id: updateUser
title: system.kanoa.security.updateUser
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaSecurity</b> and <b>KanoaConfig</b> modules</PurpleBox>
<HeaderBox header="Description">Updates a user with the provided information.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateUser(paramsDict, userId)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - User information such as userId, userName, firstName, lastName, email.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Number of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
recordsModified = system.kanoa.security.updateUser({'userId': 18, 'userName': 'JohnDoe', 'firstName': 'John', 'lastName': 'Doe', 'email': 'johndoe@gmail.com'}, 123)
