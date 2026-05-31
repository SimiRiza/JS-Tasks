// ===============================
// ARRAY PRACTICE TASK
// ===============================

// 1️⃣ Create an array called songs
// The array should contain:
// "Believer", "Numb", "Faded", "Hall of Fame"
const  songs = ["Believer", "Numb", "Faded", "Hall of Fame"]


// 2️⃣ Add a new song at the end of the playlist
// The song to add: "Unstoppable"
songs.push("Unstoppable")


// 3️⃣ Remove the last song from the playlist
songs.pop()


// 4️⃣ Add a song to the beginning of the playlist
// The song: "Legends Never Die"
songs.unshift( "Legends Never Die")                 // imp use unshift


// 5️⃣ Remove the first song from the playlist
songs.shift()                                       //imp use shift

// 6️⃣ Check whether the playlist contains the song "Faded"
// Print the result in console
const exists = songs.includes("Faded")
console.log(exists);



// 7️⃣ Find the position of the song "Numb"
// Print the result
console.log(songs.indexOf("Numb"))


// 8️⃣ Convert the playlist into a single string
// The songs should be separated by " | "
const str = songs.join("|")
console.log(str);

// 9️⃣ Print the original playlist
console.log(songs);



// 10️⃣ Create a new variable called topSongs
// It should contain a portion of the playlist starting from index 1 up to index 3
// The original playlist should NOT change
const topsongs = songs.slice(1,4)


// 11️⃣ Print 
console.log(topsongs);



// 12️⃣ Now remove 2 songs from the playlist starting from index 1
// Store the removed songs in a variable called removedSongs
const remov = songs.splice(1,2)


// 13️⃣ Print the updated playlist
console.log(songs);


// 14️⃣ Print the removed songs
console.log(remov);
