---
id: getAllEventsInRange
title: system.kanoa.schedule.getAllEventsInRange
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Gets all events in the specified range. Applies an offset to all the dates for the dates to show correctly on the calendar component.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAllEventsInRange(rangeStart, rangeEnd, assetPath='%', deviceUTCOffsetHrs=None)</b>
    <li>Parameters <br />
        <ul>rangeStart (datetime) - Start of the range.</ul>
        <ul>rangeEnd (datetime) - End of the range.</ul>
        <ul>assetPath (string, default='%') - Path of the asset (defaults to all assets).</ul>
        <ul>deviceUTCOffsetHrs (float) - Device UTC offset in hours.</ul>
    </li>
    <li>Returns <br />
        <ul>Schedule data (dataset).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
range_start = ...
range_end = ...
asset_path = 'Kanoa Industries\Adelaide Hills\Packaging\Line 1'
device_utc_offset_hrs = 5.5
schedule_data = system.kanoa.schedule.getAllEventsInRange(range_start, range_end, asset_path, device_utc_offset_hrs)

