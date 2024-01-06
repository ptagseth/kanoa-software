---
id: getCountTotal
title: system.kanoa.event.getCountTotal
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Returns the total counts for the given counterId and date range.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getCountTotal(counterId, startDate, endDate)</b>
    <li>Parameters <br />
        <ul>
            counterId - Counter ID.
            startDate (datetime) - Start date.
            endDate (datetime) - End date.
        </ul>
    </li>
    <li>Returns <br />
        countTotal (float).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
counterId = 123
startDate = start_date
endDate = end_date
countTotal = system.kanoa.event.getCountTotal(counterId, startDate, endDate)

