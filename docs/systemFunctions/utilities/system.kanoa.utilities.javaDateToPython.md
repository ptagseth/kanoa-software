---
id: javaDateToPython
title: system.kanoa.utilities.javaDateToPython
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Converts java.util.date object to python datetime object (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>javaDateToPython(date)</b>
    <li>Parameters <br />
        <ul>date (Java.util.date) - The Java.util.date object.</ul>
    </li>
    <li>Returns <br />
        <ul>datetime (Datetime) - The Python datetime object.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
python_datetime = system.kanoa.utilities.javaDateToPython(java_util_date)


