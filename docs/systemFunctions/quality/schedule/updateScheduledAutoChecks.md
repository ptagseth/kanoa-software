---
id: updateScheduledAutoChecks
title: system.kanoa.quality.schedule.updateScheduledAutoChecks
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaQDS</b> module</PurpleBox>

<HeaderBox header="Description">
  IntervalTimer check generates all checks that are coming due. This function looks for scheduled checks set to 'auto' and processes them in the KanoaQDS (Quality Data System).
</HeaderBox>

<HeaderBox header="Syntax">
  <b>updateScheduledAutoChecks()</b>
  <li>Parameters: None<br /></li>
  <li>Returns<br />
    <ul>int count - Number of checks processed</ul>
  </li>
</HeaderBox>

### Code Examples

```python
# Example usage
result = system.kanoa.quality.schedule.updateScheduledAutoChecks()
print(f"Number of checks processed: {result}")