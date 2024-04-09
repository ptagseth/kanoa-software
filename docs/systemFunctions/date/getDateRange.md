---
id: getDateRange
title: system.kanoa.date.getDateRange
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module.</PurpleBox>
<HeaderBox header="Description">
    Returns predefined date ranges. (kanoaCore)
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getDateRange(paramsDict, selectedDateRange, clientTZ)</b>
    <li>Parameters:<br />
        <ul>paramsDict (dict): A dictionary containing the following keys:</ul>
        <ul>selectedDateRange (str): Valid values are 'Today', 'Yesterday', 'This Week', 'Last Week', 'This Month', 'Last Month', 'Year To Date'</ul>
        <ul>clientTZ (str): Client timezone</ul>
    </li>
    <li>Returns:<br />
        <ul>startDate (datetime): Start date of the range</ul>
        <ul>endDate (datetime): End date of the range</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
startDate, endDate = system.kanoa.date.getDateRange(paramsDict, selectedDateRange, clientTZ)

