---
id: getChkItemStateId
title: system.kanoa.quality.event.getChkItemStateId
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Given the check item info and value, this function returns if the check item is passing, failing, or warning in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getChkItemStateId(chkItemInfo, value)</b>
    <li> Parameters <br />
        <ul>
            <li>chkItemInfo - Dictionary containing information about the check item (dictionary).</li>
            <li>value - Value of the check item (int/float/string).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>chkItemStateId - ID of the check item state (int).</ul>
        <ul>message - Additional message (string).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_item_info = {'chkItemEventId': 1, 'chkShtEventId': 3, 'chkItemId': 1, 'measNumber': 1, 'chkItemValue': 'sausages', 'chkItemStateId': 2}
value = 10.5
chk_item_state_id, message = system.kanoa.quality.event.getChkItemStateId(chkItemInfo=chk_item_info, value=value)

print(chk_item_state_id, message)