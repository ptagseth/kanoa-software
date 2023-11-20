---
id: getAssets
title: system.kanoa.asset.getAssets
sidebar_position: 3
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns asset info for given parameters</HeaderBox>

<HeaderBox header="Syntax">
    <b>getAssets(paramsDict:PyDictionary)</b>
    <li> Parameters <br />
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123;'enabled':True, 'assetPath': 'Kanoa Industries%', 'assetId': 1, 'assetIdList': [1,2,3], 'oeeTypeList':['OEE_Enabled'], 'assetTypeIdList':[1,2,5], 'assetGroupIdList':[2]} </ul>
    </li>
    <li> Returns <br />
        <ul> (PyDataset) the resultant query <br /> </ul>
    </li>
</HeaderBox>


### Code Examples

```py
# This returns a list of all assets NOT set to enabled

paramsDict = {'enabled':False}
data = system.kanoa.asset.getAssets(paramsDict)

```

```py
# This returns a list of all assets set to TRUE

paramsDict = {'enabled':True}
data = system.kanoa.asset.getAssets(paramsDict)

```

```py
# This returns a list of all assets set to OEE Enabled AND with assets path set to start with "Kanoa Industries\Adelaide Hills"

paramsDict = {'assetPath':'Kanoa Industries\Adelaide Hills%', 'oeeTypeList': ['OEE_Enabled']}
data = system.kanoa.asset.getAssets(paramsDict)

```

```py
# This brings back the Asset with Asset ID set to 10

paramsDict = {'assetId':10}
data=system.kanoa.asset.getAssets(paramsDict)

```

```py
# This brings back the list of Assets with Asset ID set to 1, 7 and 10

paramsDict = {'assetIdList':[10,1,7]}
data=system.kanoa.asset.getAssets(paramsDict)

```

```py
# This brings back the list of Assets with OEEType set to OEE_Enabled
 Other values for query:  No OEE

paramsDict = {'oeeTypeList':['OEE_Enabled']}
data=system.kanoa.asset.getAssets(paramsDict)

```

```py
# This brings back the list of Assets with AssetType IDs set to 1, 2 and 5

paramsDict = {'assetTypeIdList':[1,2,5]}
data=system.kanoa.asset.getAssets(paramsDict)

```

```py
# This returns the Asset with Asset GroupID set to 2

paramsDict = {'assetGroupIdList':[2]}
data=system.kanoa.asset.getAssets(paramsDict)

```

