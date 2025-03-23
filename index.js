const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');

const app = express();
const PORT = 8000;

// middleware plugin for the handle form data of x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    fs.appendFile('log.txt', `\n${Date.now()}: ${req.method} : ${req.path}\n`, (err, data) => {
        next();
    });
    next();
});

app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${users.map((user, index) => `<li key=${index}>${user.first_name}</li>`).join(' ')}
        </ul >
    `;
    res.send(html);
});

app.get('/api/users', (req, res) => {
    return res.json(users);
});


// COMBINE THE THINGS OF SAME ROUTE WITH DIFFERENT REQUEST
// app.route('/api/users/:id')
//     .get((req, res) => {
//         const id = Number(req.params.id);
//         const user = users.find((user) => user.id === id);

//         return res.json(user);
//     })
//     .put((req, res) => {
//         // TODO: edit the user with id 
//         return res.json({ status: "pending" });
//     })
//     .delete((req, res) => {
//         // TODO: delete the user with id 
//         return res.json({ status: "pending" });
//     });

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    return res.json(user);
});

app.post("api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: (users.length + 1) });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: pending });
    })
    console.log("Body", body);
    // TODO: create new user 
    return res.json({ status: "pending" });
});

app.post("api/users/:id", (req, res) => {
    // TODO: edit the user with id 
    return res.json({ status: "pending" });
});

app.delete("api/users/:id", (req, res) => {
    // TODO: delete the user with id  
    return res.json({ status: "pending" });
});

app.listen(PORT, () => {
    console.log('backend server start listening on 8000 port')
});
