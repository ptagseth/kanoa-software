---
id: stringFormat
title: system.kanoa.utilities.stringFormat
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Replaces underscores and dashes with spaces, creates spaces between separate words (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>stringFormat(text)</b>
    <li>Parameters <br />
        <ul>text (String) - The input text to be formatted.</ul>
    </li>
    <li>Returns <br />
        <ul>text (String) - The formatted text with underscores and dashes replaced by spaces.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
formatted_text = system.kanoa.utilities.stringFormat('example_text_with_underscores')


