---
id: storeNewIDPUser
title: system.kanoa.security.storeNewIDPUser
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaConfig</b> module</PurpleBox>
<HeaderBox header="Description">Creates a new entry with a unique ID for a user when they log in.</HeaderBox>
<HeaderBox header="Syntax">
    <b>storeNewIDPUser(user)</b>
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
userId = system.kanoa.security.storeNewIDPUser(userObj)

