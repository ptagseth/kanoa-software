---
id: convertSQLTimeStamp
title: system.kanoa.utilities.convertSQLTimeStamp
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Converts a java.util.date or SQL Timestamp object to a java.util.date object (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>convertSQLTimeStamp(timeStamp)</b>
    <li>Parameters <br />
        <ul>timeStamp (java.util.date or SQL Timestamp) - The input timestamp object.</ul>
    </li>
    <li>Returns <br />
        <ul>java.util.date - A java.util.date object.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
converted_date = system.kanoa.utilities.convertSQLTimeStamp(timeStamp)
