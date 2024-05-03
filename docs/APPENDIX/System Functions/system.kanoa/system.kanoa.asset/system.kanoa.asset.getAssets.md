---
id: getAssets
title: system.kanoa.asset.getAssets
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns asset information based on the provided parameters from the 'kanoaCore' system.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAssets(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict (dict) - A dictionary containing parameters to filter assets. Available keys include:<br />
            - 'enabled' (bool): Filter by asset's enabled status.<br />
            - 'assetPath' (str): Filter by asset path.<br />
            - 'assetTypeName' (str): Filter by asset type name.<br />
            - 'parentId' (int): Filter by parent asset ID.<br />
            - 'assetId' (int): Filter by asset ID.<br />
            - 'assetIdList' (list): Filter by a list of asset IDs.<br />
            - 'oeeType' (str): Filter by OEE type.<br />
            - 'oeeTypeList' (list): Filter by a list of OEE types.<br />
            - 'assetTypeId' (int): Filter by asset type ID.<br />
            - 'assetTypeIdList' (list): Filter by a list of asset type IDs.<br />
            - 'assetGroupIdList' (list): Filter by a list of asset group IDs.<br />
            - 'userId' (int): The ID of the user to apply security filtering.<br />
            - 'userFunction' (str): The function used for user asset role filtering.<br />
        </ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset - A dataset containing asset information.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
asset_data = system.kanoa.asset.getAssets({'enabled': True, 'assetPath': 'Kanoa Industries%', 'assetId': 1})



