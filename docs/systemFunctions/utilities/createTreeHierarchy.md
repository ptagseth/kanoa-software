---
id: createTreeHierarchy
title: system.kanoa.utilities.createTreeHierarchy
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is not part of a class and can be used independently.</PurpleBox>
<HeaderBox header="Description">
    Takes a dataset and appends an extra 'path' column based on the passed-in levels. Levels are column names that the data will be grouped by. For example, if levels are 'column1', 'column2', 'column3', the path of a row will be "value1\value2\value3".
</HeaderBox>
<HeaderBox header="Syntax">
    <b>createTreeHierarchy(inputData, *levels)</b>
    <li>Parameters:<br />
        <ul>inputData: dataset</ul>
        <ul>*levels: tuple - i.e., column1, column2, column3</ul>
    </li>
    <li>Returns:<br />
        <ul>data - dataset</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
data = system.kanoa.utilities.createTreeHierarchy(inputData, 'ItemClassCode', 'ItemClassName', 'ItemName')
