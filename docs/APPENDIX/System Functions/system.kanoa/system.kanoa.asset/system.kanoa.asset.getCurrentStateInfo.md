---
id: getCurrentStateInfo
title: system.kanoa.asset.getCurrentStateInfo
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Returns the current state info for a given assetPath (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getCurrentStateInfo(assetPath)</b>
    <li> Parameters <br />
        <ul>assetPath (string) - Path of the asset.</ul>
    </li>
    <li> Returns <br />
        <ul>stateInfo (dictionary).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
asset_path = 'SampleAsset'
state_info = getCurrentStateInfo(asset_path)

