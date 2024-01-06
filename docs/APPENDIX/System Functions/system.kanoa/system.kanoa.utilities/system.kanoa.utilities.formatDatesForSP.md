---
id: formatDatesForSP
title: system.kanoa.utilities.formatDatesForSP
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">When passing a date to a stored procedure, it needs to be converted to the timezone of the SQL Server (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>formatDatesForSP(datesIn)</b>
    <li>Parameters <br />
        <ul>datesIn (List) - List of dates to be converted (e.g., [startDate, endDate]).</ul>
    </li>
    <li>Returns <br />
        <ul>datesOut (List) - List of converted dates.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
converted_dates = system.kanoa.utilities.formatDatesForSP([startDate, endDate])

