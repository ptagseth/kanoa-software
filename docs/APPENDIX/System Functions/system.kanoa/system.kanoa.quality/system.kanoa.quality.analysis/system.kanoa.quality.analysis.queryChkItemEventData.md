---
id: queryChkItemEventData
title: system.kanoa.quality.analysis.queryChkItemEventData
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Pulls the check item event data and displays it in the chart in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>queryChkItemEventData(chkItemId, startDate, endDate, minRange, maxRange)</b>
    <li> Parameters <br />
        <ul>
            <li>chkItemId - ID of the check item (int).</li>
            <li>startDate - Start date for the query (datetime).</li>
            <li>endDate - End date for the query (datetime).</li>
            <li>minRange - Minimum range value (int).</li>
            <li>maxRange - Maximum range value (int).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>data - A dataset containing check item event data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_item_id = 123
start_date = system.date.getDate(2023, 1, 1)
end_date = system.date.getDate(2023, 12, 31)
min_range = 10
max_range = 100
data = system.kanoa.quality.analysis.queryChkItemEventData(chkItemId=chk_item_id, startDate=start_date, endDate=end_date, minRange=min_range, maxRange=max_range)

print(data)