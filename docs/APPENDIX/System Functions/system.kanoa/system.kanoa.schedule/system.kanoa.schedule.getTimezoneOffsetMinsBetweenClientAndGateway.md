---
id: getTimezoneOffsetMinsBetweenClientAndGateway
title: system.kanoa.schedule.getTimezoneOffsetMinsBetweenClientAndGateway
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Given the UTC offset in hours for the client (or device), this function will return the timezone offset between the gateway and the client.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getTimezoneOffsetMinsBetweenClientAndGateway(deviceUTCOffsetHrs)</b>
    <li>Parameters <br />
        <ul>
            deviceUTCOffsetHrs (float) - Device UTC offset in hours.
        </ul>
    </li>
    <li>Returns <br />
        <ul>Client offset in minutes (clientOffsetMins).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
device_utc_offset_hrs = 5.5
client_offset_mins = system.kanoa.schedule.getTimezoneOffsetMinsBetweenClientAndGateway(device_utc_offset_hrs)
