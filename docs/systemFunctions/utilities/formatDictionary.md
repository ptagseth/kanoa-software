---
id: formatDictionary
title: system.kanoa.utilities.formatDictionary
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">
    This function takes a dictionary and formats it into a human-readable string.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>formatDictionary(dictionary, paramsDict)</b>
    <li>Parameters:<br />
        <ul>dictionary: dict - The dictionary to be formatted</ul>
        <ul>paramsDict: dict - Parameters for formatting the dictionary
            <ul>
                <ul></ul>
                <ul>'excludeNulls' (bool): If True, excludes null values from the output (default is False)</ul>
                <ul>'includeKeys' (list of str): List of keys to include in the output</ul>
            </ul>
        </ul>
    </li>
    <li>Returns: str - A formatted string representing the dictionary</li>
</HeaderBox>

### Code Example

```python
# Example Usage:
formatted_string = system.kanoa.utilities.formatDictionary(dictionary, paramsDict)

