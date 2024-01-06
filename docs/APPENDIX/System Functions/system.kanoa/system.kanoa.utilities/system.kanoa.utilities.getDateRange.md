---
id: getDateRange
title: system.kanoa.utilities.getDateRange
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">Returns predefined date ranges (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getDateRange(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - A dictionary containing 'selectedDateRange' and 'clientTZOffset' values.</ul>
    </li>
    <li>Returns <br />
        <ul>startDate (Datetime) - The start date of the selected range.</ul>
        <ul>endDate (Datetime) - The end date of the selected range.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
date_range = system.kanoa.utilities.getDateRange({'selectedDateRange': 'Today', 'clientTZOffset': 0})

