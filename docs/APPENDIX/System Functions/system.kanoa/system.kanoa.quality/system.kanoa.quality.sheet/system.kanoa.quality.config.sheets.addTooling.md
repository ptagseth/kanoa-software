---
id: addTooling
title: system.kanoa.quality.config.sheets.addTooling
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds links between a check sheet and a list of tools in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addTooling(chkShtId, toolingIdList, userId)</b>
    <li> Parameters <br />
        <ul>chkShtId - ID of the check sheet (int).</ul>
        <ul>toolingIdList - List of tooling IDs (list of int).</ul>
        <ul>userId - User ID (int).</ul>
    </li>
    <li> Returns <br />
        <ul># of records created - Number of records created (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
tooling_id_list = [1, 2, 3]
user_id = 123
records_created = system.kanoa.quality.config.sheets.addTooling(chkShtId=chk_sht_id, toolingIdList=tooling_id_list, userId=user_id)

print(records_created)