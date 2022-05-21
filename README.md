# Pixelhop - Code Challenge

## Review instructions

```
# initial install
npm i
# production build
npm run compile:prod
# development build
npm run compile:dev
# preview
npm run serve
```

## Introduction
Thanks for taking the time to complete our code challenge. We hope you find it interesting to complete and if there is anything that is not clear in these instructions please don't hesitate to ask us.

Please take ten minutes to carefully read through this document before starting the challenge.

* We expect you to spend a few hours on this challenge. If you do not complete it then please still submit your work.
* If you do not have a github account you will have to create one
* [Fork](https://help.github.com/articles/fork-a-repo/) this repository
* **Commit your code frequently. This is how we will review your submission.**
* If you do not have time to fully complete the challenge, please still push it and indicate what your next steps would be. Remember to try to solve the hardest problems first.
* We are not asking for a clever, over engineered or obfuscated solution. Please be as pragmatic as possible.
* We should be able to run your code without any crazy steps
* Make use of the sample data, it is correct
* Make sure your final solution is on the main branch
* **Let us know when you complete the challenge**

## What should I use to complete the challenge?

The choice of technologies/languages/tools you use to complete this challenge is down to you, but we advise you to take into account their relevancy to the job position and your comfort with them.

Some candidates implement a command line tool to complete the challenge, while others create a full blown visual UI. Either is fine as long as the instructions of the challenge have been followed correctly.

## Problem: Survey Ships
### The Problem
The surface of the ocean can be modelled by a rectangular grid around which ships are able to move according to instructions provided from a control station. You are to write a program that determines each sequence of ship positions and reports the final position of the ship.
A ship position consists of a grid coordinate (a pair of integers: x-coordinate followed by y-coordinate) and an orientation (N, S, E, W for north, south, east, and west). A ship instruction is a string of the letters "L", "R", and "F" which represent, respectively, the instructions:
* Left: the ship turns left 90 degrees and remains on the current grid point.
* Right: the ship turns right 90 degrees and remains on the current grid point.
* Forward: the ship moves forward one grid point in the direction of the current orientation and maintains the same orientation.
The direction North corresponds to the direction from grid point (x, y) to grid point (x, y+1) and the direction east corresponds to the direction from grid point (x, y) to grid point (x+1, y).

Since the grid is rectangular and bounded, a ship that falls off an edge of the grid is lost forever. However, lost ships leave a warning that prohibits future ships from dropping off the world from the same grid point. The warning is left at the last grid position the ship occupied before disappearing over the edge. An instruction to move "off" the world from a grid point from which a ship has been previously lost is simply ignored by the current ship.
### The Input
The first line of input is the top right (or north east) coordinates of the rectangular world, the lower-left (or south-west) coordinates are assumed to be 0, 0.
The remaining input consists of a sequence of ship positions and instructions (two lines per ship). A position consists of two integers specifying the initial coordinates of the ship and an orientation (N, S, E, W), all separated by whitespace on one line. A ship instruction is a string of the letters "L", "R", and "F" on one line.
Each ship is processed sequentially, i.e. finishes executing the ship instructions before the next ship begins execution.
The maximum value for any coordinate is 50.
All instruction strings will be less than 100 characters in length.
### The Output
For each ship position/instruction in the input, the output should indicate the final grid position and orientation of the ship. If a ship falls off the edge of the grid the word "LOST" should be printed after the position and orientation.

#### Sample Input
5 3\
1 1 E\
RFRFRFRF

3 2 N\
FRRFLLFFRRFLL

0 3 W\
LLFFFLFLFL

#### Expected Output
1 1 E\
3 3 N LOST\
2 3 S

## Finally
**Tell us when you have completed the challenge**