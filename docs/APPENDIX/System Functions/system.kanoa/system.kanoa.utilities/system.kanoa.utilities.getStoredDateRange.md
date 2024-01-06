---
id: getStoredDateRange
title: system.kanoa.utilities.getStoredDateRange
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
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

