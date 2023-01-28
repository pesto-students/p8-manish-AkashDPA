/**
 * Exercise 5.2:
 * Write a function called vowelCount which accepts a string
 * and returns a map where the keys arenumbers and the values are the count of the vowels in the string
 * 
 */

class CustomMap {
	constructor() {
		this.map = {};
	}
	has(key){
		return this.map.hasOwnProperty(key);
	}
	set(key, value){
		this.map[key] = value
	}
	get(key){
		return this.map[key]
	}
	getObject(){
		return this.map
	}
}

let isVowel = (char) => {
    let vowels = "aeiou";
    return vowels.includes(char);
};
  
let vowelCount = (str) => {
    let vowelMap = new CustomMap();

    for (let char of str) {
      let lowerCaseChar = char.toLowerCase();
      if (isVowel(lowerCaseChar)) {
        if (vowelMap.has(lowerCaseChar)) {
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
          continue;
        }
        vowelMap.set(lowerCaseChar, 1);
      }
    }

    return vowelMap.getObject();
};
  
console.log(vowelCount("Akash"));
  