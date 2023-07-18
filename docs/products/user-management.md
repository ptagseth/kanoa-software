---
id: user-management
title: User Management
sidebar_position: 5
---

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

The application initially opens in Guest Mode, where the user has limited permissions and access to assets. To receive
the permissions associated with their pre-assigned role, the user must log in. 

### Login
From guest mode, you can log in by clicking the <PersonIcon fontSize="small" /> icon in the upper right corner.

![User Management](/img/UMLogin.png)


### Logout
Log out by clicking the <LogoutIcon fontSize="small" /> icon up in the upper right corner.

![User Management](/img/UMLogout.png)


### Account Management
Security permissions can be managed from **Configuration/Security**.

To be able to add, delete and edit accounts other than yours, you must have Security privileges.  See [Configure Roles](#configure-roles) for more info.

### Add User
To add a new user, click the <AddIcon fontSize="small" />.

![User Management](/img/UMAddUser.png)


Add the UserID, Password, First and Last names.  Email and Phone number are optional.  Save your input to create the user.

![User Management](/img/UMAddUser2.png)

:::note
A new user has no privileges - add roles through [Edit User](#edit-user)
:::


### Edit User
Edit the user info or roles by select user and click <EditIcon fontSize="small" /> button.

![User Management](/img/UMEditUser.png)


Update the info and click Roles tab to add or update roles.

![User Management](/img/UMAddUserRole.png)


### Delete User
Delete a user by selecting user and click <DeleteIcon fontSize="small" /> button.

![User Management](/img/UMDeleteUser.png)


### Add Role(s)
Add roles to User - see [Edit User](#edit-user)


### Create Roles
Create additional roles by click the roles tab - and then the <AddIcon fontSize="small" /> button.   

![User Management](/img/UMCreateUserRole.png)


### Configure Roles
Manage privileges for a role at Roles configuration tab.  Make sure the role has been reviewed for all Configure, Operation, Quality and Schedule tabs.

![User Management](/img/UMConfigureRoles.png)

For more details on how to configure roles and the security of roles - check the [Products > Framework Design > Security](/products/framework-design/security.md) pages.


### Delete Roles
Delete a role by selecting the role and hit <DeleteIcon fontSize="small" /> button.

![User Management](/img/UMDeleteUserRole.png)
