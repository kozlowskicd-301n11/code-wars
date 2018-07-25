## Code Wars Solution
*Link to all solutions:* https://www.codewars.com/users/kozlowskicd/completed_solutions
### 01 - Abbreviate a Two Word Name
The challenge was to take a string with a person's full name and turn it into capitalized initials seperated by a period.  Our strategy was to split the string into an array of two strings.  The first character of the two strings are concatenated and a period is added in between.  Finally, uppercase is forced incase the string wasn't initially capitalized and the result is returned.