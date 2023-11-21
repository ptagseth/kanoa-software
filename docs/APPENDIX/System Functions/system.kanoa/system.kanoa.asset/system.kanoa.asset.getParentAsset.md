---
id: getParentAsset
title: system.kanoa.asset.getParentAsset
sidebar_position: 7
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns a parent asset of the given type for the given asset. e.g. getParentAsset('site', 'Kanoa Industries\Adelaide Hills\Packaging\Line 1') will return the asset for 'Kanoa Industries\Adelaide Hills'</HeaderBox>

<HeaderBox header="Syntax">
    <b>getParentAsset(assetTypeName: PyObject, assetPath: PyObject)</b>
    <li> Parameters <br />
        <ul> assetTypeName: PyObject - name of asset type i.e. 'enterprise', 'site' </ul>
        <ul> assetPath: PyObject </ul>
    </li>
    <li> Returns <br />
        <ul> (PyDataset) the resultant query </ul>
    </li>
</HeaderBox>

### Code Examples

```py
# This returns the parent asset site of Kanoa Industries\Adelaide Hills\Packaging\Line 1

assetType = 'site'
path = 'Kanoa Industries\Adelaide Hills\Packaging\Line 1'
data=system.kanoa.asset.getParentAsset(assetType, path)

```
