---
id: getAssetAttributes
title: system.kanoa.asset.getAssetAttributes
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Gets asset attributes (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAssetAttributes(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict (Dictionary) - A dictionary of key/value pairs used to filter the returned dataset</ul>
    </li>
    <li> Returns <br />
        <ul>data (pyDataset) - A pyDataset containing asset attributes filtered by the provided parameters</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
params = {'enabled': True, 'assetPath': 'Kanoa Industries%', 'assetId': 1}
asset_attributes = system.kanoa.asset.getAssetAttributes(params)


