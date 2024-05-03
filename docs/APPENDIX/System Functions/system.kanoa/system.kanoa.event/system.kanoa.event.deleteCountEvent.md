---
id: deleteCountEvent
title: system.kanoa.event.deleteCountEvent
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Deletes a specific count entry in the counterEvent table.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteCountEvent(counterEventId, userId)</b>
    <li>Parameters <br />
        <ul>counterEventId - Counter event ID.</ul>
        <ul>userId - User ID.</ul>
    </li>
    <li>Returns <br />
        Records modified (int).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
counterEventId = 123
userId = 999
recordsModified = system.kanoa.event.deleteCountEvent(counterEventId, userId)

