// add solution here
let targetArray = [];
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay() {
for (let i=0,i<musicians.length,i++) {
  targetArray.push(`${musicians[i]} plays ${instruments[i]}.`);
}
return targetArray;
}
