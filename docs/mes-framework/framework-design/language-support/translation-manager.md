---
title: Translation Manager
sidebar_position: 1
---

Step-by-step guide to adding a new language to the project


## Export Terms

1.  **Open** the global Ignition designer

![Translation Manager](/img/translation-manager-1.png)


2.  Open Translation Manager from **Tools > Translation Manager** in the menu bar 

![Translation Manager](/img/translation-manager-2.png)


3.  Click **Export Terms**

![Translation Manager](/img/translation-manager-3.png)


4.  In the Export Terms pop-up, ensure that **English** is the only language selected 

![Translation Manager](/img/translation-manager-4.png)


5.  In the Export Terms pop-up, add the **Base file name** "TRANSLATION" and a select a **folder** to save the file to 

![Translation Manager](/img/translation-manager-5.png)


6.  In the Export Terms pop-up, change **Format** from PROPERTIES to XML and click **OK**

![Translation Manager](/img/translation-manager-6.png)


7.  In the Export finished pop-up, click **OK**

![Translation Manager](/img/translation-manager-7.png)



## Translate Terms

1.  **Open** the TRANSLATION file with a text editor

![Translation Manager](/img/translation-manager-8.png)


2.  **Copy** all rows of the code

![Translation Manager](/img/translation-manager-9.png)


3.  **Open** the translation spreadsheet

     [Translation Spreadsheet](https://docs.google.com/spreadsheets/d/1bwGMK_v8TqRt5gTdKnb65sSivJmogEEP6jWWZPfys6g/edit#gid=0)



4.  **Paste** the terms into Cell 1A

![Translation Manager](/img/translation-manager-10.png)


5.  **Enter the language code** being translated to in the yellow cell. Wait until the cell above reads "COMPLETE!!!"

![Translation Manager](/img/translation-manager-11.png)


6.  **Copy** the contents of column G

![Translation Manager](/img/translation-manager-12.png)


7.  **Duplicate** the English TRANSLATION file

![Translation Manager](/img/translation-manager-13.png)


8.  **Rename** the file with the new language code

![Translation Manager](/img/translation-manager-14.png)


9.  **Open** the file with text editor

![Translation Manager](/img/translation-manager-15.png)


10.  **Delete** current contents of file and click paste

![Translation Manager](/img/translation-manager-16.png)


11.  **Save** the file

![Translation Manager](/img/translation-manager-17.png)


12.  **Open** this file with Visual Studio Code

![Translation Manager](/img/translation-manager-18.png)


13.  Open the find and replace function from **Edit > Replace**

![Translation Manager](/img/translation-manager-19.png)


14.  Use this function to **find and replace errors** in the code and click **Replace All**. Errors will appear in red. For instance, replace "& " with "&"

![Translation Manager](/img/translation-manager-20.png)


15.  **Save** the Visual Studio Code file

![Translation Manager](/img/translation-manager-21.png)



## Import terms

1.  **Open** the global Ignition designer

![Translation Manager](/img/translation-manager-22.png)


2.  Open Translation Manager from **Tools > Translation Manager** in the menu bar

![Translation Manager](/img/translation-manager-23.png)


3.  Click **Import Terms**

![Translation Manager](/img/translation-manager-24.png)


4.  **Select** the translated file and click **Open**

![Translation Manager](/img/translation-manager-25.png)


5.  Click **Import All**

![Translation Manager](/img/translation-manager-26.png)


6.  In the Import Finished pop-up, click **OK**

![Translation Manager](/img/translation-manager-27.png)


7.  **Save** the project

![Translation Manager](/img/translation-manager-28.png)



## Add new locale settings

1.  **Open** the global Ignition designer

![Translation Manager](/img/translation-manager-29.png)


2.  In the global designer, navigate to the **Perspective > Views** page

![Translation Manager](/img/translation-manager-30.png)


3.  In the **Perspective Property Editor**, scroll down to **SESSION CUSTOM > translations > getTerms**

![Translation Manager](/img/translation-manager-31.png)


4.  Right click **getTerms** and click **Edit Change Script...**

![Translation Manager](/img/translation-manager-32.png)


5.  In line 5, **add the new language code** to the end of the list. Press OK

![Translation Manager](/img/translation-manager-33.png)


6.  **Check the getTerms box** so that it displays True. Wait for it to display false again and ensure that the new locale is displayed under translations

![Translation Manager](/img/translation-manager-34.png)


7.  **Save** the global project and **close** it

![Translation Manager](/img/translation-manager-35.png)


8.  **Open** the MES Ignition designer

![Translation Manager](/img/translation-manager-36.png)


9.  **Repeat the previous steps** to add new locale settings in the **MES** designer

![Translation Manager](/img/translation-manager-37.png)


10.  **Save** the MES project and **close** it

![Translation Manager](/img/translation-manager-38.png)



## Add the new language to the menu

1. Open **Perspective > Views > Kanoa > Docks > Options >  root > flxLanguage > flxToggle > RadioGroup**

![Translation Manager](/img/translation-manager-39.png)


2.  Open the RadioGroup **Perspective Property Editor**

![Translation Manager](/img/translation-manager-40.png)


3.  At the index where you want to insert the new language into the menu, **right click the index number** under radios. Click **Duplicate**

![Translation Manager](/img/translation-manager-41.png)


4.  Enter the new **language name** in the "text" property. Enter the new **language code** in the "value" property

![Translation Manager](/img/translation-manager-42.png)


5.  **Save** the project

![Translation Manager](/img/translation-manager-43.png)



## Ensure the new language works in the demo

![Translation Manager](/img/translation-manager-44.png)


