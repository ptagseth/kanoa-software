---
id: getCurrentModeInfo
title: system.kanoa.asset.getCurrentModeInfo
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Returns the current mode info for a given assetPath (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getCurrentModeInfo(assetPath)</b>
    <li> Parameters <br />
        <ul>assetPath (string) - Path of the asset.</ul>
    </li>
    <li> Returns <br />
        <ul>modeInfo (dictionary).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
asset_path = 'SampleAsset'
mode_info = getCurrentModeInfo(asset_path)
