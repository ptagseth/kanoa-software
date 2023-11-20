---
id: formatPath
title: system.kanoa.utilities.formatPath
sidebar_position: 2
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

### Description
Takes a string 'path' and replaces the splitKey with the delimiter 

### Syntax
**formatPath(path, paramsDict)**

- **Parameters**  
    path: PyObject - path string, i.e. 'Kanoa Industries\Adelaide Hills\Packaging'

    paramsDict: PyDictionary - Dictionary i.e. {'drop': 'Kanoa Industries', 'delimiter': ' > ', 'splitKey': '\', 'locale': 'en-US'}

- **Returns**  
    path string after being reformatted i.e. 'Adelaide Hills > Packaging'


### Code Examples

```py

# This returns the path with "Kanoa Industries" dropped and the new delimeter

path = 'Kanoa Industries\Adelaide Hills\Packaging'
paramsDict = {'drop': 'Kanoa Industries', 'delimiter': ' > ', 'splitKey' : '\\' }
system.kanoa.utilities.formatPath(path, paramsDict)


```