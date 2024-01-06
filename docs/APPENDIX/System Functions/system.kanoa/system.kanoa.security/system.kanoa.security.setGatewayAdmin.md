---
id: setGatewayAdmin
title: system.kanoa.security.setGatewayAdmin
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Adds or removes the Gateway Admin role from the user.</HeaderBox>
<HeaderBox header="Syntax">
    <b>setGatewayAdmin(userId, enable)</b>
    <li>Parameters <br />
        <ul>userId (Integer) - User ID.</ul>
        <ul>enable (Bool) - Enable or disable the role.</ul>
    </li>
    <li>Returns <br />
        <ul>Error message (String).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
errorMessage = system.kanoa.security.setGatewayAdmin(123, True)
