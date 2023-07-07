---
id: installation
title: Installation
hide_title: true
sidebar_position: 3
---
# Installing the Framework
### Gateway Server
1. Install latest version of [Ignition](https://inductiveautomation.com/downloads/ignition/8.1.19). Directions for installation [here](https://docs.inductiveautomation.com/display/DOC81/Installing+and+Upgrading+Ignition).
2. Install BIJC [Calendar Component module](https://modules.bijc.co.uk/?page_id=76).
3. Add Themes and icon files to the Ignition\data\modules\com.inductiveautomation.perspective folder
4. Add dateUtil.py and six.py python libraries to the Ignition\user-lib\pylib folder

### Database
1. SQL Server 2018 or higher must be used.
2. A Kanoa_MES database shall be added to the database server. The framework package provides a script that will create the necessary schemas, tables and functions.

## Configuring Assets
Refer to [Production Configuration](/category/asset-management) to see how to setup assets, modes and state.

## Connecting to Assets
- OPC Tags 
- MQTT Tags 
- Manual Entry 
- States, Modes, Counts

// Need detailed discussion on how this works with the UDTs. Explain how counts are handled and that one, two or three counts can be added.