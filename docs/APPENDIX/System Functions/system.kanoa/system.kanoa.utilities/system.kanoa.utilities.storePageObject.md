---
id: storePageObject
title: system.kanoa.utilities.storePageObject
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Stores the passed-in object as a session object specific to the current page (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>storePageObject(self, objName, dictObject)</b>
    <li>Parameters <br />
        <ul>self (Page Object) - The page object.</ul>
        <ul>objName (String) - Name of the object (e.g., 'dateRange').</ul>
        <ul>dictObject (Dictionary) - Values to be stored (e.g., &#123;'startDate': startDate, 'endDate': endDate, 'selectedRange': selectedRange}).</ul>
    </li>
    <li>Returns <br />
        <ul>None</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
system.kanoa.utilities.storePageObject(page_object, 'dateRange', {'startDate': startDate, 'endDate': endDate, 'selectedRange': selectedRange})
