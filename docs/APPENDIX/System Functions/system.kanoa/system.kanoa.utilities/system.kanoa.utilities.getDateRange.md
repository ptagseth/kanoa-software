---
id: getDateRange
title: system.kanoa.utilities.getDateRange
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
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

