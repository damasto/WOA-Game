# Walk of Atonement game - WOA
[Free yourself from sin!](https://damasto.github.io/WOA-Game/)
---
![]("./images/favicon.webp")

# Description
---
A simple JavaScript game, the goal of the game is to select ten wilfires while doging the falling objects. 

# MVP
---
Player moves left, right, up and down by clicking on the arrow keys. 
An object generated randomly and falls down from top to bottom.
If an object hits the bottom, the player's score will increase by 5.  
If the player gets hit by an obstacle it will cost him a live. 
After 3 hits the game is over. 


# Backlog
Add different types of falling objects and generate them randomly. 
Add a weight property to the objects so they fall at a different velocities. 
Add wild fire objects that serve as boni and enable a win logic - 10 wildfires collected will win the game. 
Add another game screen where to hit a button x-times will cause an explosion. 

# Data structure

## script.js



## game.js
---
- Game()
>- this.startScreen;
>- this.gameScreen;
>- this.gameEndScreen;
>- this.gameContainer;
>- this.statsContainer;
>- this.scoreSpan;
>- this.livesSpan;
>- this.character;
>- this.height;
>- this.width;
>- this.missiles;
>- this.boni;
>- this.catched;
>- this.score;
>- this.lives;
>- this.gameIsOver;
>- this.gameIntervalId;
>- this.gameLoopFrequency;
>- this.wildFire;
>- this.music;
- this.start()
- this.gameLoop()
- this.update()

## component.js
---
>- this.gameScreen;
>- this.left;
>- this.top;
>- this.width;
>- this.height
>- this.imgPath;
- updatePosition()

## character.js
---
- Character()
>- this.directionX;
>- this.directionY;
>- this.element
- move()
- didCollide()

## missiles.js
--- 
- Missile()
>- this.gameScreen;
>- this.left;
>- this.top;
>- this.width;
>- this.height;
>- this.weight;
>- this.element;
>- this.rotate;
- move()
- updatePosition()
- toggleRotation()

## wildfire.js
---
- Wildfire()
>- this.gameScreen;
>- this.left;
>- this.top;
>- this.width;
>- this.height;
>- this.weight;
>- this.element;
- placeBonus()
- removeBonus()


# States and States Transitions
---
- Start Screen
- Game Screen
- Game Over Screen


# Links

[Trello] (https://trello.com/invite/b/67be0732aec5d81c6569eabb/ATTI26b2e7442ae856844c203f5300d7e737240A39CD/walk-of-atonement)
[Slides] (https://docs.google.com/presentation/d/1KirJJx6jDbnbtDB6vTFldvawZvKBKKQk3TN8c57hMBA/edit?usp=sharing)
[Github-repository] (https://github.com/damasto/WOA-Game)
[Deployment] (https://damasto.github.io/WOA-Game/)
