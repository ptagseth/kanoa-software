---
id: updateStateEvent
title: system.kanoa.event.updateStateEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Updates a stateEvent record.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateStateEvent(stateInfo, userId)</b>
    <li>Parameters <br />
        <ul>stateInfo - Dictionary &#123;'assetStateId': 1, 'origAssetId': 2, 'stateCode': 4, 'origStateCode':7, 'note': 'updated', 'stateEventId': 567}.</ul>
        <ul>userId - User ID.</ul>
    </li>
    <li>Returns <br />
        stateInfo (dictionary).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
stateInfo = {'assetStateId': 1, 'origAssetId': 2, 'stateCode': 4, 'origStateCode':7, 'note': 'updated', 'stateEventId': 567}
userId = 999
stateInfo = system.kanoa.event.updateStateEvent(stateInfo, userId)


