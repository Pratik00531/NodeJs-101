//Q1. MAke a folder named Space_program
const fs = require('fs')
// fs.mkdirSync("Space_program");

 // Q1.2 Make a folder named Space_program1  by using  asynchronous way

// fs.mkdir("Space_program1", (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log("Folder created");
// }); 

//Q2. Inside the folder , create a text file named  log.txt and add the line "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft."
// let x = "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft."
// fs.writeFileSync("Space_program/log.txt", x);

// Using Asynchronous way
// fs.writeFile("Space_program1/log.txt", x, (err) => {
//     if(err) {
//         throw err;
//     }


// //Q3. Now, replace the line in the log.txt file with "ISRO has started working on Gaganyaan."
// fs.writeFileSync("Space_program/log.txt", "ISRO has started working on Gaganyaan.");
// // Using Asynchronous way
// fs.writeFile("Space_program1/log.txt", "ISRO has started working on Gaganyaan.", (err) => {  
//     if(err) {
//         throw err;
//     }


// // Q4. Append another line to the log.txt file " The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission."
// fs.appendFileSync("Space_program/log.txt", " *\n The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.");
// // Using Asynchronous way
// fs.appendFile("Space_program1/log.txt", " *\n The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.", (err) => {
//     if(err) {
//         throw err;
//     }

// //Q5. Rename log.txt file to updated.txt
// fs.renameSync("Space_program/log.txt", "Space_program/updated.txt");
// // Using Asynchronous way
// fs.rename("Space_program1/log.txt", "Space_program1/updated.txt", (err) => {
//     if(err) {
//         throw err;
//     }


// //Q6. Read the update.txt file and display the data. Additionally print a line "We are excited" using console.log() after the read operation
// let data = fs.readFileSync("./space_program/updated.txt")
// console.log(data.toString());
// console.log("We are excited");

// // Using Asynchronous way
// fs.readFile("Space_program1/updated.txt", (err, data) => {
//     if(err) {
//         throw err;
//     }
//     console.log(data.toString());
//     console.log("We are excited");


// //Q7.Delete the updated.txt file
// fs.unlinkSync("Space_program/updated.txt");
// // Using Asynchronous way
// fs.unlink("Space_program1/updated.txt", (err) => {
//     if(err) {
//         throw err;
//     }


// // Q8. Delete the Space_program folder
// fs.rmdirSync("Space_program1");
// // Using Asynchronous way
// fs.rmdir("Space_program1", (err) => {
//     if(err) {
//         throw err;
//     }
// });