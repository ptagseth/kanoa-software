---
id: getUniqueChecksOnly
title: system.kanoa.quality.config.sheets.getUniqueChecksOnly
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Removes duplicates from the check sheets obtained using the `kanoa.qds.config.sheets.getSheetsFilteredBy()` function and returns a list of unique check sheet IDs.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getUniqueChecksOnly(assetChkShts)</b>
    <li> Parameters <br />
        <ul>assetChkShts - Data containing check sheets (pyDataset).</ul>
    </li>
    <li> Returns <br />
        <ul>chkShtIdList - List of unique check sheet IDs (list).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
asset_chk_shts = system.kanoa.qds.config.sheets.getSheetsFilteredBy(paramsDict={'enabled': True, 'triggerTypeId': 1, 'modeId': 2, 'shiftNameId': 3, 'toolingId': 6, 'chkShtTypeId': 7, 'chkShtId': 2, 'assetReqd': True, 'assetId': 56})
unique_chk_sht_ids = system.kanoa.quality.config.sheets.getUniqueChecksOnly(assetChkShts=asset_chk_shts)

print(unique_chk_sht_ids)

