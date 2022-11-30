function isPalindrome(word) {
  let characters = word.split("");

  for (let i = 0; i < characters.length / 2; i++) {
    if (characters[i] !== characters[characters.length - i - 1]) {
      return false;
    }
  }
  return true;
}

/* 
  initialize an array called charaters with has in it the split string


  iterate through the first half of the array
    if the element and it's compliment are identical, keep going
    if not, then return false

    return true
*/

/*
  first break the input string into characters

  then put the characters into an array

  compare the first and last members through to the middle

  if at any point it comes back negative, then the string is not a palindrome and the funtion returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
