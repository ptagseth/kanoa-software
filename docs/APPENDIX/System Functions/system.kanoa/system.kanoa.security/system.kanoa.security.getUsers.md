---
id: getUsers
title: system.kanoa.security.getUsers
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns user information based on the provided parameters.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getUsers(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary with keys such as userName, userId, or idpUserId.</ul>
    </li>
    <li>Returns <br />
        <ul>Data (PyDataSet).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
userData = system.kanoa.security.getUsers({'userName': 'johndoe'})



