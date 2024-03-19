---
id: addCountEvent
title: system.kanoa.event.addCountEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Adds a count value to the counterEvent table.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>addCountEvent(counterId, deltaValue, tStamp)</b>
    <li>Parameters <br />
        <ul>counterId - Counter ID.</ul>
        <ul>deltaValue (float) - Delta value.</ul>
        <ul>tStamp (datetime) - Timestamp.</ul>
    </li>
    <li>Returns <br />
        <ul>counterId (int).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
counterId = 123
deltaValue = 5.0
tStamp = timestamp
system.kanoa.event.addCountEvent(counterId, deltaValue, tStamp)