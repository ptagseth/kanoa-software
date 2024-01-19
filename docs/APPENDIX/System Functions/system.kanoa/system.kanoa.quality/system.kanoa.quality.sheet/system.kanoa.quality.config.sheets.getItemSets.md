---
id: getItemSets
title: system.kanoa.quality.config.sheets.getItemSets
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Gets all item sets linked to a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getItemSets(chkShtId)</b>
    <li> Parameters <br />
        <ul>
            <li>chkShtId - ID of the check sheet (int).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>data - A dataset containing information about item sets linked to the check sheet (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
item_sets_data = system.kanoa.quality.config.sheets.getItemSets(chkShtId=chk_sht_id)

print(item_sets_data)
