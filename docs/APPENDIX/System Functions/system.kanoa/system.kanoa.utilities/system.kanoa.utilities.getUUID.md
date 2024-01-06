---
id: getUUID
title: system.kanoa.utilities.getUUID
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns a universally unique 65-character string value (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getUUID()</b>
    <li>Parameters <br />
        <ul>None</ul>
    </li>
    <li>Returns <br />
        <ul>uuid (String) - A universally unique 65-character string.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
uuid_value = system.kanoa.utilities.getUUID()