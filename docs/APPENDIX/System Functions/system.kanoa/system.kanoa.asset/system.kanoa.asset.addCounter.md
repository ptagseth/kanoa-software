---
id: addCounter
title: system.kanoa.asset.addCounter
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Called by tagUDT assetOEE\Configuration\infeedCounterId, etc. to initialize the counterId for storing the count value against (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addCounter(assetId, counterName, counterTypeName, userId)</b>
    <li> Parameters <br />
        <ul>assetId (int) - ID of the asset.</ul>
        <ul>counterName (str) - Name of the counter.</ul>
        <ul>counterTypeName (str) - Name of the counter type.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>counterId (int) - ID of the added counter.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
asset_id = 18
counter_name = 'caps'
counter_type_name = 'infeed'
user_id = 123
counter_id = addCounter(asset_id, counter_name, counter_type_name, user_id)
