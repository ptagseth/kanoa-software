---
id: process-attributes
title: Process Attributes
sidebar_position: 2
---
:::info
Whenever a check is to be compared against a specification that is dependent upon the asset and/or, that check needs to reference a process attribute. Process Attributes and associated specifications can be configured in **Quality > Configuration > Process Attributes**.
:::

![Process Attributes](/img/process-attributes-1.png)

## Adding a Process Attribute
Each process attribute requires a name, an asset and a datatype. Process attribute names do not need to be unique and in fact identical names should be used such as ‘Dryer Temperature’ for comparison of similar attributes across assets. However, attribute name / asset combinations must be unique.

![Process Attributes](/img/process-attributes-2.png)


### Automatic Tag Value Collectors
If the value for the process attribute can be pulled directly from an asset, use the Tag Browser to select the tag. ‘Ignore zero values’ and ‘Scale Factor’ parameters are specific to tag collector values, scaling the plc value and preventing the storage of zero values if not required.


## Process Attribute Specifications

One or more process specifications (or tolerances) can be added to a process attribute. A tolerance can be applied to all products by leaving the Product Set and Product fields blank, or tolerances can be set for all products within a product set or for individual products.

When a process check is to be taken, it will first check to see if a tolerance exists for the current product. If no tolerance is found, it will check if the current product belongs to a product set that has a tolerance. If no product set tolerance has been configured, it will use the tolerance defined for all products.

![Process Attributes](/img/process-attributes-3.png)


### Tolerance Parameters
- Upper Entry Limit – Defines the maximum value that can be entered.

- Upper Spec Limit – Defines the upper Pass / Fail condition. Failing values will be highlighted red.

- Upper Control Limit – Defines the upper limit condition. Values exceeding the ucl will be considered as passing but will be highlighted orange.

- Target - Defines the expected ideal value

- Lower Control Limit – Defines the lower limit condition. Values below the lcl will be considered as passing but will be highlighted orange.

- Lower Spec Limit – Defines the lower Pass / Fail condition. Failing values will be highlighted red.

- Lower Entry Limit – Defines the minimum value that can be entered.
