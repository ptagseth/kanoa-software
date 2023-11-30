---
id: getModeTypes
title: system.kanoa.asset.getModeTypes
sidebar_position: 11
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns mode types filtered by the given parameters  </HeaderBox>

<HeaderBox header="Syntax">
    <b>getModeTypes(paramsDict: PyDictionary) </b>
    <li> Parameters <br />
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123;'enabled':True, 'modeTypeId':1, 'modeTypeName':'Production'} </ul>
    </li>
    <li> Returns <br />
        <ul>(PyDataset) the resultant query <br /> </ul>
    </li>
</HeaderBox>

### Code Examples

```py
# This returns the enabled Mode Types

paramsDict = {'enabled':True }
system.kanoa.asset.getModeTypes(paramsDict)
```