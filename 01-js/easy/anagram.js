/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const alphabets = new Map();

  if(str1.length != str2.length)
    return false;

  if(str1 === str2)
    return true;

  for(let i=0;i<str1.length;i++){
    if(alphabets.has(str1[i]))
      alphabets.set(str1[i], alphabets.get(str1[i])+1);
    else
      alphabets.set(str1[i],1);
  }

  for(let i=0;i<str2.length;i++){
    if(alphabets.has(str2[i]))
      alphabets.set(str2[i], alphabets.get(str2[i])-1);
    else
    alphabets.set(str2[i],-1);
  }

  for (let value of alphabets.values()) {
    if (value !== 0) {
      return false;
    }

  return true;

}
}

module.exports = isAnagram;
