// Question 1
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

}

// Question 4
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
}


// Question 5
var reverseString = function (){
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
}

// Bonus 3
var numberOfArguments = function(){
  
  return arguments.length;

}
