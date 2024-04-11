---
id: getSecondsSinceLastCheck
title: system.kanoa.quality.schedule.getSecondsSinceLastCheck
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaQDS</b> module</PurpleBox>

<HeaderBox header="Description">
  Returns the seconds since the last scheduled check for a checksheet on an asset in the KanoaQDS (Quality Data System).
</HeaderBox>

<HeaderBox header="Syntax">
  <b>getSecondsSinceLastCheck(paramsDict)</b>
  <li>Parameters<br />
    <ul>dictionary paramsDict - &#123;'chkShtId': 1, 'assetId': 18}</ul>
  </li>
  <li>Returns<br />
      <ul>dictionary &#123;'lastScheduledDate': datetime, 'seconds': int}</ul>
  </li>
</HeaderBox>

### Code Examples

```python
# Example usage
paramsDict = {'chkShtId': 1, 'assetId': 18}
result = system.kanoa.quality.schedule.getSecondsSinceLastCheck(paramsDict)
print(f"Last scheduled date: {result['lastScheduledDate']}, Seconds since last check: {result['seconds']}")