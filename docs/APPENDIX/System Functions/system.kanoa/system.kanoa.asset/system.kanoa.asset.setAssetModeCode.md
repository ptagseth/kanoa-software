---
id: setAssetModeCode
title: system.kanoa.asset.setAssetModeCode
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates the mode code for an asset/mode combo (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>setAssetModeCode(modeAssetLinkId, modeCode)</b>
    <li> Parameters <br />
        <ul>modeAssetLinkId (int) - The ID of the modeAssetLink</ul>
        <ul>modeCode (int) - The new mode code</ul>
    </li>
    <li> Returns <br />
        <ul># of records modified (int)</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
records_modified, error_msg = system.kanoa.asset.setAssetModeCode(123, 456)
if records_modified is not None:
    print(f"{records_modified} records modified for modeAssetLink with ID 123.")
else:
    print(f"Error: {error_msg}")

