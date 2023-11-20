---
id: navigation
title: Navigation
sidebar_position: 4
hide_table_of_contents: true
---
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RestoreIcon from '@mui/icons-material/Restore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CloseIcon from '@mui/icons-material/Close';

## Top Navigation Bar
The top navigation bar is always present in the application, offering essential navigation features and displaying the current page's name.

![Navigation Menu](/img/17.png)

It provides the following functionality:
* **Menu Button** <MenuIcon fontSize="small" /> : Click to toggle the collapsible [Navigation Sidebar](#navigation-sidebar) open or closed.  
* **Home Button** <HomeIcon fontSize="small" /> : Returns the user to the home page.
* **Previous Page and Next Page Buttons** <ChevronLeftIcon fontSize="small" /> <ChevronRightIcon fontSize="small" /> : Quickly navigates between recently accessed pages.
* **Navigation History Button** <RestoreIcon fontSize="small" /> : Opens [Navigation History](#navigation-history) pop-up.
* **Current Page Display**: Displays the name of the page currently open.

## Navigation Sidebar
The navigation sidebar facilitates navigation through the framework's pages. To navigate to a page, click on its title or click the <ArrowRightIcon /> button to expand and view subpages.  

Use the search bar at the top to search for a specific page.  

To access help documentation, click on the bottom **Help** option.

![Navigation Menu](/img/Navigation-SideBar.png)

## Navigation History
Full navigation history can be accessed by clicking on the <RestoreIcon fontSize="small" /> button in the top navigation bar, which opens the navigation history pop-up. The navigation history pop-up displays recently visited pages in chronological order. To navigate back to any of these pages, click on the page title.  

To close the navigation history pop-up, click the <ExitToAppTwoToneIcon fontSize="small" /> button or the <CloseTwoToneIcon fontSize="small" /> in the top right corner.  

To clear navigation history, click the <DoDisturbAltIcon fontSize="small" /> button.

![Navigation Menu](/img/19.png)