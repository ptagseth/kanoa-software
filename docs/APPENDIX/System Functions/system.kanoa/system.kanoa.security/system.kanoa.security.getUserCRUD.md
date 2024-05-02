---
id: getUserCRUD
title: system.kanoa.security.getUserCRUD
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns the CRUD object for security configuration.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getUserCRUD(userId)</b>
    <li>Parameters <br />
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Dictionary.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
userCrudObject = system.kanoa.security.getUserCRUD(123)

