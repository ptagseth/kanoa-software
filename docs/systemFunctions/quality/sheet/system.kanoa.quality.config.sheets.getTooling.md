---
id: getTooling
title: system.kanoa.quality.config.sheets.getTooling
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Gets tooling linked to a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getTooling(chkShtId)</b>
    <li> Parameters <br />
        <ul>chkShtId - ID of the check sheet (int).</ul>
    </li>
    <li> Returns <br />
        <ul>data - A dataset containing information about tooling linked to the check sheet (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
tooling_data = system.kanoa.quality.config.sheets.getTooling(chkShtId=chk_sht_id)

print(tooling_data)