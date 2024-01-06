---
id: addUser
title: system.kanoa.security.addUser
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Creates a new user with the provided information.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addUser(paramsDict, userId)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - User information such as userName, firstName, lastName, email.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>userObj (PyObject) - User object.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
newUserObj = system.kanoa.security.addUser({'userName': 'JohnDoe', 'firstName': 'John', 'lastName': 'Doe', 'email': 'johndoe@gmail.com'}, 123)

