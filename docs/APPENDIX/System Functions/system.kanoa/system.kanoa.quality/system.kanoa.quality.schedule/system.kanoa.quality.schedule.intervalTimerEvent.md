---
id: intervalTimerEvent
title: system.kanoa.quality.schedule.intervalTimerEvent
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is not part of a class and can be used independently.</PurpleBox>
<HeaderBox header="Description">
    This function will be called by a gateway timer function to check if any checksheets that have a 'Timed interval' trigger should become active. (kanoaQDS)
    We will check for checksheets that require an asset and then we will check for sheets that do not require an asset.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>intervalTimerEvent()</b>
    <li>Parameters: None</li>
    <li>Returns: None</li>
</HeaderBox>

### Code Example

```python
# Example Usage:
system.kanoa.quality.schedule.intervalTimerEvent()