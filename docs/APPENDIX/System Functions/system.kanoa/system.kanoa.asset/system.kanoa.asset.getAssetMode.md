---
id: getAssetModes
title: system.kanoa.asset.getAssetModes
sidebar_position: 11
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns asset modes filtered by the given parameters </HeaderBox>

<HeaderBox header="Syntax">
    <b>getAssetModes(paramsDict: PyDictionary) </b>
    <li> Parameters <br />
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123;'enabled':True, 'modeName': 'Production', 'modeId': 1, 'modeTypeId':1, 'modeTypeName':'Production', 'canSelect':True, 'canSchedule':True} </ul>
    </li>
    <li> Returns <br />
        <ul>(PyDataset) the resultant query <br /> </ul>
    </li>
</HeaderBox>

### Code Examples

```py
#This returns the asset info for assets using the modes as filtered

paramsDict = {'modeId': 1,'enabled':True,'canSelect':False, 'canSchedule':False }
system.kanoa.asset.getAssetModes(paramsDict)

```