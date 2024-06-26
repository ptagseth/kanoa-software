---
id: addScheduleBlockException
title: system.kanoa.schedule.addScheduleBlockException
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a schedule block exception. Formerly called addRecurringException.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addScheduleBlockException(scheduleBlockId, exceptionDate, userId)</b>
    <li>Parameters <br />
        <ul>scheduleBlockId (int) - ID of the schedule block.</ul>
        <ul>exceptionDate (datetime) - Date of the exception.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Schedule block exception ID.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
schedule_block_id = 789
exception_date = ...
user_id = 101
exception_id = system.kanoa.schedule.addScheduleBlockException(schedule_block_id, exception_date, user_id)

