---
id: getAllCurrentEvents
title: system.kanoa.schedule.getAllCurrentEvents
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Returns scheduled events for the current day for the passed-in assetPath.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAllCurrentEvents(assetPath='%')</b>
    <li>Parameters <br />
        <ul>
            assetPath (string, default='%') - Path of the asset.
        </ul>
    </li>
    <li>Returns <br />
        <ul>Scheduled events data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
asset_path = 'Kanoa Industries\Adelaide Hills\Packaging\Line 1'
current_events = system.kanoa.schedule.getAllCurrentEvents(asset_path)

