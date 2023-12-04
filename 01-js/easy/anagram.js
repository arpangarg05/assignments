/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length == str2.length){
    if(str1.length == 0){return true;}
    for(let i=0;i<str1.length;i++){
      let flagg = false;
      for(let j=0;j<str1.length;j++){
        if(str1[i].toLowerCase() == str2[j].toLowerCase()){
          flagg = true;
        }
      }
      if (flagg==true){ return true;}
      else return false;
    }
  }
  return false;
}

module.exports = isAnagram;
