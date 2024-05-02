---
id: getClosestAncestorWithShifts
title: system.kanoa.shift.getClosestAncestorWithShifts
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Returns the assetPath with shifts associated to it, in order of the asset path tree. Returns None if no shifts are associated (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getClosestAncestorWithShifts(assetPath, rangeStart, rangeEnd, siteOffsetMins, deviceUTCOffsetHrs, counter)</b>
    <li>Parameters <br />
        <ul>assetPath (String) - Asset path.</ul>
        <ul>rangeStart (Datetime) - Start date of the range.</ul>
        <ul>rangeEnd (Datetime) - End date of the range.</ul>
        <ul>siteOffsetMins (Integer) - Site offset in minutes.</ul>
        <ul>deviceUTCOffsetHrs (Float) - Device UTC offset in hours.</ul>
        <ul>counter (int) - max number of ancestors to review</ul>
    </li>
    <li>Returns <br />
        <ul>AssetPath (String) or None.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
closestAncestor = system.kanoa.shift.getClosestAncestorWithShifts('someAssetPath', someStartDate, someEndDate, 60, 5.5, 3)