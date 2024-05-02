---
id: getAssetTypes
title: system.kanoa.asset.getAssetTypes
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns assetType info (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAssetTypes(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary containing filter parameters.</ul>
    </li>
    <li> Returns <br />
        <ul>data (pyDataSet).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
parameters = {
    'includeChildren': True,
    'assetTypeId': 1,
    'parentTypeId': 2,
    'enabled': True,
    'assetTypeName': 'site',
    'assetTypePath': 'enterprise\site'
}
asset_types_info = system.kanoa.asset.getAssetTypes(parameters)


