---
id: updateScheduleBlockExceptions
title: system.kanoa.schedule.updateScheduleBlockExceptions
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Updates schedule block exceptions when an event block's startDate gets updated. This function is private and only gets called by updateScheduledEventTime and updateScheduleBlock.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateScheduleBlockExceptions(scheduleBlockId, newStartDate, userId)</b>
    <li>Parameters <br />
        <ul>scheduleBlockId (int) - ID of the schedule block.</ul>
        <ul>newStartDate (datetime) - New start date for the schedule block.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>No return value.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
schedule_block_id = 123
new_start_date = ...
user_id = 456
system.kanoa.schedule.updateScheduleBlockExceptions(schedule_block_id, new_start_date, user_id)
