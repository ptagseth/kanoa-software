---
id: getStoredAssetPath
title: system.kanoa.utilities.getStoredAssetPath
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Gets the stored assetPath for the page to make the asset selector persistent across views in the current tab (page) (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getStoredAssetPath(self)</b>
    <li>Parameters <br />
        <ul>self (Page object) - The instance of the page object.</ul>
    </li>
    <li>Returns <br />
        <ul>assetPath (String) - The stored assetPath for the page.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
stored_asset_path = system.kanoa.utilities.getStoredAssetPath(self)

