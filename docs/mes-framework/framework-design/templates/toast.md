---
title: Toast
sidebar_position: 2
---

A message box that pops up like toast.


## Built-in Message Popup

There are a number of default toast messages that you can use to show a brief message to the user. To show a toast, use system.perspective.sendMessage ([Ignition User Manual 8.0 - Ignition Documentation](https://docs.inductiveautomation.com/display/DOC80/system.perspective.sendMessage)). For the messageType, use any of the options below, then for the payload, just add the message as a string. The longer the message, the longer it stays on the screen


### showToast

Just a normal message.

1. system.perspective.sendMessage('showToast', 'Hello. My name is Frank.')

![Toast](/img/toast-1.png)


### showSuccessfulToast

Specifically used to show that some operation was successful. 

1. system.perspective.sendMessage('showSuccessfulToast', 'Good Job! You did it.')

![Toast](/img/toast-2.png)


### showFailerToast

Specifically used to show that some operation had failed. 

1. system.perspective.sendMessage('showFailerToast', 'Oh no! It didn\'t work.')

![Toast](/img/toast-3.png)


### showInfoToast

Specifically used to show some important information. 

1. system.perspective.sendMessage('showInfoToast', u'The weather is sunny with a high of 68°F.')

![Toast](/img/toast-4.png)


### showWarningToast

Specifically used to warn the user about some potential issue. 

1. system.perspective.sendMessage('showWarningToast', 'Watch out! The monster is right behind you!'

![Toast](/img/toast-5.png)


### showBugToast

Specifically used to show let the use know that there was a bug.

1. system.perspective.sendMessage('showBugToast', 'Error 404: Your brain was not found!')

![Toast](/img/toast-6.png)


## Customized Message Popup

### message

The test that shows up in the message.

1. system.perspective.sendMessage('showSuccessfulToast', {
2.     'message': 'You have only added a message.'
3. })

![Toast](/img/toast-7.png)


### bgColor

The background color of the toast.

1. system.perspective.sendMessage('showSuccessfulToast', {
2.     'message': 'You made the background lighter!', 
3.     'bgColor': 'limeGreen'
4. })

![Toast](/img/toast-8.png)


### fgColor

The color of the text and icon.

1. system.perspective.sendMessage('showSuccessfulToast', {
2.     'message': 'You have changed the color of the text and icon!', 
3.     'fgColor': 'limeGreen'
4. })

![Toast](/img/toast-9.png)


### icon

The icon the shows up to the left of the text. You can pass in "None" to remove the icon.

1. system.perspective.sendMessage('showSuccessfulToast', {
2.     'message': 'You have changed the icon!', 
3.     'icon': 'material/thumb_up'
4. })

![Toast](/img/toast-10.png)

1. '''system.perspective.sendMessage('showToast', {
2.     'message': 'This is a completely custom toast.',
3.     'bgColor': 'MintCream',
4.     'fgColor': 'CadetBlue',
5.     'icon': 'material/clean_hands'
6. })'

![Toast](/img/toast-11.png)













