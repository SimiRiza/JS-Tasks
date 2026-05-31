// ======================================
// ARRAY MERGE & CONVERSION PRACTICE
// ======================================

// 1️⃣ Create two arrays
// marvelHeros → "thor", "ironman", "spiderman"
// dcHeros → "superman", "flash", "batman"
const marvelHeros =[ "thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]


// 2️⃣ Add the entire dcHeros array inside marvelHeros
// Print the result
marvelHeros.push(dcHeros)
console.log(marvelHeros);


// 3️⃣ Access and print "flash" using indexing from the nested structure
console.log(marvelHeros[3][1]); //flash



// 4️⃣ Create two NEW arrays again (same values as before)
// Merge them into a new variable called allHeros
// The result should be one single array containing all heroes
const allHeros = dcHeros.concat(marvelHeros)


// 5️⃣ Create another variable called modernMerge
// Merge the same two arrays again but using the modern JavaScript way
const modernMerge = [...dcHeros,...marvelHeros]


// 6️⃣ Create this nested array
// [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]


// 7️⃣ Convert the nested array into a completely flat array
// Print the result


// 8️⃣ Check whether the value "Hitesh" is an array
// Print the result


// 9️⃣ Convert the string "Hitesh" into an array of characters
// Print the result


// 🔟 Try converting this object into an array
// { name: "hitesh" }
// Print the result


// 1️⃣1️⃣ Create three variables
// score1 = 100
// score2 = 200
// score3 = 300


// 1️⃣2️⃣ Convert those scores into a single array
// Print the final array