---
id: addScheduleBlock
title: system.kanoa.schedule.addScheduleBlock
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a schedule block (kanoaSchedule).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addScheduleBlock(scheduleBlockInfo, userId)</b>
    <li>Parameters <br />
        <ul>
            scheduleBlockInfo (Dictionary) - Dictionary containing information about the schedule block.
            userId (int) - User ID.
        </ul>
    </li>
    <li>Returns <br />
        <ul>scheduleBlockId (int) - ID of the added schedule block.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
schedule_info = {'scheduleBlockName': 'Maintenance', 'assetId': 1, 'itemId': None, 'workOrderId': None, 'scheduledQty': None, 'modeId': 3, 'startDate': ..., 'endDate': ..., 'notes': 'Maintenance notes', 'rruleStr': '...', 'color': 'FF0000'}
user_id = 123
schedule_block_id = system.kanoa.schedule.addScheduleBlock(schedule_info, user_id)
