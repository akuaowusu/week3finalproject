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
  console.log(id)
});

$('.b').on('click', function() {
  console.log('b');
  let id = event.currentTarget.closest('.cactuscontainer').id;
  questions[id]="b";
  console.log(id)
});

$('.c').on('click', function() {
  console.log('c');
  let id = event.currentTarget.closest('.cactuscontainer').id;
  questions[id]="c";
  console.log(id)
});

$('.d').on('click', function() {
  console.log('d');
  let id = event.currentTarget.closest('.cactuscontainer').id;
  questions[id]="d";
  console.log(id)
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
        console.log(frequency[values])
      }
      else {
        frequency[values] = 0;
        frequency[values]++;
        console.log(frequency[values])
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
        values = key;
        console.log("letter", key);

        if (key==="a") {
          alert("Your buddy is: Cheery Christine! Message: Today, you are in a great mood. You are feeling happy and cheerful, wishing that you could be dancing and walking on sunshine. Your happiness is contagious and everyone around you can sense your good vibes. Cheery Christine is here to help you spread that happiness. With her silly shape that grows unrestrained in every direction and brings you back to your childhood with her Minney-like outline, she will assist you in your mission of spreading happiness. She will be the best cactus buddy to maintain your optimism and help you share it with those around you.");
        }
        else if(key==="b") {
          alert("Your buddy is: Adventure Adam! Message: There is nothing you want more today than to go outside your house and go on an adventure. You have a sense of wanderlust, would love nothing more than to get on an airplane to a new destination, hike through beautiful landscapes or find new things that fill you with passion. These feelings might come with hope that something better is around the corner, new things to experience and cherish. Adventure Adam understands you. With his arms open and facing the sky, he is open to new experiences and opportunities of fun and hope. Let your new buddy Adam be there with you as together you seek new adventure.");
        }
        else if(key==="c") {
          alert("Your buddy is: Gloomy Gwen! Message: You aren’t feeling too energetic today, and probably wish you could just watch TV, sleep or listen to slow music. Probably, your inner introvert is shining through as you do not have much energy to socialize today. It is hard to have one of these sad days, especially when you might feel others around you don’t understand. Gloomy Gwen is here to keep you company as you process your emotions. As she guards her core with some mini cactuses around her, Gwen also feels like she might want to keep to herself and not socialize. Also, keeping low to the ground, Gwen just wants to rest and stay still. Your new buddy will keep you company, and together you will manage to go through your emotions and come out feeling better afterwards.");
        }
        else {
          alert("Your buddy is: Feisty Fred! Today, you are feeling everything intensely, and anger or frustration are probably ruling your emotions. You would like to blow up steam, either by listening to intense music or maybe practicing some boxing. These are emotions that are hard to deal with, and often we snap at people or can’t even stand our own anger. But don’t despair, Feisty Fred is here for you. Your buddy today understands angers, protects himself from annoying intruders with his sharp spikes, and he is determined to be left alone. He will protect you from anyone that might annoy you as you go through your emotions. There is no better buddy than Feisty Fred for your current needs");
        }

        }
    }
}
