---
id: user-management
title: User Management
sidebar_position: 5
hide_table_of_contents: true
---

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

The application initially opens in Guest Mode, where the user has limited permissions and access to assets. To receive the permissions associated with their pre-assigned role, the user must log in. 


### Login
From guest mode, you can log in by clicking the <PersonIcon fontSize="small" /> icon in the upper right corner.

![User Management](/img/UMLogin.png)


### Logout
Log out by clicking the <LogoutIcon fontSize="small" /> icon in the upper right corner.

![User Management](/img/UMLogout.png)


### Account Management
Security permissions can be managed from **Configuration/Security**.

To be able to add, delete and edit accounts other than yours, you must have Security privileges.  Only Administrators and Gateway Admins can manage user privileges.

See [Configure Roles](#configure-roles) for more info.


### Add User
To add a new user, navigate to Ops > Configuration > Security and click the <AddIcon fontSize="small" /> icon.

![User Management](/img/UMAddUser.png)


Add the UserID, Password, First and Last names.  Email and Phone number are optional.  Save your input to create the user.

![User Management](/img/UMAddUser2.png)

:::note
A new user has no privileges - add roles through [Edit User](#edit-user)
:::


### Edit User
Edit the user info or roles by select user and click the <EditIcon fontSize="small" /> icon.

![User Management](/img/UMEditUser.png)


Update the info and click Roles tab to add or update roles.

![User Management](/img/UMAddUserRole.png)


### Delete User
Delete a user by selecting user and click the <DeleteIcon fontSize="small" /> icon.

![User Management](/img/UMDeleteUser.png)


### Add Role(s)
Add roles to User - see [Edit User](#edit-user)


### Create Roles
Create additional roles by click the roles tab - and then the <AddIcon fontSize="small" /> icon.   

![User Management](/img/UMCreateUserRole.png)


### Configure Roles
Manage privileges for a role at Roles configuration tab.  Make sure the role has been reviewed for all Configure, Operation, Quality and Schedule tabs.

![User Management](/img/UMConfigureRoles.png)

For more details on how to configure roles and the security of roles - check the [Products > Security](/products/security) page.


### Delete Roles
Delete a role by selecting the role and hit the <DeleteIcon fontSize="small" /> icon.

![User Management](/img/UMDeleteUserRole.png)
