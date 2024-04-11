---
id: assetChangeEvent
title: system.kanoa.quality.schedule.assetChangeEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaQDS</b> module</PurpleBox>

<HeaderBox header="Description">
  This function is called by a tag change event to check if any checksheets should become active in the KanoaQDS (Quality Data System). It should only be called whenever the mode or product changes on an asset.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>assetChangeEvent(stateInfo)</b>
  <li>Parameters<br />
      <ul>stateInfo: dictionary containing information about the change event</ul>
  </li>
  <li>Returns<br />
    <ul>None</ul>
  </li>
</HeaderBox>

### Code Examples

```python
# Example usage
stateInfo = {
    'changeType': 'Mode Change',
    'assetId': 123,
    'modeCode': 'xyz',
    'shiftNameId': 1,
    'itemId': 456,
    'toolingId': 789
}

system.kanoa.quality.schedule.assetChangeEvent(stateInfo)