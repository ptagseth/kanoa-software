---
id: translateData
title: system.kanoa.utilities.translateData
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
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
