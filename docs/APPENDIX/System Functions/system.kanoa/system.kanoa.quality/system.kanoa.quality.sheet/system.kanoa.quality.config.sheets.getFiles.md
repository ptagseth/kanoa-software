---
id: getFiles
title: system.kanoa.quality.config.sheets.getFiles
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Gets files linked to a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getFiles(chkShtId)</b>
    <li> Parameters <br />
        <ul>chkShtId - ID of the check sheet (int).</ul>
    </li>
    <li> Returns <br />
        <ul>data - A dataset containing information about files linked to the check sheet (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
files_data = system.kanoa.quality.config.sheets.getFiles(chkShtId=chk_sht_id)

print(files_data)

