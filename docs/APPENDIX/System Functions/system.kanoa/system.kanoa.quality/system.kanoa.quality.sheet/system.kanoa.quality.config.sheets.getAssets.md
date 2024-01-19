---
id: getAssets
title: system.kanoa.quality.config.sheets.getAssets
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Gets all assets linked to a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAssets(chkShtId)</b>
    <li> Parameters <br />
        <ul>
            <li>chkShtId - ID of the check sheet (int).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>data - A dataset containing information about assets linked to the check sheet (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
assets_data = system.kanoa.quality.config.sheets.getAssets(chkShtId=chk_sht_id)

print(assets_data)

