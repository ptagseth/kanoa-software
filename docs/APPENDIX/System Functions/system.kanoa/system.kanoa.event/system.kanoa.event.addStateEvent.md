---
id: addStateEvent
title: system.kanoa.event.addStateEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Adds a stateEvent record.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>addStateEvent(stateInfo, userId)</b>
    <li>Parameters <br />
        <ul>
            stateInfo - Dictionary &#123;'assetId': 18, 'assetStateId': 18, 'stateCode': 1, 'tStamp': somedate}.
            userId - User ID.
        </ul>
    </li>
    <li>Returns <br />
        stateInfo (dictionary).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
stateInfo = {'assetId': 18, 'assetStateId': 18, 'stateCode': 1, 'tStamp': somedate}
userId = 999
stateInfo = system.kanoa.event.addStateEvent(stateInfo, userId)

