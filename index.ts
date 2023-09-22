/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/



import { guests } from "../Exercise 15";
console.log("\n\nI have just found a bigger dinner table.\n");
guests.unshift("Messi");//adding at the start
guests.splice(2,0,"Babar Azam");//adding middle guest
guests.push("Nelson Mandela");//adding at the end
for (let guest of guests){
    console.log(`Hey ${guest}, you are invited to the dinner. `);
    
}
export {guests}
console.log(guests);
