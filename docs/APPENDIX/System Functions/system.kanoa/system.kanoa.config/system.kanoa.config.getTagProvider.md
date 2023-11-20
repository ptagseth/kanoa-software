---
id: getTagProvider
title: system.kanoa.config.getTagProvider
sidebar_position: 2
---

:::info
This function requires KanoaCore module
:::

### Description
Returns the tag provider name, based on a project name 

### Syntax
**getTagProvider(app)**

- **Parameters**  
    (String)name of the project, to find the tag provider name of

- **Returns**  
    (String) tag provider of the project


### Code Examples

```py
# This returns the Tag provider for project 'core'

app='core'
system.kanoa.config.getTagProvider(app)
```