---
id: getSiteTimezoneOffset
title: system.kanoa.asset.getSiteTimezoneOffset
sidebar_position: 11
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description"> </HeaderBox>

<HeaderBox header="Syntax">
    <b>getSiteTimezoneOffset(paramsDict: PyDictionary) </b>
    <li> Parameters <br />
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123;'assetId': 1} or &#123;'assetPath': 'Kanoa IndustriesAdelaide HillsPackagingLine 1'} </ul>
    </li>
    <li> Returns <br />
        <ul>(int, String) timezone UTC offset in minutes, name of timezone <br /> </ul>
    </li>
</HeaderBox>

### Code Examples

```py

#This returns the time offset in minutes and the name of the timezone for assetID 1

paramsDict = {'assetId': 1}
system.kanoa.asset.getSiteTimezoneOffset(paramsDict)
```