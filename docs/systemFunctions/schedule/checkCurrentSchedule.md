---
id: checkCurrentSchedule
title: system.kanoaOPS.checkCurrentSchedule
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    This function will grab all scheduled events, whether discrete or recurring, for the current time period and then filter them to only return the active one (kanoaOPS).
</HeaderBox>
<HeaderBox header="Syntax">
    <b>checkCurrentSchedule(assetPath)</b>
    <li>Parameters <br />
        <ul>
            assetPath (string) - Path of the asset.
        </ul>
    </li>
    <li>Returns <br />
        <ul>Event data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
asset_path = 'Kanoa Industries\Adelaide Hills\Packaging\Line 1'
current_schedule = system.kanoaOPS.checkCurrentSchedule(asset_path)

