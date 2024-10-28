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
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


## Answer 
We know the best-case scenario for this code would be _O_(n) and that's if the array is already sorted when you put it in. It would just have to look at each element in the array and since it will be sorted the runtime will be based on the amount of elements there are.

The worst-case scenario is infinite time or _O_(n!). The reason is because it will go on forever and there might not be an end to the sorting and even when it is sorted it might not be correct either. With this, it might never stop sorting because it has no way to see that it is sorted completely and is going to keep on going until it eventually sorts it. Which might be infinite. 

Number permutations there are is n! because we get the length of the array which is n and then it goes down the list of the array multiplying one another which gives you n factorial. This is in the GenPerm function. 

The work being done is $O(n)$ because in the isSorted function, it checks if each permutation is sorted. This function iterates over the array once making a comparison of each adjacent pair of elements. 

so the time would be $O(n x n!)$ = $O(n!)$

## Mistake
If I am going to be honest I do not know why I wrote arr[a]. I think I had in my head to write arr[i-1] but for some reason, I typed arr[a]. When I saw the error with the counter-example I was a little lost on what it was asking for. I tried doing the debugging myself and then I gave it three tries and then I gave up after that and asked ChatGPT what it was asking. Then it said I had arr[a] instead of arr[i-1] and I thought that was my mistake. After that, I started to just read each line of my code and make sure I had it where I want it to be. It was a simple typo on my part and I was not reading my code deeply enough to realize that I had made that mistake. 
## Sources
I watched a YouTube (https://www.youtube.com/watch?v=t2Q2tc0V8SY) video on brute force sorting to better understand how it works. I also looked at Nolan Berg's and Cian Melker's repos so I could get a better understanding of how to write the code, which I implemented myself. All the comments you see in the code are generalizations of what their code did but I wrote it in my own words. The only thing I used AI on was the change for [a-1] to arr[i-1] because I was confused about what the error message was saying I asked ChatGPT about it and it said to change this and then my code worked. 

## Plagrism Statement 
“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
