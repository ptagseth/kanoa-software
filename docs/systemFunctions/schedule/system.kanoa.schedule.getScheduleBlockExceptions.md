---
id: getScheduleBlockExceptions
title: system.kanoa.schedule.getScheduleBlockExceptions
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Returns schedule block exceptions.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getScheduleBlockExceptions(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (dictionary) - Parameters for filtering exceptions. E.g., &#123;'startDate': somedate, 'endDate': somedate} or &#123;'scheduleBlockId': 67}.</ul>
    </li>
    <li>Returns <br />
        <ul>Schedule block exception data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
params_dict = {'scheduleBlockId': 123}
exception_data = system.kanoa.schedule.getScheduleBlockExceptions(params_dict)

