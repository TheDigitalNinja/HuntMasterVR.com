---
title: "Look it's a website"
date: 2016-03-12 12:53:08
tags: devblog
---
I have been internally releasing stable builds and moving down never ending list of trello tasks for a while now. I figured now is as good as time as any to setup a website and starting doing monthly or bi-monthly updates on the progress of the game.

<!-- more --> 

What we have so far
-------
I have spent most of my time focusing on one level where I worked out all the AI movement and creating prefabs for the main game objects. AI now navigates around trees and rocks, through bushes and can be killed and give points. After all three are either killed or escaped a game over is triggered and you are taken to a score room to see how well you did. This all need much more fleshing out in both design and function, but it works and these are now prefabs that can be worked on independently or moved from scene to scene. 

Speaking of scene to scene, I have been testing build on the google cardboard and noticed it was pretty jarring starting out right into the game. I threw together a Main Menu room and created a created a level select prefab. Once I start splitting out more levels this can be used to move the player through the game and show the scores and high scores of the levels.

Whats next
----------
The simple end game works but its not very rewarding. I''m going to try and add in a high score that will keep track between game sessions. 

Now that I'm actually using screenshots in places around the web the ground and animal placeholders are really starting to bug me. I'll be bringing in more low poly animals and hopefully I can get a decent looking low-poly terrain implemented.


Changelog:
-----------

- Low poly trees, boulders, rocks, and bushes
- AI path finding
- Pop out scores
- End game room
- Simple shader for AI until we can get more models 
- World space ui
- AI health and points
- AI waits a bit before running or when first shot is fired
- AI exit points
- AI only chooses exit point in front of it
- Short pause at end game before end game room
- Scoreboard that shows all points gained and total score