---
id: translateData
title: system.kanoa.utilities.translateData
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">Translates the list of columns of the passed-in dataset into the given local language (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>translateData(data, colList, locale)</b>
    <li>Parameters <br />
        <ul>data (pyDataset or basic dataset) - Dataset to be translated.</ul>
        <ul>colList (List) - List of columns to be translated (empty list if all columns).</ul>
        <ul>locale (String) - Language to translate to (e.g., 'es').</ul>
    </li>
    <li>Returns <br />
        <ul>data (pyDataset) - Translated dataset.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
translated_dataset = system.kanoa.utilities.translateData(dataset, ['column1', 'column2'], 'es')
