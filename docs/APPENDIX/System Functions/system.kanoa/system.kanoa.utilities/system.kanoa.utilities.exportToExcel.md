---
id: exportToExcel
title: system.kanoa.utilities.exportToExcel
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Wrapper function that calls system.dataset.toExcel() and system.perspective.download() (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>exportToExcel(fileName, data)</b>
    <li>Parameters <br />
        <ul>fileName (String) - Name of the file.</ul>
        <ul>data (pyDataset or basic dataset) - Dataset to be exported to Excel.</ul>
    </li>
    <li>Returns <br />
        <ul>None</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
system.kanoa.utilities.exportToExcel('example_file', dataset)
