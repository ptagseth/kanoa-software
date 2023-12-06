---
id: storePageObject
title: system.kanoa.utilities.storePageObject
sidebar_position: 28
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Stores the passed in object as a session object specific to the current page</HeaderBox>

<HeaderBox header="Syntax">
    <b>storePageObject(self: PyObject, objName: PyObject, dictObject: PyObject)</b>
    <li> Parameters <br />
        <ul>self: PyObject (Dictionary) page object</ul>
        <ul>objName: PyObject (String) name of object</ul>
        <ul>dictObject: PyObject (Dictionary) values to be stored i.e. &#123;'startDate': startDate, 'endDate': endDate, 'selectedRange': selectedRange}</ul>
    </li>
    <li> Returns <br />
        <ul>None</ul>
    </li>
</HeaderBox>

### Code Examples

```py 


```