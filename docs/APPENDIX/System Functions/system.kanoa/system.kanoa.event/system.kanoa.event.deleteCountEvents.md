---
id: deleteCountEvents
title: system.kanoa.event.deleteCountEvents
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Sometimes we want to clear a count so that it can be auto-calculated. We probably will want to store old values in case a user wants to revert.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteCountEvents(counterId, startDate, endDate)</b>
    <li>Parameters <br />
        <ul>
            counterId - Counter ID.
            startDate (datetime) - Start date.
            endDate (datetime) - End date.
        </ul>
    </li>
    <li>Returns <br />
        Records modified (int).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
counterId = 123
startDate = start_date
endDate = end_date
recordsModified = system.kanoa.event.deleteCountEvents(counterId, startDate, endDate)

