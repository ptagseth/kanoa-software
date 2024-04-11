---
id: addFile
title: system.kanoa.quality.config.sheets.addFile
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a file for a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addFile(chkShtId, fileName, fileBlob, description, thumbnail, userId)</b>
    <li> Parameters <br />
        <ul>chkShtId - ID of the check sheet (int).</ul>
        <ul>fileName - Name of the file (string).</ul>
        <ul>fileBlob - Blob containing file data.</ul>
        <ul>description - Description of the file (string).</ul>
        <ul>thumbnail - Blob containing thumbnail data.</ul>
        <ul>userId - User ID (int).</ul>
    </li>
    <li> Returns <br />
        <ul># of records created - Number of records created (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
file_name = "example_file.txt"
file_blob = b'This is the file content.'
description = "Example file description."
thumbnail = b'Thumbnail content.'
user_id = 123
records_created = system.kanoa.quality.config.sheets.addFile(chkShtId=chk_sht_id, fileName=file_name, fileBlob=file_blob, description=description, thumbnail=thumbnail, userId=user_id)

print(records_created)

