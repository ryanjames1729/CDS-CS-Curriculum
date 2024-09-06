const storyParagraph = "Once upon a time, there was a brave knight named Sir Lancelot. He embarked on a perilous quest to rescue a captured princess from the clutches of an evil dragon. Along his journey, he encountered treacherous forests, daunting mountains, and dark caves. With his unwavering courage and sharp sword, Sir Lancelot overcame every obstacle and finally reached the dragon's lair. After a fierce battle, he defeated the dragon and saved the princess, bringing peace and happiness to the kingdom.";

console.log(storyParagraph);

// Type your code below.
let l = storyParagraph.length;
let uc = storyParagraph.toUpperCase();
let sub = storyParagraph.substring(0, 25);
let words = storyParagraph.split(" ");
let w = words.length;

let indexOfDragon = storyParagraph.indexOf("dragon");
let replacedString = storyParagraph.replace("Sir Lancelot", "Sir Galahad");

console.log(l);
console.log(uc);
console.log(sub);
console.log(w);
console.log(replacedString)