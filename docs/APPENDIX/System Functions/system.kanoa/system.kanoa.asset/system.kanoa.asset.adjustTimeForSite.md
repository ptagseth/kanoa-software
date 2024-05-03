---
id: adjustTimeForSite
title: system.kanoa.asset.adjustTimeForSite
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Given a date, an assetPath, and the client timezone offset in hours, this function will return the date adjusted for the site (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>adjustTimeForSite(dateIn, assetPath, deviceUTCOffsetHrs)</b>
    <li> Parameters <br />
        <ul>dateIn (date) - Input date to adjust.</ul>
        <ul>assetPath (string) - Asset path.</ul>
        <ul>deviceUTCOffsetHrs (float) - Client timezone offset in hours.</ul>
    </li>
    <li> Returns <br />
        <ul>date (date).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
input_date = system.date.now()
asset_path = 'Kanoa Industries\Site1'
device_offset = 5.5
adjusted_date = system.kanoa.asset.adjustTimeForSite(input_date, asset_path, device_offset)

