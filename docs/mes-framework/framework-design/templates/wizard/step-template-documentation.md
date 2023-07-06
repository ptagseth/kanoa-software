---
id: step-template-documentation
title: Step Template Documentation
sidebar_position: 2
---

:::info
The step template is a template used to design a step, to be used in a sequence of steps that are to be used with the Wizard Template. Steps typically contain a number of input fields, which values are to be collected and stored by the wizard, in order to execute the objective task.
:::

![Step Template Documentation](/img/30.png)

## Parameters

| **Name**      | **Description**                                                 | **Type**  |
| :------------ | :------------------------------------------------------------------- | :---------- |
| data | Object containing thestep’s field names and any dependencies - More details in Step - [Data Properties](#data---field-properties) | object |


### Step - Data Properties 

| **Name**      | **Description**                                                                                                                  | **Type**  |
| :------------ |:---------------------------------------------------------------------------------------------------------------------------------| :---------- |
| dependencies   | Object containing field names, if the step requires any field data from previous steps                                           | object |
| fields | Object containing field names associated with the step  \\  More details in Data - [Fields Properties](#data---field-properties) | object |


### Data - Field Properties

| **Name**      | **Description**                                                 | **Type**  |
| :------------ | :------------------------------------------------------------------- | :---------- |
| [fieldName]  | The name of a step’s field as a key. Each field name needs to be unique across all the step field names. Value contains an object that holds data about the field’s value, and if it’s required | object |
| required | Boolean indicating whether the field requires an input value, such that the next step in the wizard may be proceeded to | boolean |
| value| Value of the field | any |

