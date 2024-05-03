---
id: getFieldValue
title: system.kanoa.utilities.getFieldValue
hide_table_of_contents: true
---


import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Helper function that returns a scalar value for the passed-in column ('field') from a dataset. Expects there to be 0 or 1 rows in the dataset (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getFieldValue(self, field, data)</b>
    <li>Parameters <br />
        <ul>self (Class Instance) - The instance of the class where this method is defined.</ul>
        <ul>field (String) - The name of the column for which the value is retrieved, e.g., 'assetGroupName'.</ul>
        <ul>data (Dataset) - The dataset containing the specified column ('field').</ul>
    </li>
    <li>Returns <br />
        <ul>Object or None (Object) - The scalar value corresponding to the specified column ('field'). Returns None if the column does not exist.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
value = system.kanoa.utilities.getFieldValue(self, 'assetGroupName', data)

