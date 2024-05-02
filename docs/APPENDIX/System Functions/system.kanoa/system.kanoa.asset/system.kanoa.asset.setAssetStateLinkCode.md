---
id: setAssetStateLinkCode
title: system.kanoa.asset.setAssetStateLinkCode
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">This function updates the stateCode for an asset. (kanoaOPS)</HeaderBox>
<HeaderBox header="Syntax">
    <b>setAssetStateLinkCode(stateAssetLinkId, stateCode, userId)</b>
    <li> Parameters <br />
        <ul>stateAssetLinkId (int) - The ID of the state asset link</ul>
        <ul>stateCode (int) - The new state code to be set</ul>
        <ul>userId (int) - User ID</ul>
    </li>
    <li> Returns <br />
        <ul># of records modified (int)</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
modified_records, error_msg = system.kanoa.asset.setAssetStateLinkCode(123, 456, 789)
