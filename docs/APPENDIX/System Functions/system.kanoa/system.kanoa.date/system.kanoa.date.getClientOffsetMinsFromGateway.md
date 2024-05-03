---
id: getClientOffsetMinsFromGateway
title: system.kanoa.date.getClientOffsetMinsFromGateway
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">
    This function returns the timezone offset between the client and the gateway for the date passed in.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getClientOffsetMinsFromGateway(clientTZ, tStamp)</b>
    <li>Parameters:<br />
        <ul>clientTZ: str - Timezone of the client (browser)</ul>
        <ul>tStamp: datetime - Date for which the offset is to be calculated</ul>
    </li>
    <li>Returns: offsetMins - int</li>
</HeaderBox>

### Code Example

```python
# Example Usage:
offsetMins = system.kanoa.date.getClientOffsetMinsFromGateway(clientTZ, tStamp)
