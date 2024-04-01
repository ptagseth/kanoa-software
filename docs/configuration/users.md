---
id:  users
title: Users
sidebar_position: 2
hide_table_of_contents: true 
---

Ignition provides a wealth of [user security management](https://docs.inductiveautomation.com/docs/8.1/platform/security/classic-authentication-strategy#user-sources) choices, 
giving you the option of managing users within the Ignition application, through Active Directory or through an Identity Provider. KanoaMES extends this security model to allow the managements and their roles on an asset by asset basis.

### Features

**Gateway Admin**<br/>
KanoaMES supports multi-enterprise asset hierarchies on the same gateway server. Because of this we provide a reserved 'Gateway Admin' role that provides 'administrator' level rights for all enteprises.
The Gateway Admin is the only user who can make another user an 'Administrator' for one or more enterprises. The 'administrator' can then manage the access and roles users have within that enterprise.

***
## User Roles & Functions

Our security model allows for custom roles to be created and functions enabled for that role. A function is a reserved term that is used throughout the MES application to determine if a user has rights to perform these functions.

![users](/img/users/roles-config.png)

**Functions**
* Configure Security
* Configure Assets
* Configure Items
* Operate Assets
* Edit Operations
* Schedule Shifts
* Schedule Operations
* Configure Quality
* Enter Checks
* Approve Checks
***
## User Configuration

When the ignition user source is set to internal, users can be added and deleted via the User table. If the userSource is set to Active Directory, only a users roles can be configured.

![users](/img/users/user-config.png)

### Editing Users

A user can be assigned a role along with a list of assets that role is valid for. This allows you to set a user to be an operator at say the mill, but not at the packaging line.

![users](/img/users/user-role-config.png)

**Adding Roles to a User**<br/>
Select the role you wish to assign to the user and then click on the ![asset selector](/img/components/assetSelector.png) to select the assets.

**Removing a User's Roles**<br/>
Select the role you wish to remove from the user and then click the 'Remove assets' button.