---
id: exportAsset
title: system.kanoa.asset.exportAsset
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Exports all config info for the passed in assetId. This will be an identical copy including all the child assets, links to modes, states, items and attributes (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>exportAsset(assetId)</b>
    <li> Parameters <br />
        <ul>assetId (int) - Asset to be exported</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:

assetId = 5
asset_exp_dict = system.kanoa.asset.exportAsset(assetId)
