---
id: updateCounter
title: system.kanoa.asset.updateCounter
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates a counter (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateCounter(countInfo, userId)</b>
    <li> Parameters <br />
        <ul>countInfo (dict) - A dictionary containing counter information:
            - 'assetId' (int): ID of the asset.
            - 'counterName' (str): Name of the counter.
            - 'counterTypeId' (int): ID of the counter type.
            - 'counterId' (int): ID of the counter to be updated.
        </ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>records modified (int).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
count_info = {'assetId': 18, 'counterName': 'caps', 'counterTypeId': 1, 'counterId': 10}
user_id = 123
modified_records = system.kanoa.asset.updateCounter(count_info, user_id)
