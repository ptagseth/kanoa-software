---
id: user-management
title: User Management
sidebar_position: 5
---

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


### Login
From guest mode, you can login by click the login icon in the upper right corner.

![User Management](/img/UMLogin.png)


### Logout
Logout using the logout icon up in the upper right corner.

![User Management](/img/UMLogout.png)


### Account Management
To be able to add, delete and edit other accounts than yours, you must have Security privileges.  See [Configure Roles](#configure-roles) for more info.


### Add User
To add a user, click the <AddIcon fontSize="small" />.

![User Management](/img/UMAddUser.png)


Add the UserID, Password, First and Last names.  Email and Phone number are optional.  Save your input to create the user.

![User Management](/img/UMAddUser2.png)

The created user has no privileges - add roles by [Edit User](#edit-user)


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


### Delete Roles
Delete a role by selecting the role and hit <DeleteIcon fontSize="small" /> button.

![User Management](/img/UMDeleteUserRole.png)
