---
id: getScheduledEventDurations
title: system.kanoa.schedule.getScheduledEventDurations
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Used in Reliability analysis to compare the amount of time modes were scheduled for compared to how long they were actually in that mode.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getScheduledEventDurations(assetPath, rangeStart, rangeEnd)</b>
    <li>Parameters <br />
        <ul>
            assetPath (string) - Path of the asset.
            rangeStart (datetime) - Start of the range.
            rangeEnd (datetime) - End of the range.
        </ul>
    </li>
    <li>Returns <br />
        <ul>Schedule data (dataset).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
asset_path = 'Kanoa Industries\Adelaide Hills\Packaging\Line 1'
range_start = ...
range_end = ...
schedule_data = system.kanoa.schedule.getScheduledEventDurations(asset_path, range_start, range_end)

