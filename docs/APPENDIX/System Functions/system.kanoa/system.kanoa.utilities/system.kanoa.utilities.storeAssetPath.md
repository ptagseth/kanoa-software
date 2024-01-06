---
id: storeAssetPath
title: system.kanoa.utilities.storeAssetPath
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">Stores the passed-in date range to make it persistent across views in the current tab (page) (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>storeAssetPath(self, assetPath)</b>
    <li>Parameters <br />
        <ul>self (Page object) - The instance of the page object.</ul>
        <ul>assetPath (String) - The assetPath to be stored.</ul>
    </li>
    <li>Returns <br />
        <ul>None</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
system.kanoa.utilities.storeAssetPath(self, 'example_asset_path')

