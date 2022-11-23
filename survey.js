const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let results = {
  update : function(property, input) {
    this[property] = input;
  }
};


rl.question('What\'s your name? Nicknames are also acceptable :)?', (answer, next) => {
  console.log(`Nice to meet you ${answer}!`);
  results.update("name", answer);
  rl.question("What's an activity you like doing?", (answer) => {
    results.update("hobby", answer);
    rl.question("What do you listen to while doing that?", (answer) => {
      results.update("music", answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        results.update("meal", answer);
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          results.update("food", answer);
          rl.question("Which sport is your absolute favourite?", (answer) => {
            results.update("sport", answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              results.update("power", answer);
              console.log(`Hi! My name is ${results.name}.\nMy hobby is ${results.hobby} and I like to listen to ${results.music} during it.\nMy favourite meal of the day is ${results.meal} and my favorite food is ${results.food}!\nMy favourite sport is ${results.sport} and I would say my super power is ${results.power}.\nNice to meet you!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


