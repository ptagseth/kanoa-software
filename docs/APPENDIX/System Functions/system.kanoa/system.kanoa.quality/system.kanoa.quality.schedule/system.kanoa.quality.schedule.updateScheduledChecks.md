---
id: updateScheduledChecks
title: system.kanoa.quality.schedule.updateScheduledChecks
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is not part of a class and can be used independently.</PurpleBox>
<HeaderBox header="Description">
    This function is called by the gateway timer script every minute and also by the manual add and line tag change event scripts (kanoaQDS).
    It updates the status from coming due to due to overdue, etc.
</HeaderBox>
<HeaderBox header="Syntax">
  <b>updateScheduledChecks()</b>
  <li>Parameters: None<br /></li>
  <li>Returns: <br />
    <ul>Number of checks updated (int).</ul>
  </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
result = system.kanoa.quality.schedule.updateScheduledChecks()