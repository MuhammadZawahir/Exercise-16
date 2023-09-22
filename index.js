"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guests = void 0;
const Exercise_15_1 = require("../Exercise 15");
Object.defineProperty(exports, "guests", { enumerable: true, get: function () { return Exercise_15_1.guests; } });
console.log("\n\nI have just found a bigger dinner table.\n");
Exercise_15_1.guests.unshift("Messi"); //adding at the start
Exercise_15_1.guests.splice(2, 0, "Babar Azam"); //adding middle guest
Exercise_15_1.guests.push("Nelson Mandela"); //adding at the end
for (let guest of Exercise_15_1.guests) {
    console.log(`Hey ${guest}, you are invited to the dinner. `);
}
console.log(Exercise_15_1.guests);
