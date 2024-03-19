---
id: updateAssetSchedule
title: system.kanoaOPS.updateAssetSchedule
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    This function will update the mode for the given asset (kanoaOPS).
</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateAssetSchedule(assetPath, assetId, eventData)</b>
    <li>Parameters <br />
        <ul>assetPath (string) - Path of the asset.</ul>
        <ul>assetId - Asset ID.</ul>
        <ul>eventData - Event data.</ul>
    </li>
    <li>Returns <br />
        <ul>Boolean value indicating success or failure.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
asset_path = 'Kanoa Industries\Adelaide Hills\Packaging\Line 1'
asset_id = 123
event_data = {...}  # Replace with actual event data
success = system.kanoaOPS.updateAssetSchedule(asset_path, asset_id, event_data)
