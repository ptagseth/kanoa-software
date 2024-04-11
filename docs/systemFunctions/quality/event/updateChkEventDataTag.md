---
id: updateChkEventDataTag
title: system.kanoa.quality.event.updateChkEventDataTag
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates the [Kanoa]kanoa/qds/ScheduledChecks/chkEventData tag used to show the current status of active checks in KanoaQDS. A view can subscribe to this tag dataset to be notified when the status of an active check is updated.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateChkEventDataTag()</b>
    <li> Parameters <br />
        <ul>None</ul>
    </li>
    <li> Returns <br />
        <ul>None</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
system.kanoa.quality.event.updateChkEventDataTag()