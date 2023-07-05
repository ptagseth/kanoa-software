---
id: security
title: Security
sidebar_position: 10
---
import Admonition from '@theme/Admonition';
import InfoIcon from '@mui/icons-material/Info';

<Admonition type="info" title="Overview">
  <p>
    Security is crucial for a multi-enterprise application, where users of the application are restricted to accessing and updating any data pertaining only to the enterprise(s) they are associated with. For example, users associated with enterprise A will never be able to view and update any data from enterprise B. Within an enterprise, users will also have different roles with varying sets of permissions. 
  </p>
</Admonition>


## Roles
Roles are what determine what permissions a user has and at which enterprises/assets. For example, a user may have the role of ‘Operator’ assigned at enterprise C, which grants them any functions associated with the ‘Operator’ role.

![Roles Security](/img/security.png)

Each role will have a set of allowed functions that determines their permissions throughout the application. For example, permissions to schedule shifts or operations, configuring assets, users, and roles. An example of functions by role shown below:

![Roles Security](/img/rolesFunctions.png)

The roles of ‘Administrator’ and ‘Gateway Admin’ are able to assign users to roles at assets within their permissions. Administrators are allowed full permissions of any data associated with any enterprises they are associated with, as well as having full control over the users of the same enterprises. Gateway Admins have full control of the application and can access all data across all enterprises. They are also the only role allowed to configure role functions.


## Functions
 
Having established that roles are defined by the functions that they are assigned, let’s get into functions. Each view that is configured with security will allow or disallow certain functions if the user has a role that has the required function at the specified enterprise. Let’s take the function ‘Schedule Shifts’ as an example, which is used to determine permissions for the Shifts Scheduler.

![Functions Security](/img/shiftScheduler.png)

Here, the asset ‘Kanoa Industries\Adelaide Hills’ is selected. This will then populate the calendar with the asset’s currently scheduled shifts. Users may then create new shifts, and update or delete existing shifts. But only if they have a role associated with the enterprise of Kanoa Industries, that has the function of ‘Schedule Shifts’. Here is how the permissions are determined.

![Functions Security](/img/shiftsecureexample.png)

The first thing to take notice of on the right is the custom property ‘action’, which contains 4 booleans for each CRUD function. This permissions object is bound to the selected asset path and the logged in user’s username. Based on these two parameters, the allowed permissions are determined. In this specific example, the user needs to have a role assigned to the selected asset path, that has the function of ‘ScheduleShifts’. Let’s take a look at the functions of shift scheduler.

![Functions Security](/img/schedulePermissions.png)

In the shift scheduler view, authorized users may create, edit, and delete shifts. Any user is allowed to view shifts for any asset they are associated with. In the screenshot, user ‘azhou’ is an Administrator for the asset ‘Apple House’, and is allowed to schedule shifts. As we can see, the create, edit, and delete buttons are displayed. However, lets then select an asset for which we do not have permissions. 

![Functions Security](/img/schedulenoPerms.png)

‘azhou’ is a User at ‘Yakima Fruit and Cold Storage’, which doesn’t have the function of ‘ScheduleShifts’ enabled. The CRUD buttons seen in the previous screenshot are no longer displayed. In this case specifically, each of the CRUD buttons' ‘display’ property were bound to their corresponding booleans in the ‘action’ object.

![Functions Security](/img/btnLogic.png)

This is how the security functions. Of course, there may need to be bindings set in other ways than just the display of buttons, depending on the view and how CRUD functions can be interacted with. 


## Assigning Roles and Functions
