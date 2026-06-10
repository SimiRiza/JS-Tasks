// ======================================
// ARRAY MERGE & CONVERSION PRACTICE
// ======================================

// 1️⃣ Create two arrays
const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]


// 2️⃣ Add the entire dcHeros array inside marvelHeros
marvelHeros.push(dcHeros)
console.log(marvelHeros)


// 3️⃣ Access and print "flash"
console.log(marvelHeros[3][1])


// 4️⃣ Merge using concat
const allHeros = dcHeros.concat(marvelHeros)
console.log(allHeros)


// 5️⃣ Merge using spread operator
const modernMerge = [...dcHeros, ...marvelHeros]
console.log(modernMerge)


// 6️⃣ Create nested array
const anotherArray = [
    1, 2, 3,
    [4, 5, 6],
    7,
    [6, 7, [4, 5]]
]


// 7️⃣ Flatten completely
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)


// 8️⃣ Check whether "Hitesh" is an array
console.log(Array.isArray("Hitesh"))


// 9️⃣ Convert string into array of characters
console.log(Array.from("Hitesh"))


// 🔟 Convert object into array
console.log(Array.from({ name: "hitesh" }))
// Output: []


// 1️⃣1️⃣ Create scores
const score1 = 100
const score2 = 200
const score3 = 300


// 1️⃣2️⃣ Convert scores into array
const scores = Array.of(score1, score2, score3)
console.log(scores)