---
id: unlinkAssetMode
title: system.kanoa.asset.unlinkAssetMode
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Unlinks a mode from an asset. Checks to see if this mode/asset combo has been stored in the modeEvent table and disables it if it has, otherwise deletes it (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>unlinkAssetMode(modeAssetLinkId)</b>
    <li> Parameters <br />
        <ul>modeAssetLinkId (int) - The ID of the modeAssetLink</ul>
    </li>
    <li> Returns <br />
        <ul>result (string) - 'Deleted' or 'Disabled'</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
result = system.kanoa.asset.unlinkAssetMode(123)
print(f"Result: {result}")
