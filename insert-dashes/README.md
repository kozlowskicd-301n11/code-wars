## Code Wars Solution
*Link to all solutions:* https://www.codewars.com/users/kozlowskicd/completed_solutions
### 03 - Insert Dashes
The challenge was to take a string of numbers and insert a dash anytime two odd numbers are next to each other.  I did this by using a regular expression to find odd numbers, then match those with the odd numbers again.  If that test passes, then it will add a dash between the pair.  The expression is globally scopped so it will continue to check all numbers in the string automatically.