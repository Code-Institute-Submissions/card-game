Card Matching Game!


A simple yet fun and challenging game. The aim of the game is to find all of the matching cards from the 12 that are on 
screen all of which are face down at the start of the game.
With each new game providing a new random order of the cards no two games are the same so it continues to provide a simple
yet fun challenge to the player.


UX!

For this project I wanted a simple game to play, without to much clutter on the screen. The aim of the game is as simple 
as it is challenging to play for the user.
With the use of some small animations on both the front and rear of the card it provides and fun game to play that gives 
feedback to the user as the play, from the hover of the back of the cards to the changing front face colour along with the
cards as a whole having an animation when they are matched.
I wanted the user to have feedback on what they were doing, a game I find is best when there is information coming back at
you as you do things. If the game had no chance when a pair was matched you might wonder if the game has registered the match
or if you should continue to look for more matching pairs.
My aim for this game was for it to a small game to play in a short time that provides interactivity and some fun, with each
game lasting no longer than a minute along with the above mentioned animations and changing of styles I feel it fits the criteria well.


Features.

The features in this site are as follows 

•	Simple timer and game rules, giving an easy explanation of the game.

•	12 card layout giving the users 6 matches to find from the shuffle on show.

•	A hover class to the back of the card when the user hovers over the card

•	When the card is flipped it is done so with an animation and not snapping from one side to the other making the 
  game smoother looking to play.
  
•	When the user finds a matching pair, the cards change colour and are also animated to give a clear indication you’ve found a match.

•	If the cards don’t match, they transition back to face down with the same smooth transition as they did to be displayed, 
  again to make the game smoother to play and more pleasing on the eye.
  
•	Game over is prompted if the game doesn’t see all of the cards matched. Once the timer hits zero the overlay for game over 
  will be shown and the timer stops at zero.
  
•	Victory, when the game has seen that the matching function has been fired 6 times it knows the cards have all been matched 
  and the victory overlay will show up.
  
•	For both the game over and victory overlay a click to restart message is shown, this will trigger the page to be reloaded.
  A new shuffle will be made, a new timer started and the count reset to zero for the matching pairs for a new game to begin.
  
  
Another feature idea would be to have a score system in place for when you match cards and reduce the score when you get a mis-match,
then display the score on the victory overlay when it comes up on screen.


Technologies used.

The site built using the basic html structure, it was originally built using the bootstrap grid system but that was causing me a 
lot of problem with the card shuffle. I did get a shuffle to working using the DOM to shuffle the div’s but this was causing the 
cards to load at a random location all over screen and not in the grid that I wanted it to.

Font Awesome, https://fontawesome.com/  This is the site that I got the images for the back of the cards.

Javascript, https://www.javascript.com/ The language used to make the game function, card flipping, timer, overlays when required 
and restarting the game when its finished.


Testing.

During the build I have tested things along the way with some results that were great at some that were not so much.

First off was getting the grid system in place, when I coded in the cards they were all being displayed down the left hand side of
the page, this was rectified by using the CSS grid system to get them all in place properly.

Down timer, When I made the timer it was counting down as I expected however, when the timer should have stopped at zero it continued 
counting down in to negative numbers. This was solved by the clear interval being added in when the value hit zero.

Cards flipping, I wanted the cards to flip smoothly from back face to front face. I added in the css to achieve this but the card was
doing a full rotation and going back to face down. An error in the degrees of rotation was to blame and was a simple fix.

Checking the cards matched, I used the console for this to start with. When starting out with the function I console logged a message
if the cards match to make sure I was on the right track. When this was working, I could add in the functionality for the css 
properties to change when the match was found. This was I knew if the css was not displaying it was a problem with that and not 
the matching of the cards function.

Checking for victory function. I added this is as a counter that counted up once every time the function was called from the if 
statement inside the card match function. I tested to make sure this worked again by using the console log to return a message 
if the parameters had been met. I started off by setting the value to one so I didn’t have to complete the entire game to check 
that this was working. Again, from the I could code in the overlay being displayed when the value hit 6 indicating the cards had 
all been matched and the game was won.

Checking for victory error. One error I had with this was the game could be won within in the time and the overlay for victory
be displayed. However, the timer was still running and when that hit zero it would then fire the game over messaged causing both
overlays to be shown at once. I fixed this by clearing the timer when the victory message was shown, therefore stopping the timer
to make sure the game over overlay was not going to show when it got to zero.

Shuffling the cards, using a function I had come across online I was able to shuffle the cards by reassigning them a value between
1-12 and displaying them in a random order. This was where the bootstrap grid system caused me errors with the function not working,
I did write one trying to rearrange things using the DOM but that caused it shuffle the card but then display them all over the screen
in random places. I decided to remove the bootstrap at this point as I felt it was giving me problems than it was solutions on this 
build.

Mobile view, when testing the bulk of the site it was done on desktop view. When I switched to mobile things were looking pretty
good apart from the card were rendering off the edge off the screen either side. Four card wide was clearly to wide for the mobile user. 
I created a media query for screens under 1000 pixels wide to change the grid to be three wide. That cleared up the problem and still 
made the game playable on mobile with all the cards on the screen at once.


Deployment.

I have deployed the site on GitHub pages, using the master branch of the files that are on there to power the site.
The deployed version of the site can be view here. https://marklewis27.github.io/card-game/


Credits.

Content. 
The down timer I got started with by looking for suggestions of stack overflow on how to construct one and built it up from there.

The card shuffle I have taken inspiration from another game online I found that used a similar principal on their game.

Matching the cards I used a lot of information from w3 schools to get the understanding of how to build that function along side
some googling for examples of code that could do similar things and the built it in to something that worked for me.


Media.

I got the images for the card fronts from a google search for images that were available to share and use without copyright.
Images for the back of the card are linked in from the font awesome site.


Acknowledgement.

I got the idea for the project from the suggestions of a game in the module. I also saw a project on slack that another student had
done for a card game like this and liked the idea so much I wanted to make my own.



