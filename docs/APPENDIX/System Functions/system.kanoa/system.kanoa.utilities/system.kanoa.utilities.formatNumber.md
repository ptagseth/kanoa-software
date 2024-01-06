---
id: formatNumber
title: system.kanoa.utilities.formatNumber
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">Given a number or string representation of a number, this function will return the number formatted to the passed-in format (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>formatNumber(format, value)</b>
    <li>Parameters <br />
        <ul>format (String) - Format string (e.g., '#,###.0').</ul>
        <ul>value (Number) - The number to be formatted.</ul>
    </li>
    <li>Returns <br />
        <ul>String - The formatted number.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
formatted_number = system.kanoa.utilities.formatNumber('#,###.0', 12345.678)

