---
id: storeDateRangeSelection
title: system.kanoa.utilities.storeDateRangeSelection
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Stores the passed-in date range to make it persistent across views in the current tab (page) (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>storeDateRangeSelection(self, startDate, endDate, selectedDateRange)</b>
    <li>Parameters <br />
        <ul>self (Page Object) - The page object.</ul>
        <ul>startDate (Datetime) - The start date of the range.</ul>
        <ul>endDate (Datetime) - The end date of the range.</ul>
        <ul>selectedDateRange (String) - Valid values are 'Today', 'Yesterday', 'This Week', 'Last Week', 'This Month', 'Last Month', 'Year To Date', None.</ul>
    </li>
    <li>Returns <br />
        <ul>None</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
system.kanoa.utilities.storeDateRangeSelection(page_object, start_date, end_date, 'This Week')

