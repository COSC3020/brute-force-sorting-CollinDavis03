# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst-case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


## Answer 
**What we know** 

We know that the runtime of genPerm() is $O(n!)$ because if you give it an array the size of n it will do n! permutations. 

We know that isSorted() is checking the array if it is sorted and that would give you $O(n)$ permutations for it. 

The best-case runtime would be $O(n! + n)$ if you inserted a sorted list into it because the array has to go through genPerm() first and since it is already sorted it will go through isSorted() and you have to the ad the two together. 

The worst-case runtime would be $O(n! * n)$ The reason is that if you gave it a reverse-sorted array it would have to go through it multiple times until it is sorted. 

With the randomly sorted one, each permutation has a $1 / n!$ chance of being sorted and would give you $O(n! * n)$ as the runtime.  

## Mistake
If I am going to be honest I do not know why I wrote arr[a]. I think I had in my head to write arr[i-1] but for some reason, I typed arr[a]. When I saw the error with the counter-example I was a little lost on what it was asking for. I tried doing the debugging myself and then I gave it three tries and then I gave up after that and asked ChatGPT what it was asking. Then it said I had arr[a] instead of arr[i-1] and I thought that was my mistake. After that, I started to just read each line of my code and make sure I had it where I wanted it to be. It was a simple typo on my part and I was not reading my code deeply enough to realize that I had made that mistake. The GenPerm is going through it multiple times so you have to multiply it by n!.

## Sources
I watched a YouTube (https://www.youtube.com/watch?v=t2Q2tc0V8SY) video on brute force sorting to better understand how it works. I also looked at Nolan Berg's and Cian Melker's repos so I could get a better understanding of how to write the code, which I implemented myself. All the comments you see in the code are generalizations of what their code did but I wrote it in my own words. The only thing I used AI on was the change for [a-1] to arr[i-1] because I was confused about what the error message was saying I asked ChatGPT about it and it said to change this and then my code worked. 

## Plagrism Statement 
“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
