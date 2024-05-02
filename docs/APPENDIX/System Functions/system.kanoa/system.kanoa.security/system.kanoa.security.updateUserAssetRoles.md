---
id: updateUserAssetRoles
title: system.kanoa.security.updateUserAssetRoles
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Updates the specific asset roles of the user</HeaderBox>

<HeaderBox header="Syntax">
    <b>updateUserAssetRoles(paramsDict) </b>
    <li> Parameters <br />
        <ul>paramsDict: (Dictionary)  i.e. &#123;'userId': 18, 'userAssetRole': 3, 'assetId': 16, 'roleId': 1}<br /> </ul>
    </li>
    <li> Returns <br />
        <ul>none<br /> </ul>
    </li>
</HeaderBox>


### Code Examples

```py
system.kanoa.security.updateUserAssetRoles({'userId': 18, 'userAssetRole': 3, 'assetId': 16, 'roleId': 1})

```