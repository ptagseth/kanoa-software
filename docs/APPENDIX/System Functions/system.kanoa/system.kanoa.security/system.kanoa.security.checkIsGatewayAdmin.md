---
id: checkIsGatewayAdmin
title: system.kanoa.security.checkIsGatewayAdmin
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaConfig</b> module</PurpleBox>
<HeaderBox header="Description">Returns true if the user has the Gateway Admin role.</HeaderBox>
<HeaderBox header="Syntax">
    <b>checkIsGatewayAdmin(userId)</b>
    <li>Parameters <br />
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>True / False (Bool).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
isAdmin = system.kanoa.security.checkIsGatewayAdmin(123)
