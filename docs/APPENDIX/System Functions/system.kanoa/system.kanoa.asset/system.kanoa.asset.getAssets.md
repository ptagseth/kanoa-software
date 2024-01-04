---
id: getAssets
title: system.kanoa.asset.getAssets
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns asset information based on the provided parameters from the 'kanoaCore' system.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAssets(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict (dict) - A dictionary containing parameters to filter assets. Available keys include:
            - 'enabled' (bool): Filter by asset's enabled status.
            - 'assetPath' (str): Filter by asset path.
            - 'assetTypeName' (str): Filter by asset type name.
            - 'parentId' (int): Filter by parent asset ID.
            - 'assetId' (int): Filter by asset ID.
            - 'assetIdList' (list): Filter by a list of asset IDs.
            - 'oeeType' (str): Filter by OEE type.
            - 'oeeTypeList' (list): Filter by a list of OEE types.
            - 'assetTypeId' (int): Filter by asset type ID.
            - 'assetTypeIdList' (list): Filter by a list of asset type IDs.
            - 'assetGroupIdList' (list): Filter by a list of asset group IDs.
            - 'userId' (int): The ID of the user to apply security filtering.
            - 'userFunction' (str): The function used for user asset role filtering.
        </ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset - A dataset containing asset information.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
asset_data = getAssets({'enabled': True, 'assetPath': 'Kanoa Industries%', 'assetId': 1})



