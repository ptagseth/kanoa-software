---
id: updateScheduleBlock
title: system.kanoa.schedule.updateScheduleBlock
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates a schedule block.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateScheduleBlock(scheduleBlockInfo, userId)</b>
    <li>Parameters <br />
        <ul>scheduleBlockInfo (Dictionary) - Dictionary containing information about the schedule block.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
updated_schedule_info = {'scheduleBlockId': 456, 'scheduleBlockName': 'Updated Maintenance', 'assetId': 2, 'itemId': None, 'workOrderId': None, 'scheduledQty': None, 'modeId': 4, 'startDate': ..., 'endDate': ..., 'notes': 'Updated Maintenance notes', 'rruleStr': '...', 'color': '00FF00'}
user_id = 123
records_modified = system.kanoa.schedule.updateScheduleBlock(updated_schedule_info, user_id)

