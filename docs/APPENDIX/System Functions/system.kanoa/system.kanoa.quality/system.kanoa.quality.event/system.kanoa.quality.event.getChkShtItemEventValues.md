---
id: getChkShtItemEventValues
title: system.kanoa.quality.event.getChkShtItemEventValues
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Gets the values of the passed chkItemEventId field in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getChkShtItemEventValues(chkShtEventId, chkShtItemId)</b>
    <li> Parameters <br />
        <ul>chkShtEventId - ID of the check sheet event (int).</ul>
        <ul>chkShtItemId - ID of the check sheet item (int).</ul>
    </li>
    <li> Returns <br />
        <ul>data - A dataset containing check sheet item event values (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_event_id = 123
chk_sht_item_id = 456
data = system.kanoa.quality.event.getChkShtItemEventValues(chkShtEventId=chk_sht_event_id, chkShtItemId=chk_sht_item_id)

print(data)
