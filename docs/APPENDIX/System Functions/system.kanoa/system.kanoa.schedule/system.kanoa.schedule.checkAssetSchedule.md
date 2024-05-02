---
id: checkAssetSchedule
title: system.kanoa.schedule.checkAssetSchedule
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    This function is called by a gateway timer script. It will check the schedule to see what is scheduled for the line in which case it will set the line mode accordingly.
    It will also check if any currently scheduled operations should have ended, in which case it will put the asset into an idle mode.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>checkAssetSchedule(parentPath, includeChildren=True)</b>
    <li>Parameters <br />
        <ul>parentPath (string) - Path of the parent asset.</ul>
        <ul>includeChildren (boolean, default=True) - Include children assets.</ul>
    </li>
    <li>Returns <br />
        <ul>None</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
parent_path = 'Kanoa Industries\Adelaide Hills\Packaging'
system.kanoa.schedule.checkAssetSchedule(parent_path)
