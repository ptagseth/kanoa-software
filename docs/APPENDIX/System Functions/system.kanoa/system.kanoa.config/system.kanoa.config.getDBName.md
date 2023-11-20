---
id: getDBName
title: system.kanoa.config.getDBName
sidebar_position: 1
hide_table_of_contents: true
---

:::info
This function requires KanoaCore module
:::

### Description
Returns the database name, based on a project name 

### Syntax
**getDBName(app)**

- **Parameters**  
    (String) name of the project, to find the database name of

- **Returns**  
    (String) database name of the project


### Code Examples

```py
#This returns the DB name of project 'core'

app='core'
system.kanoa.config.getDBName(app)
```