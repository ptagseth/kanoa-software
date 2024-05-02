---
id: getStoredDateRange
title: system.kanoa.utilities.getStoredDateRange
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Gets the stored date range for the page to make the date selector persistent across views in the current tab (page) (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getStoredDateRange(self)</b>
    <li>Parameters <br />
        <ul>self (Page object) - The instance of the page object.</ul>
    </li>
    <li>Returns <br />
        <ul>selectedDateRange (Dictionary) - A dictionary containing 'startDate', 'endDate', and 'selectedRange'.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
stored_date_range = system.kanoa.utilities.getStoredDateRange(self)

