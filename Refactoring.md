# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
Personally for me, a page of code is readable if it has a concise amount of lines of code, and if the page is styled/linted consistently.
I removed the if(candidate) branch because the candidate variable is dependent on an input. If there is no input, then candidate will always be null. Therefore, I can move all the logic in the if(candidate) branch into the if(event) branch
I used ternary operators because I wanted to bring down the lines of code. There's already a lot of if and else branching going on, so cutting these branches into a single line of code with a ternary makes the page more concise and overall more readable.
Finally I set canadidate to null, just to initialize it to a type, so that I can do an early return statement if there is no input. I turned into into a single line if statement to reduce the lines of code.