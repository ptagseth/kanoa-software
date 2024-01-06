---
id: getPageObject
title: system.kanoa.utilities.getPageObject
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">Retrieves an object identified by 'objName' from the session's properties (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getPageObject(self, objName)</b>
    <li>Parameters <br />
        <ul>self (Class Instance) - The instance of the class where this method is defined.</ul>
        <ul>objName (String) - The name of the object to retrieve.</ul>
    </li>
    <li>Returns <br />
        <ul>Object or None (Object) - The object associated with 'objName' if found in the session's custom data. Returns None if the object is not found or if certain conditions are not met.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
obj = system.kanoa.utilities.getPageObject(self, 'exampleObject')

