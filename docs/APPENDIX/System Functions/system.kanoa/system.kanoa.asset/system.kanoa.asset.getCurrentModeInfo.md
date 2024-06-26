---
id: getCurrentModeInfo
title: system.kanoa.asset.getCurrentModeInfo
hide_table_of_contents: true
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
mode_info = system.kanoa.asset.getCurrentModeInfo(asset_path)
