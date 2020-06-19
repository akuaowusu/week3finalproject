//maybe have 4 classes: a,b,c,d
//we store which class the user picks for each question in an array
//give a cactus based off which class they picked the most
    //so we calculate which letter occurs the most in the array once there's 5 letters
//if we go for 5 questions what happens if they pick 2 a's 2 b's and 1 c?
//how will the results show up? in an alert? link to a new page?

let questions = {};
let letters = [];

$('.a').on('click', function(event) {
  console.log('a');
  let id = event.currentTarget.closest('.cactuscontainer').id;
  console.log(event);
  questions[id]="a";
  console.log(letters)
});

$('.b').on('click', function() {
  console.log('b');
  let id = event.currentTarget.closest('.cactuscontainer').id;
  questions[id]="b";
  console.log(letters)
});

$('.c').on('click', function() {
  console.log('c');
  let id = event.currentTarget.closest('.cactuscontainer').id;
  questions[id]="c";
  console.log(letters)
});

$('.d').on('click', function() {
  console.log('d');
  let id = event.currentTarget.closest('.cactuscontainer').id;
  questions[id]="d";
  console.log(id);
  console.log(id, questions);
});

$('.done').on('click', function() {
  quiz();
});

function quiz() {
  let questionIDs = Object.keys(questions)
  let frequency = {};
  console.log("1",questionIDs);
  for(var i = 0; i < questionIDs.length; ++i) {
      let key = questionIDs [i];
      console.log(key);
      console.log(questions);
      let values = questions[key];
      console.log(values);
      if (frequency[values]) {
        frequency[values]++;
        console.log("this", frequency[values])
      }
      else {
        frequency[values] = 0;
        frequency[values]++;
        console.log("else", frequency[values])
      }
   }
    console.log(frequency)
    let keys = Object.keys(frequency);
    let container = 0;
    for (var i=0; i < keys.length; ++i) {
      let key = keys[i];
      let values = frequency[key];
      if (values > container) {
        container = values;
        console.log(container);
      }
    }
}
