// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true);

// if (parsedUrl.pathname === '/api' && req.method === 'GET') {
// if (req.url === '/api/greeting' && req.method === 'GET') {
// if (parsedUrl.pathname === '/api/greeting' && req.method === 'GET') {
//     const responseData = {
//         message: `Hello from the API!.`
//     };
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(responseData));
//     return;
// }
// if (parsedUrl.pathname === '/api/info' && req.method === 'GET') {


// const responseData = {
//     message: `Hello from the API!.`
// };

// if (req.url === '/api/text' && req.method === 'GET') {
// if (req.url === '/api/greeting' && req.method === 'GET') {
// if (req.url === '/api/text' && req.method === 'GET') {
//     const responseData = {
//         user: 'Alice' , age:25, status:'active'
//     };
// if (parsedUrl.pathname === '/api/details' && req.method === 'GET') {
// if (parsedUrl.pathname === '/api/isEven' && req.method === 'GET') {
// if (parsedUrl.pathname === '/api/uppercase' && req.method === 'GET') {
// if (parsedUrl.pathname === '/api/book' && req.method === 'GET') {
// const author = parsedUrl.query.author;
// const title = parsedUrl.query.title;
// const word = parsedUrl.query.word || "No Word Provided";
// const name = parsedUrl.query.name || "User";
// const age1 = parsedUrl.query.age || "Unknown";

// const responseData = {
//     message: `Hello,${name}! you are ${age1} years old.`
// };
// const responseData =
//     { "user": 'Alice', "age": 25, status: 'active' }

// { "id": 1, "name": "Alice" }]
//     // { "id": 2, "name": "Bob" }
// ]
// const number = parseInt(parsedUrl.query.number) ;
// if (isNaN(number)) {
//     res.statusCode = 400; // Bad Request
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ error: "Invalid or missing 'number' parameter" }));
//     return;
// }
// const responseData = {
//     status: number % 2 === 0 ? `${number} is even` : `${number} is odd`
// };
// const responseData = {
//     uppercase: word.toUpperCase()
// }
// if (!title || !author) {
//     res.statusCode = 400; // Bad Request
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ error: "Both 'title and 'author' parameters are required." }));
//     return;
// }
// const responseData = {
//     description: `${title} by ${author}`
// }
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(responseData));
//     return;
// }
// res.end(`Query parameter 'name': ${responseData.status}`);
// res.end(JSON.stringify(users));
// res.end(JSON.stringify(responseData));
// res.setHeader('Content-Type', 'text/plain');
// res.setHeader('Content-Type', 'application/json');
// res.end(JSON.stringify(responseData));
// res.setHeader('Content-Type', 'text/plain');
// res.end(`Query parameter 'name': ${responseData.message}`);

//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Not Found');
//  });



// const PORT = 3001;
// server.listen(PORT, () => {

// console.log(`Server running at http://localhost:${PORT}/api/greeting`);
// console.log(`Server running at http://localhost:${PORT}/api/info?name=John&age=25`);
// console.log(`Server running at http://localhost:${PORT}/api/uppercase?word=hello`);
// console.log(`Server running at http://localhost:${PORT}/api/book?author=J.K.Rowling`);
// console.log(`Server running at http://localhost:${PORT}/api/book?title=Harry%20Potter&author=J.K.Rowling`);
// console.log(`Server running at http://localhost:${PORT}/api`);
// console.log(`Server running at http://localhost:${PORT}/api/details`);
//    console.log(`Server running at http://localhost:${PORT}/`);

//  });




// // app.get('/', (req, res) => {
// // app.get('/api', (req, res) => {

// app.get('/api/greet', (req, res) => {
//     const name = req.query.name || "User";

//     // res.send('Hello from Express!');
//     // res.json(
//     //     {
//     //         message: 'Welcome to Express API'
//     //     }
//     // );
//     res.json(
//         {
//             greeting: `Hello ${name}!`
//         }
//     );
// });

// app.listen(3001, () => {
//     console.log('Server listening on port 3001');
// });
import greetUser from './controllers/greetController.js';
import getUserProfile from './controllers/profileController.js';
import  getFlashcardList  from './controllers/flashcardListController.js';
import  createFlashcard from './controllers/flashcardController.js';
import express from 'express';
// const express = require('express');
const app = express();
const PORT = 3001; 

app.use(express.json());

// app.get('/api/greet', greetUser);
// app.get('/api/profile',getUserProfile);
app.get('/api/flashcard-list',getFlashcardList);
app.post('/api/flashcard',createFlashcard);



app.listen(PORT , () => {

    // console.log(`Server running at http://localhost:${PORT}/api/greet?name=John`);
    console.log(`Server running at http://localhost:${PORT}/api/flashcard`);

});

