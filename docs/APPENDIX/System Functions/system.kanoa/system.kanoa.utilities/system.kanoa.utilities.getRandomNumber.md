---
id: getRandomNumber
title: system.kanoa.utilities.getRandomNumber
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns a random number between the start and end values (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getRandomNumber(start, end)</b>
    <li>Parameters <br />
        <ul>start (Integer) - The start value of the random range.</ul>
        <ul>end (Integer) - The end value of the random range.</ul>
    </li>
    <li>Returns <br />
        <ul>random number (Integer) - A random integer within the specified range.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
random_value = system.kanoa.utilities.getRandomNumber(start, end)

