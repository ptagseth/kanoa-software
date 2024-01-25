---
id: getAssetTagInfo
title: system.kanoa.quality.event.getAssetTagInfo
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Gets the current asset status values from the qds/assetInfo UDT at the given tagPath in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAssetTagInfo(tagPath)</b>
    <li> Parameters <br />
        <ul>
            <li>tagPath - Tag path for the asset status values (string).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>assetTagInfo - Dictionary containing current asset status values (dictionary).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
tag_path = '[default]path/to/asset'
asset_tag_info = system.kanoa.quality.event.getAssetTagInfo(tagPath=tag_path)

print(asset_tag_info)