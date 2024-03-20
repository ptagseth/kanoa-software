---
id: addScheduleBlock
title: system.kanoa.schedule.addScheduleBlock
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a schedule block.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addScheduleBlock(scheduleBlockInfo, userId)</b>
    <li>Parameters <br />
        <ul>scheduleBlockInfo (Dictionary) - Dictionary containing information about the schedule block.
            <ul>
                <ul></ul>
                <ul>'scheduleBlockName' (str): Name of the schedule block</ul>
                <ul>'assetId' (int): ID of the asset associated with the schedule block</ul>
                <ul>'itemId' (int or None): ID of the item associated with the schedule block</ul>
                <ul>'workOrderId' (int or None): ID of the work order associated with the schedule block</ul>
                <ul>'scheduledQty' (int or None): Quantity scheduled</ul>
                <ul>'modeId' (int): ID of the mode associated with the schedule block</ul>
                <ul>'startDate' (date): Start date of the schedule block</ul>
                <ul>'endDate' (date): End date of the schedule block</ul>
                <ul>'notes' (str or None): Additional notes for the schedule block</ul>
                <ul>'rruleStr' (str): Recurrence rule string (e.g., 'FREQ=DAILY;INTERVAL=1')</ul>
                <ul>'color' (str or None): Color code for the schedule block</ul>
            </ul>
        </ul>
        <ul>userId (int) - User ID.</ul>
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
