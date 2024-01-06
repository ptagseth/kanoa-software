---
id: decodeScheduleBlock
title: system.kanoa.schedule.decodeScheduleBlock
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Decodes the passed-in event record using the startDate and rruleStr.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>decodeScheduleBlock(scheduleBlock, rangeStart, rangeEnd, deviceUTCOffsetHrs=0, siteOffsetMins=0)</b>
    <li>Parameters <br />
        <ul>
            scheduleBlock (dictionary) - Schedule block details.
            rangeStart (datetime) - Start of the range.
            rangeEnd (datetime) - End of the range.
            deviceUTCOffsetHrs (float, default=0) - Device UTC offset in hours.
            siteOffsetMins (int, default=0) - Site offset in minutes.
        </ul>
    </li>
    <li>Returns <br />
        <ul>List of datetimes (eventTimeList).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
schedule_block = {...}  # Replace with actual schedule block details
range_start = ...
range_end = ...
device_utc_offset_hrs = 5.5
site_offset_mins = 300
event_times = system.kanoa.schedule.decodeScheduleBlock(schedule_block, range_start, range_end, device_utc_offset_hrs, site_offset_mins)
