# Summary

This game project is based on Section 4 of the "[The Complete JavaScript Course: Build a Real-World Project](https://www.udemy.com/the-complete-javascript-course/)" Udemy course by "[Jonas Schmedtmann](http://jonas.io/)".

### Notes

The "dice-#" and "back" PNG images as well as the HTML and CSS files were all provided by Jonas Schmedtmann as part of the Udemy course materials.

In the course, Jonas tends to use a lot of hardcoding, which I personally found to result in some rather excessive code, and so I've used \`${variable}\` string interpolation syntax. I find that this results in a lot cleaner code, and so I tend to use it more often than I see it.

He also had the JPG file and the PNG files splattered at the same directory level as the main files, so I put those in their own "img" folder just to keep the file structure clean.

### Gameplay

The two players each roll the dice, and the goal is to reach 100 first. During a player's turn, he/she can roll the dice as many times as he/she wishes, and the total amount will be added to that particular player's score. However, if, during a turn, the dice comes up as a "1", the dice will then disappear and the player loses that particular turn and gets no points added to that round, and then it's the other player's turn. Once a player is either satisfied with his/her current results, or doesn't want to take the risk of continuing and having the dice roll a 1, he/she can press "Hold". The total from that round will then be added to his/her score.
