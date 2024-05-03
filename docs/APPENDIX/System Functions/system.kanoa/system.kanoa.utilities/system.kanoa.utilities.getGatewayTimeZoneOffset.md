---
id: getGatewayTimeZoneOffset
title: system.kanoa.utilities.getGatewayTimeZoneOffset
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns the timezone offset for the gateway server (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getGatewayTimeZoneOffset()</b>
    <li>Parameters <br />
        <ul>None</ul>
    </li>
    <li>Returns <br />
        <ul>mins (Integer) - The timezone offset in minutes.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
timezone_offset = system.kanoa.utilities.getGatewayTimeZoneOffset()

