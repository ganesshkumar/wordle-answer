# wordle-answer
https://wordle-answer.vercel.app

## How it works?

- Opening the `main.xxxxxxxx.js` of Wordle page and search for today's answer, quickly points us to an array of words from which Wordle chooses today's word.  


![image](https://user-images.githubusercontent.com/2135089/151059636-34ed70f6-2cb5-4493-9f74-5254e11c8585.png)


- So, we have Wordle's wordlist. Next, we have to find out how Wordle picks up today's word.

![image](https://user-images.githubusercontent.com/2135089/151059978-9bace9a0-501c-4ed1-bf61-db0f05948e9a.png)

- A usage search on the array of words brings us to the above function. We can see that a random word is picked using an index computed by `a=s%La.length`. So, Wordle is picking words in sequence from this array. When it reaches the end, it will starting picking a word from the beginning of the wordlist. Still, we have to figure out the index, *s*, is being calculated. 

![image](https://user-images.githubusercontent.com/2135089/151061636-7d295cb4-3070-4eec-ad07-9511268f9212.png)


- *s* is compute from Ga by calling a funcation *Na* with two parameters. 
- *Na* just finds the number of days elapsed between the two parameters passed.
- The second parameter is today's date and 
- The first parameter is given by *Ha* = Jun 19th 2021.


### How to get today's word?
**All we have to do is find the number of days between today and Jun 19th 2021 and use it as the index for the wordlist found in the js file of Wordle**

Give any random date, we can predict the word for that date. That's what [this webpage](https://wordle-answer.vercel.app) is based on, to find today's and tomorrow's answer.
