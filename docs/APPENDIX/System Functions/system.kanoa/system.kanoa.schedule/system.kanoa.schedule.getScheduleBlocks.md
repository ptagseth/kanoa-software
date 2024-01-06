---
id: getScheduleBlocks
title: system.kanoa.schedule.getScheduleBlocks
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Returns all schedule blocks for the given parameters (kanoaScheduler).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getScheduleBlocks(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary containing parameters such as assetPath, startDate, endDate, recurring, etc.</ul>
    </li>
    <li>Returns <br />
        <ul>scheduleBlocks (pyDataset) - Dataset containing schedule blocks based on the provided parameters.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
schedule_params = {'assetPath': 'Kanoa Industries\\Adelaide Hills\\Packaging\\Line 1', 'startDate': system.date.parse("2023-01-01 00:00:00"), 'endDate': system.date.parse("2023-02-01 00:00:00"), 'recurring': True}
schedule_blocks = system.kanoa.schedule.getScheduleBlocks(schedule_params)
