---
id: adjustTimeForSite
title: system.kanoa.asset.adjustTimeForSite
sidebar_position: 4
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Given a date, an assetPath, and the client timezone offset in hours, this function will return the date adjusted for the site</HeaderBox>

<HeaderBox header="Syntax">
    <b>adjustTimeForSite(dateIn, assetPath, deviceUTCOffsetHrs) </b>
    <li> Parameters <br />
        <ul>dateIn: PyObject - (datetime) date parameter  <br /> </ul>
        <ul>assetPath: PyObject - (String) asset path <br /> </ul>
        <ul>deviceUTCOffsetHrs - PyObject - (float) timezone difference between device and site's, in hours<br /> </ul>
    </li>
    <li> Returns <br />
        <ul>(datetime) adjusted datetime <br /> </ul>
    </li>
</HeaderBox>

### Code Examples

```py


```