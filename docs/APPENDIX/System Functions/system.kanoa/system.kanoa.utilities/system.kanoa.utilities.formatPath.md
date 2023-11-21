---
id: formatPath
title: system.kanoa.utilities.formatPath
sidebar_position: 2
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Takes a string 'path' and replaces the splitKey with the delimiter</HeaderBox>

<HeaderBox header="Syntax">
    <b>formatPath(path, paramsDict)</b>
    <li> Parameters <br />
        <ul> path: PyObject - path string, i.e. 'Kanoa Industries\Adelaide Hills\Packaging' </ul>
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123; 'drop': 'Kanoa Industries', 'delimiter': ' > ', 'splitKey': '\', 'locale': 'en-US'} </ul>
    </li>
    <li> Returns <br />
        <ul> path string after being reformatted i.e. 'Adelaide Hills > Packaging' </ul>
    </li>
</HeaderBox>

### Code Examples

```py

# This returns the path with "Kanoa Industries" dropped and the new delimeter

path = 'Kanoa Industries\Adelaide Hills\Packaging'
paramsDict = {'drop': 'Kanoa Industries', 'delimiter': ' > ', 'splitKey' : '\\' }
system.kanoa.utilities.formatPath(path, paramsDict)


```