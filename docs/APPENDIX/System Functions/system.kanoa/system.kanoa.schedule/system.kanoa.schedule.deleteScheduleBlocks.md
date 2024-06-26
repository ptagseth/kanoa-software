---
id: deleteScheduleBlocks
title: system.kanoa.schedule.deleteScheduleBlocks
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes all schedule blocks for the given parameters. Formerly called 'deleteLineScheduleInfoFromTable'.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteScheduleBlocks(assetId, startDate, endDate, userId)</b>
    <li>Parameters <br />
        <ul>assetId (int) - Asset ID.</ul>
        <ul>startDate (datetime) - Start date for the deletion.</ul>
        <ul>endDate (datetime) - End date for the deletion.</ul>
        <ul>userId (int) - User ID.</ul>
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

