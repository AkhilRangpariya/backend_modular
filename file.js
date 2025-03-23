const fs = require('fs');
// sync task 
// fs.writeFileSync('./files/text.txt', 'Hello World');
// async
// fs.writeFile('./files/text.txt', 'Hello World');

// const contactsData = fs.readFileSync('./files/contacts.txt', 'utf-8');
// console.log('sync contacts.txt data ', contactsData);

// fs.readFile('./files/contacts.txt', 'utf-8', function (err, data) {
//     if(err){
//         console.error('data not found', err.message);
//     }
//     else{
//         console.log('contacts.txt data', data);   
//     }
// })

// fs.appendFileSync('./files/text.txt', new Date().getDate().toLocaleString());
fs.appendFileSync('./files/log.txt', `${Date.now()} Hey There\n`);
fs.cpSync('./files/text/txt', './files/copy.txt');

// fs.unlink('./files/text.txt');
// console.log(fs.statSync('./files/text.txt'));

// fs.mkdirSync('my-docs');
// fs.mkdirSync('my-docs/a/b', { recursive: true });
