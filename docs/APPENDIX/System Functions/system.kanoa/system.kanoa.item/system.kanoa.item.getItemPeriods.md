---
id: getItemPeriods
title: system.kanoa.item.getItemPeriods
sidebar_position: 4
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns an item period</HeaderBox>

<HeaderBox header="Syntax">
    <b>getItemPeriods(paramsDict: PyDictionary)</b>
    <li> Parameters <br />
        <ul> paramsDict: PyDictionary - (Dictionary) i.e. &#123;'enabled':True, 'itemPeriodId': 2, 'itemPeriodName': 'Minute'} </ul>
    </li>
    <li> Returns <br />
        <ul> (PyDataset) row corresponding to searched item period </ul>
    </li>
</HeaderBox>

### Code Examples

```py
# This returns the time period info for time period item named 'Hour' and enabled

paramsDict = {'enabled': True, 'itemPeriodName': 'Hour'}
system.kanoa.item.getItemPeriods(paramsDict)

```