---
id: wizard-template
title: Wizard Template
sidebar_position: 1
---
:::info
The wizard template is a guided user interface that helps its user navigate through a series of steps in order to complete a task or process. The Wizard Template is designed to compile a list of steps, to accumulate every data field across all of them, and to execute the overall task. More details on how to create and configure a step [here](docs/products/framework-design/templates/wizard/step-template-documentation.md).
:::

![Session Properties](/img/31.png)

## Parameters
| **Name**  | **Description**                                                                                                                       | **Type**  |
|:----------|:--------------------------------------------------------------------------------------------------------------------------------------|:----------|
| steps     | List of objects storing data for each step of the wizard’s process. <br /> More details in [Step Properties](#step-properties) below. | list      |

### Step Properties:
| **Name**   | **Description**                                                                                                                            | **Type**  |
|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| data       | Object containing the step's data fields and dependencies. <br /> More details in [Step - Data Properties](#step---data-properties) below. | object    |
| path       | Path of the step view.                                                                                                                     | string    |
| stepTitle  | Title of the step view.                                                                                                                    | string    |

### Step - Data Properties:
| **Name**      | **Description**                                                                                                                     | **Type**  |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------------|:----------|
| dependencies  | Object containing field names, if the step requires any field data from previous steps.                                             | object    |
| fields        | Object containing field names associated with the step. <br /> More details in [Data - Fields Properties](#data---field-properties) | object    |

### Data - Field Properties:
| **Name**       | **Description**                                                                              | **Type**  |
|:---------------|:---------------------------------------------------------------------------------------------|:----------|
| \[fieldName\]  | Object containing information on the field, including its value and if it is required.       | object    |
| required       | Boolean that indicates if the field input is required in order to proceed to the next step.  | boolean   |
| value          | Value of the field.                                                                          | any       |

![Session Properties](/img/32.png)

## Custom Properties
| **Name**      | **Description**                                                          | **Type**    |
|:--------------|:-------------------------------------------------------------------------|:------------|
| currentIndex  | Index of the view that is to be displayed, eg: 0 for step 1 at index 0.  | integer     |
| data          | Object containing all of the data field values collected so far.         | dictionary  |