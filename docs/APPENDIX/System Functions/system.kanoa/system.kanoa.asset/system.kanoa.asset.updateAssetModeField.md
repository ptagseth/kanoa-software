---
id: updateAssetModeField
title: system.kanoa.asset.updateAssetModeField
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates the field with the passed value for the assetModeLink in KanoaOPS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateAssetModeField(modeAssetLinkId, field, value, userId)</b>
    <li> Parameters <br />
        <ul>int modeAssetLinkId - The ID of the assetModeLink to be updated.</ul>
        <ul>str field - The field to be updated.</ul>
        <ul>str value - The value to set for the specified field.</ul>
        <ul>int userId - The ID of the user making the update.</ul>
    </li>
    <li> Returns <br />
        <ul>(int) Number of records modified</ul>
        <ul>(str) Message</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
records_modified, message = system.kanoa.asset.updateAssetModeField(modeAssetLinkId=123, field='fieldName', value='fieldValue', userId=456)

if records_modified is not None:
    print(f"Successfully updated {records_modified} records.")
else:
    print(f"Update failed: {message}")