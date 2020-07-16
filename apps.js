console.log('hello world');

///////////////////
// Solution 1
//////////////////

// let words = {
//   number: "",
//   adjective: "",
//   pluralNoun: "",
//   adverb: "",
//   anotherAdjective: "",
// }

// const startMadLib = () => {
  // words.number = prompt('Give me a number.');
  // words.adjective = prompt('Give me an adjective.');
  // words.pluralNoun = prompt('Give me a plural noun.');
  // words.adverb = prompt('Give me an adverb.');
  // words.anotherAdjective = prompt('Give me another adjective!');
  //   alert("Once upon a time a group of " + words.number + " General Assembly Students got together and made a startup called " +words.adjective + " Technologies.  Their goal was to create smart " + words.pluralNoun + ". They approached the challange " + words.adverb  + " which ultimately lead them to " + words.anotherAdjective + " fame.");
    // let choice = prompt('Start again?', 'Yes/No')
    //   if (choice.toLowerCase() === 'yes') {
    //     alert('Okay, lets reset!');
    //      words.number = "";
    //      words.adjective = "";
    //      words.pluralNoun = "";
    //      words.adverb = "";
    //      anotherAdjective = "";
    //      startMadLib();
    //   } else if (choice.toLowerCase() === 'no') {
    //     alert("Alright, never mind then!");
    //   }
    // }

// startMadLib();

//////////////////
// Solution 2
//////////////////

let madWords = [];

const submit = () => {
  document.getElementById("p-body").style.color = "black";
  document.getElementById("p-body").style.transition = "all 1s";
  madWords.push(document.getElementById("input1").value);
  document.getElementById("q1").innerHTML = madWords[0];
  madWords.push(document.getElementById("input2").value);
  document.getElementById("q2").innerHTML = madWords[1];
  madWords.push(document.getElementById("input3").value);
  document.getElementById("q3").innerHTML = madWords[2];
  madWords.push(document.getElementById("input4").value);
  document.getElementById("q4").innerHTML = madWords[3];
  madWords.push(document.getElementById("input5").value);
  document.getElementById("q5").innerHTML = madWords[4];
  console.log(madWords);
}

const reset = ()  =>  {
  document.getElementById("p-body").style.color = "";
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
  document.getElementById("input4").value = "";
  document.getElementById("input5").value= "";
  madWords = []
}
