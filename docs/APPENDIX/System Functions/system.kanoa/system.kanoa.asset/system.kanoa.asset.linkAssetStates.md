---
id: linkAssetStates
title: system.kanoa.asset.linkAssetStates
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Links a list of assetIds with a list of stateId (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>linkAssetStates(assetIdList, stateIdList, userId, stateCodeList=[])</b>
    <li> Parameters <br />
        <ul>assetIdList (list) - List of assetId's</ul>
        <ul>stateIdList (list) - List of stateIds</ul>
        <ul>stateCodeList (list) - A list of stateCodes to be used. Can be an empty list</ul>
        <ul>userId (int) - User ID</ul>
    </li>
    <li> Returns <br />
        <ul># of records created (int)</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
system.kanoa.asset.linkAssetStates([1, 2, 3], [101, 102, 103], 456, ['Code1', 'Code2', 'Code3'])
``
