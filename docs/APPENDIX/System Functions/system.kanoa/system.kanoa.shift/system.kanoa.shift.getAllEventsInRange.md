---
id: getAllEventsInRange
title: system.kanoa.shift.getAllEventsInRange
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Gets all events in the specified range, applying an offset to show dates correctly on the calendar (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAllEventsInRange(rangeStart, rangeEnd, assetPath='%', getSubAssets=True, showInherited=True, deviceUTCOffsetHrs=None)</b>
    <li>Parameters <br />
        <ul>rangeStart (Datetime) - Start date of the range.</ul>
        <ul>rangeEnd (Datetime) - End date of the range.</ul>
        <ul>assetPath (String) - Asset path or '%' for all.</ul>
        <ul>getSubAssets (Boolean) - Include sub-assets.</ul>
        <ul>showInherited (Boolean) - Show inherited shifts.</ul>
        <ul>deviceUTCOffsetHrs (Float) - Device UTC offset in hours.</ul>
    </li>
    <li>Returns <br />
        <ul>Schedule data (Dataset).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
scheduleData = getAllEventsInRange(someStartDate, someEndDate, 'someAssetPath', True, True, 5.5)
