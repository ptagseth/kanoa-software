---
id: getAssetModes
title: system.kanoa.asset.getAssetModes
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns linked asset modes filtered by the given parameters (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAssetModes(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict (dict) - Dictionary containing filter parameters.</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
parameters = {
    'enabled': True,
    'modeName': 'Production',
    'modeId': 1,
    'modeTypeId': 1,
    'modeTypeName': 'Production',
    'canSelect': True,
    'canSchedule': True
}
asset_modes = getAssetModes(parameters)

