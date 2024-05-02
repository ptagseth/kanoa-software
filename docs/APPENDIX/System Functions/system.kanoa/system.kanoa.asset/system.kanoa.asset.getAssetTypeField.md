---
id: getAssetTypeField
title: system.kanoa.asset.getAssetTypeField
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns a single value for the asset type as described by the paramsDict. If no asset is found, null will be returned </HeaderBox>

<HeaderBox header="Syntax">
    <b>getAssetTypeField(field, paramsDict)</b>
    <li> Parameters <br />
        <ul>String - the name of the asset type's field/column name<br /> </ul>
        <ul>paramsDict - PyDictionary (Dictionary) i.e. &#123;'enabled': True, 'assetTypeName': 'site', 'assetTypePath': 'enterprise/region/site', 'assetTypeId': 6, 'parentId': 4}<br /> </ul>
    </li>
    <li> Returns <br />
        <ul>PyObject - the value of the asset type's field<br /> </ul>
    </li>
</HeaderBox>

### Code Examples

```py


```