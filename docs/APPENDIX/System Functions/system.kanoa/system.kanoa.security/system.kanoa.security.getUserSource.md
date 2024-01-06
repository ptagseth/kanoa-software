---
id: getUserSource
title: system.kanoa.security.getUserSource
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaConfig</b> module</PurpleBox>
<HeaderBox header="Description">Returns the userSource used for security.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getUserSource()</b>
    <li>Returns <br />
        <ul>UserSourceName (String).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
userSourceName = system.kanoa.security.getUserSource()
