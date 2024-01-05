---
id: unlinkAssetState
title: system.kanoa.asset.unlinkAssetState
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Checks to see if this state has been stored in the stateEvent table and disables it if it has otherwise deletes it (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>unlinkAssetState(stateAssetLinkId)</b>
    <li> Parameters <br />
        <ul>stateAssetLinkId - Link ID of the state to be unlinked.</ul>
    </li>
    <li> Returns <br />
        <ul>Status message (str).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
state_asset_link_id = 123
status_message = unlinkAssetState(state_asset_link_id)
