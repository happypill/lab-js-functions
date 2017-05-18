// Question 1
<<<<<<< HEAD
function maxOfTwoNumbers(x,y) {
	if(x<y){
		return y;
	}else if(x>y){
		return x;
	}
}

// Question 2
function maxOfThree(x,y,z) {
  if (x > y && x > z) {
    return x;
  }

  if (y > x && y > z) {
    return y;
  }

  if (z > x && z > y) {
    return z;
  }
}

// Question 3
function isCharacterAVowel(x) {
	var vowels = ['a','e','i','o','u'];
	if(vowels.indexOf(c.toLowerCase()!==-1)){
		return true;
	}
	else
		return false;
=======
function maxOfTwoNumbers() {

}

// Question 2
function maxOfThree() {

}

// Question 3
function isCharacterAVowel() {
>>>>>>> 3e56b85a90f9e62b1074355990a1b39004b4595d

}

// Question 4
<<<<<<< HEAD
function sumArray(arr) {
	return arr.reduce(function(a, b) {
    return a + b;
  });
}

// Question 4
function multiplyArray() {
 var unit = arr[0];
  for (var i = 1; i < arr.length; i++) {
    unit *=arr[i];
  }
  return unit;
=======
function sumArray() {
 
}


// Question 4
function multiplyArray() {

>>>>>>> 3e56b85a90f9e62b1074355990a1b39004b4595d
}


// Question 5
var reverseString = function (){
<<<<<<< HEAD
	return this.split('').reverse().join('');
  
};

// Question 6

function findLongestWord(arr) {
  var longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

// Question 7
function filterLongWords(arr, i) {
  return arr.filter(function(element, index) {
    return arr[index].length > i;
  })
}
// Bonus 1
String.prototype.reverse = function(){
  return this.split('').reverse().join('');
};


// Bonus 2
function charactersOccurencesCount(s) {
  var occurs= {};
  s.split("").forEach(function(element) {
    if (element in occurs) {
      occurs[element] += 1;
    }
    else {
      occurs[element] = 1;
    }
  });
  return occurs;
=======
  
};


// Question 8
function findLongestWord () {
  
}

// Question 9
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
>>>>>>> 3e56b85a90f9e62b1074355990a1b39004b4595d
}

// Bonus 3
var numberOfArguments = function(){
  
<<<<<<< HEAD
  return arguments.length;

=======
>>>>>>> 3e56b85a90f9e62b1074355990a1b39004b4595d
}
