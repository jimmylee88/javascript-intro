# To-do List (Javascript project)

## About
From our introduction to Javascript, our task is to create a To-do list application.

The requirements are that the app allows the user to:
* Add a new task to a list
* View all tasks
* Be notified of errors, so empty tasks can't be added
* Have the ability to delete tasks

## Approach v1
I'm still trying to get head around Javascript but struggling with it.
I know what things do, but the syntax is still quite alien to me and hasn't stuck with me.

To begin with, I followed a YouTube tutorial and ended up creating this along with it:
https://jimmylee88.github.io/javascript-intro/To-do-list/index.html

It answers the user requirements of the task, and I know why things work, but I'm not 100% sure how. I don't think I would be able to create it without the video as a reference again.
I was able to apply my previous HTML & CSS knowledge for the styling and layout, but that isn't the main purpose of this Javascript task.
So I'll have another go, and try to create something myself from scratch and not think too much about the styling.

## Approach v2
My biggest problem with the tutorial method for v1 is that it doesn't use semantic input tags (radio button, or checkboxes) or buttons for checking off items or removing them.
This means that when a keyboard-only user, or someone using a screen reader tabs through the structure of the page, the box for ticking off a list item is missed. That's because the tutorial simply uses list items with styling to *look* like checkboxes but they aren't structured like that semantically.

I wanted to re-attempt the task and make sure every element uses semantic html tags, and do the javascript from scratch even if the results aren't as aesthetically pleasing to gain a better understanding of how it works.

Eventually, I made this second iteration which allows keyboard only navigation, as it uses semantic html elements with the button to delete a task. It's simpler, but it helped me get my head around the javascript as you can see with how many comments I've added! 😅

https://jimmylee88.github.io/javascript-intro/to-do-list-v2/index.html 

## Approach v3?
Whilst I'm relatively satisfied with the results in the v2 approach, I do miss how there's an additional state to each Task list item from v1—the ability to cross/tick off tasks without necessarily deleting them altogether. I need to look into this, and make sure that the approach retains the same accessibility considerations I had for v2 with keyboard navigation.
