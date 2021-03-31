// function createInstructor(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   };
// }
const createInstructor = (firstName,lastName) => ( {firstName, lastName} );
console.log(createInstructor('Jerry','Hsu'))

// var favoriteNumber = 42;
// var instructor = {
//   firstName: "Colt",
// };
// instructor[favoriteNumber] = "That is my favorite!";
const favoriteNumber = 42;
const instructor = {
  firstName: 'Colt',
  [favoriteNumber]: 'That is my favorite!'
}
console.log(instructor);

// var instructor = {
//   firstName: "Colt",
//   sayHi: function () {
//     return "Hi!";
//   },
//   sayBye: function () {
//     return this.firstName + " says bye!";
//   },
// };
const instructorObj = {
  firstName: 'Colt',
  sayHi() { return 'Hi!' },
  sayBye() { return this.firstName + ' says bye!'}
}
console.log(instructorObj.firstName);
console.log(instructorObj.sayHi());
console.log(instructorObj.sayBye());

// createAnimal function
const createAnimal = (species, verb, noise) => {
  return {  species,
            verb, 
            [verb]() { 
              return `${noise}!`
            }
          }
}

const d = createAnimal("dog", "bark", "Woooof!")
const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
d.bark();
s.bleet();