---
id: getParentAsset
title: system.kanoa.asset.getParentAsset
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns the parent asset of the given type for the given asset. (kanoaCore)</HeaderBox>
<HeaderBox header="Syntax">
    <b>getParentAsset(assetTypeName, assetPath)</b>
    <li> Parameters <br />
        <ul>assetTypeName (string) - e.g. 'site'</ul>
        <ul>assetPath (string) - e.g. 'Kanoa Industries\Adelaide Hills\Packaging\Line 1'</ul>
    </li>
    <li> Returns <br />
        <ul>asset data (pyDataSet).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
asset_type_name = 'site'
asset_path = 'Kanoa Industries\Adelaide Hills\Packaging\Line 1'
parent_asset_data = system.kanoa.asset.getParentAsset(asset_type_name, asset_path)

