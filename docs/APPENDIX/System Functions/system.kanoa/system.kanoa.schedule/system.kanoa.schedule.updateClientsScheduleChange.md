---
id: updateClientsScheduleChange
title: system.kanoa.schedule.updateClientsScheduleChange
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    After a change has been made to the schedule, this function updates the tag schedule dataset. It informs any open views that a change to the schedule has been made. It also checks if there are any currently running scheduled events that need to be updated.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateClientsScheduleChange(assetPath)</b>
    <li>Parameters <br />
        <ul>
            assetPath (string) - Path of the asset.
        </ul>
    </li>
    <li>Returns <br />
        <ul>No return value.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
asset_path = 'Kanoa Industries\Adelaide Hills\Packaging\Line 1'
system.kanoa.schedule.updateClientsScheduleChange(asset_path)

