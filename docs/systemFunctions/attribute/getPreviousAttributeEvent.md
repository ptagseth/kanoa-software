---
id: getPreviousAttributeEvent
title: system.kanoa.attribute.getPreviousAttributeEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  This will return the attributeEvent table entry prior to the passed in timestamp (kanoaOPS)
</HeaderBox>

<HeaderBox header="Syntax">
  <b>getPreviousAttributeEvent(assetId, attributeId, tStamp)</b>
    <li>Parameters <br />
      <ul>assetId: int</ul>
      <ul>attributeId: int</ul>
      <ul>tStamp: datetime</ul>
    </li>
    <li>Returns <br />
      <ul>data - pyDataset</ul>
    </li>

</HeaderBox>

### Code Examples
```python
assetId = 33
attributeId = 11
tStamp = timestamp
data = system.kanoa.attribute.getPreviousAttributeEvent(assetId, attributeId, tStamp)
print(data)  # Print the dataset 