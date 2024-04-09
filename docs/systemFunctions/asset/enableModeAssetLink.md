---
id: enableModeAssetLink
title: system.kanoa.asset.enableModeAssetLink
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Update the modeAssetLink enabled mode. If the mode is disabled, we will not update the link. The mode needs to be enabled first (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>enableModeAssetLink(modeAssetLinkId, enabled)</b>
    <li> Parameters <br />
        <ul>modeAssetLinkId (int) - The ID of the modeAssetLink</ul>
        <ul>enabled (boolean) - Indicates whether to enable or disable the modeAssetLink</ul>
    </li>
    <li> Returns <br />
        <ul># of records modified (int)</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
records_modified = system.kanoa.asset.enableModeAssetLink(123, True)
print(f"{records_modified} records modified for modeAssetLink with ID 123.")
