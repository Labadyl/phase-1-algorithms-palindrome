function reverse(word){
  const reverseWord = word.split("").reverse().join("")
  return reverseWord
}
function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = reverse(word)
  if (word === reverseWord){
    return true;
  }else{
    return false;
  }
}
  
/* 
  The string return true if the string is a palindrome
If the string is not a palindrome return false
*/

/*
write a make a function that reverse a string
using loop to reverse the string
use a if statement on the new string 
if new srting = old srting return turn else reture false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // mom shound be true
  // bob should be true 
  // cat shoukd be false
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("bob"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
}

module.exports = isPalindrome;
