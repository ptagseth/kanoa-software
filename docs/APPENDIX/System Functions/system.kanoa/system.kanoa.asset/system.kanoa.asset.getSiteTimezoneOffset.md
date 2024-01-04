---
id: getSiteTimezoneOffset
title: system.kanoa.asset.getSiteTimezoneOffset
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Given an assetPath, this function will return the offset and timezone for the site (kanoaCore)</HeaderBox>
<HeaderBox header="Syntax">
    <b>getSiteTimezoneOffset(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict (dictionary) - Expecting either &#123;'assetId': 1} or &#123;'assetPath': 'Kanoa Industries\Adelaide Hills\Packaging\Line 1'}. &#123;'startDate': someDate} will return offset minutes for the passed-in time. If no startDate is provided, the current timezone offset will be returned</ul>
    </li>
    <li> Returns <br />
        <ul>tzOffSetMins (int) - Timezone offset in minutes</ul>
        <ul>timeZone (str) - Timezone information</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
timezone_offset, timezone_info = getSiteTimezoneOffset({'assetId': 1})
