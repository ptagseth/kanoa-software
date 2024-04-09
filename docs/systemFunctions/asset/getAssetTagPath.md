---
id: getAssetTagPath
title: system.kanoa.asset.getAssetTagPath
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Given an assetPath or assetId, this function will return the tag path. (kanoaCore)</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAssetTagPath(paramDict)</b>
    <li> Parameters <br />
        <ul>paramDict (Dictionary) - &#123;'assetPath': 'Kanoa Industries\Adelaide Hills\Packaging\Line 1'} or &#123;'assetId': 18}</ul>
    </li>
    <li> Returns <br />
        <ul>PyDataset</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
tag_path = system.kanoa.asset.getAssetTagPath({'assetPath': 'Kanoa Industries\Adelaide Hills\Packaging\Line 1'})
print(f"The tag path is: {tag_path}")
