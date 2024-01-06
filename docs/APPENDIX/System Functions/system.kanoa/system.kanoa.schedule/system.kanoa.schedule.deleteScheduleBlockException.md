---
id: deleteScheduleBlockException
title: system.kanoa.schedule.deleteScheduleBlockException
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a schedule block exception. Formerly called deleteRecurringException (kanoaScheduler).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteScheduleBlockException(scheduleBlockExceptionId)</b>
    <li>Parameters <br />
        <ul>
            scheduleBlockExceptionId (int) - ID of the schedule block exception.
        </ul>
    </li>
    <li>Returns <br />
        <ul># of records modified (int).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
schedule_block_exception_id = 789
records_modified = system.kanoa.schedule.deleteScheduleBlockException(schedule_block_exception_id)

