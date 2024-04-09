---
id: addAssetTagUDTInstance
title: system.kanoa.asset.addAssetTagUDTInstance
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Creates the assets tag folder structure and assetOEE UDT instance for the new asset (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addAssetTagUDTInstance(assetId)</b>
    <li> Parameters <br />
        <ul>assetId (int) - ID of the asset.</ul>
    </li>
    <li> Returns <br />
        <ul>No specific return value.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
asset_id = 123
system.kanoa.asset.addAssetTagUDTInstance(asset_id)
