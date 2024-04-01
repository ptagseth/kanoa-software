---
id: api-intro
title: Kanoa API
sidebar_position: 1
hide_table_of_contents: true 
---

Welcome to our api documentation. We provide around 400 system.kanoa functions that handle eveything from configuring assets, materials, modes, state,
schedules, shifts, and quality checks to returning production and quality analysis.

Each function is described in detail, along with examples. You can also look inside the kanoa projects to see how we use the system.kanoa functions.

Our MES application is divided into several modules, kanoaCore, kanoaOPS and kanaoQDS. Each module extends the system functions and which module is required
to have a specfic system function is documented in the help. kanoaCore is required to be installed by both kanoaOPS and kanoaQDS. In a nutshell...

**kanoaCore**
- system.kanoa.asset (read functions only)
- system.kanoa.config
- system.kanoa.date
- system.kanoa.item (read functions only)
- system.kanoa.security
- system.kanoa.utilities

**kanoaOPS**
- system.kanoa.asset
- system.kanoa.attribute
- system.kanoa.item
- system.kanoa.lot
- system.kanoa.order
- system.kanoa.schedule
- system.kanoa.shift
- system.kanoa.event

**kanoaQDS**
- system.kanoa.quality