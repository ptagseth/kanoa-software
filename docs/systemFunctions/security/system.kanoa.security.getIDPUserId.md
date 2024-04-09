---
id: getIDPUserId
title: system.kanoa.security.getIDPUserId
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns the user ID based on the IDP user information.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getIDPUserId(user)</b>
    <li>Parameters <br />
        <ul>user (User session object).</ul>
    </li>
    <li>Returns <br />
        <ul>userId (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
userId = system.kanoa.security.getIDPUserId(userObj)

