---
id: getAssetStates
title: system.kanoa.asset.getAssetStates
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Gets asset states (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAssetStates(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict (dict) - A dictionary containing optional parameters for filtering:
            - 'stateAssetLinkId' (int): Filter by state asset link ID.
            - 'enabled' (bool): Filter by enabled status.
            - 'assetPath' (str): Filter by asset path.
            - 'assetTypeName' (str): Filter by asset type name.
            - 'assetId' (int): Filter by asset ID.
            - 'assetIdList' (list of str): Filter by a list of asset IDs.
            - 'stateId' (int): Filter by state ID.
            - 'stateName' (str): Filter by state name.
            - 'stateCode' (str): Filter by state code.
            - 'stateTypeName' (str): Filter by state type name.
            - 'stateCategoryId' (int): Filter by state category ID.
            - 'stateCategoryName' (str): Filter by state category name.
        </ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset - A dataset containing asset state information.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
state_params = {
    'enabled': True,
    'assetPath': 'Kanoa Industries%',
    'assetId': 1,
    'assetTypeName': 'site',
    'stateId': 1,
    'stateName': 'Running',
    'stateTypeName': 'Running'
}
asset_states = system.kanoa.asset.getAssetStates(state_params)