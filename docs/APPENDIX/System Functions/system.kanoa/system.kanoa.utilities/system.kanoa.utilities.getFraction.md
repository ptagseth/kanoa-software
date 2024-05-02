
---
id: getFraction
title: system.kanoa.utilities.getFraction
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Given a number, this function returns a string representation of the number as a fraction (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getFraction(number)</b>
    <li>Parameters <br />
        <ul>number (Float) - The input float number.</ul>
    </li>
    <li>Returns <br />
        <ul>fraction (String) - A string representation of the number as a fraction.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
fraction_string = system.kanoa.utilities.getFraction(number)

