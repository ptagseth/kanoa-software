---
id: getAssetTagPath
title: system.kanoa.asset.getAssetTagPath
sidebar_position: 4
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Given an assetPath or assetId, this function will return the tag path</HeaderBox>

<HeaderBox header="Syntax">
    <b>getAssetTagPath(paramsDict: PyDictionary)</b>
    <li> Parameters <br />
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123;'assetPath': 'Kanoa IndustriesAdelaide HillsPackagingLine 1'} or &#123;'assetId':18} </ul>
    </li>
    <li> Returns <br />
        <ul> tag path of asset <br /> </ul>
    </li>
</HeaderBox>

### Code Examples

```py
#This returns the tag path for assetID 18

paramsDict = {'assetId':18}
data=system.kanoa.asset.getAssetTagPath(paramsDict)
```
