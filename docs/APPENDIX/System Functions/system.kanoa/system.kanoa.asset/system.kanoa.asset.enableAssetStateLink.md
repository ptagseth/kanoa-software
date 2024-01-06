---
id: enableAssetStateLink
title: system.kanoa.asset.enableAssetStateLink
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates the stateAssetLink enabled state. If the state is disabled, it will not update the link. The state needs to be enabled first (kanoaOPS)</HeaderBox>
<HeaderBox header="Syntax">
    <b>enableAssetStateLink(stateAssetLinkId, enabled)</b>
    <li> Parameters <br />
        <ul>stateAssetLinkId (int) - The ID of the state asset link</ul>
        <ul>enabled (boolean) - The desired state of the link</ul>
    </li>
    <li> Returns <br />
        <ul># of records modified (int)</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
modified_records = system.kanoa.asset.enableAssetStateLink(123, True)
