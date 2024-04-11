---
id: updateScheduleBlockField
title: system.kanoa.schedule.updateScheduleBlockField
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates the passed field value for the given scheduleBlockId.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateScheduleBlockField(scheduleBlockId, field, value, userId)</b>
    <li>Parameters <br />
        <ul>scheduleBlockId (int) - ID of the schedule block.</ul>
        <ul>field (string) - Name of the column to update.</ul>
        <ul>value (pyObject) - New value for the specified field.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
schedule_block_id = 123
field_name = 'scheduleBlockName'
new_value = 'New Schedule Block Name'
user_id = 456
records_modified = system.kanoa.schedule.updateScheduleBlockField(schedule_block_id, field_name, new_value, user_id)

