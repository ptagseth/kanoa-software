---
id: getFiles
title: system.kanoa.qds.config.sheets.getFiles
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Gets files linked to a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getFiles(chkShtId)</b>
    <li> Parameters <br />
        <ul>
            <li>chkShtId - ID of the check sheet (int).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>data - A dataset containing information about files linked to the check sheet (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
files_data = system.kanoa.qds.config.sheets.getFiles(chkShtId=chk_sht_id)

print(files_data)

