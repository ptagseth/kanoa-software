---
id: deleteScheduleBlocks
title: system.kanoa.schedule.deleteScheduleBlocks
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes all schedule blocks for the given parameters. Formerly called 'deleteLineScheduleInfoFromTable' (kanoaScheduler).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteScheduleBlocks(assetId, startDate, endDate, userId)</b>
    <li>Parameters <br />
        <ul>
            assetId (int) - Asset ID.
            startDate (datetime) - Start date for the deletion.
            endDate (datetime) - End date for the deletion.
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
asset_id = 123
start_date = ...
end_date = ...
user_id = 456
records_modified = system.kanoa.schedule.deleteScheduleBlocks(asset_id, start_date, end_date, user_id)

