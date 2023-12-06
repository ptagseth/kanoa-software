---
id: translateData
title: system.kanoa.utilities.translateData
sidebar_position: 30 
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Translates the list of columns of the passed in dataset into the given local language</HeaderBox>

<HeaderBox header="Syntax">
    <b>translateData(data: PyObject, colList: PyObject, locale: PyObject)</b>
    <li> Parameters <br />
        <ul>data: PyObject (PyDataset) dataset to be translated</ul>
        <ul>colList: PyObject (list) list of columns to be translated (empty list if all columns)</ul>
        <ul>locale: PyObject (String) locale language to traslate to i.e. 'es'</ul>
    </li>
    <li> Returns <br />
        <ul>(PyDataset) translated dataset</ul>
    </li>
</HeaderBox>

### Code Examples

```py 


```