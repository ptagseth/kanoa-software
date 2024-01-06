---
id: deleteScheduleBlock
title: system.kanoa.schedule.deleteScheduleBlock
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a schedule block. Formerly called 'deleteLineScheduleEvent' (kanoaScheduler).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteScheduleBlock(scheduleBlockId, userId)</b>
    <li>Parameters <br />
        <ul>
            scheduleBlockId (int) - ID of the schedule block to delete.
            userId (int) - User ID.
        </ul>
    </li>
    <li>Returns <br />
        <ul># of records modified.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
schedule_block_id = 789
user_id = 101
records_modified = system.kanoa.schedule.deleteScheduleBlock(schedule_block_id, user_id)

