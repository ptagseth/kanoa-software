---
id: getAvgChkItemEventsByRow
title: system.kanoa.quality.analysis.getAvgChkItemEventsByRow
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns Check Sheet item event data averaged across all measurement counts for the given parameters with the check items in each row in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAvgChkItemEventsByRow(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict - Dictionary containing parameters (dictionary).</ul>
    </li>
    <li> Returns <br />
        <ul>data - A dataset containing averaged check sheet item event data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
params_dict = {'startDate': system.date.getDate(2023, 1, 1), 'endDate': system.date.getDate(2023, 12, 31), 'chkShtId': 123}
data, error = system.kanoa.quality.analysis.getAvgChkItemEventsByRow(paramsDict=params_dict)

print(data)
