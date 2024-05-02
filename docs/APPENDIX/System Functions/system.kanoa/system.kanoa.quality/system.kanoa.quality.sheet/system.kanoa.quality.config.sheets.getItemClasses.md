---
id: getItemClasses
title: system.kanoa.quality.config.sheets.getItemClasses
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Gets all item classes linked to a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getItemClasses(chkShtId)</b>
    <li> Parameters <br />
        <ul>chkShtId - ID of the check sheet (int).</ul>
    </li>
    <li> Returns <br />
        <ul>data - A dataset containing information about item classes linked to the check sheet (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
item_classes_data = system.kanoa.quality.config.sheets.getItemClasses(chkShtId=chk_sht_id)

print(item_classes_data)
