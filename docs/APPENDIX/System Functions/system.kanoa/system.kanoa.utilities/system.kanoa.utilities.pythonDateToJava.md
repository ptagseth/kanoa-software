---
id: pythonDateToJava
title: system.kanoa.utilities.pythonDateToJava
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">Converts python datetime object to java.util.date object (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>pythonDateToJava(date)</b>
    <li>Parameters <br />
        <ul>date (Datetime) - The Python datetime object.</ul>
    </li>
    <li>Returns <br />
        <ul>date (Java.util.date) - The Java.util.date object.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
java_util_date = system.kanoa.utilities.pythonDateToJava(python_datetime)

