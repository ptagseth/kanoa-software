---
id: getModes
title: system.kanoa.asset.getModes
sidebar_position: 10
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns modes filtered by the given parameters  </HeaderBox>

<HeaderBox header="Syntax">
    <b>getModes(paramsDict: PyDictionary) </b>
    <li> Parameters <br />
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123;'enabled':True, 'modeName': 'Production', 'modeId': 1, 'modeTypeId':1, 'modeTypeName':'Production', 'canSelect':True, 'canSchedule':True} </ul>
    </li>
    <li> Returns <br />
        <ul>(PyDataset) the resultant query <br /> </ul>
    </li>
</HeaderBox>

### Code Examples

```py

# This returns the list of configuration values for the requested mode - ModeId 1

paramsDict = {'modeId': 1}
system.kanoa.asset.getModes(paramsDict)

```