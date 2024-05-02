---
id: linkAssetModes
title: system.kanoa.asset.linkAssetModes
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Links modes with assets (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>linkAssetModes(assetIdList, modeList, userId, modeCodeList=[])</b>
    <li> Parameters <br />
        <ul>assetIdList (list) - List of assetId's</ul>
        <ul>modeList (list) - List of modeIds</ul>
        <ul>userId (int) - User ID</ul>
        <ul>modeCodeList (list) - List of mode codes (optional)</ul>
    </li>
    <li> Returns <br />
        <ul>None</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
system.kanoa.asset.linkAssetModes([1, 2, 3], [101, 102, 103], 456, ['Code1', 'Code2', 'Code3'])

