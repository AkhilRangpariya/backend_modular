const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 8000;

app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${users.map((user, index) => `<li key=${index}>${user.first_name}</li>`)}
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

app.post("api/users", (res, res) => {
    // TODO: create new user 
    return res.json({ status: "pending" });
});

app.post("api/users/:id", (res, res) => {
    // TODO: edit the user with id 
    return res.json({ status: "pending" });
});

app.delete("api/users/:id", (res, res) => {
    // TODO: delete the user with id  
    return res.json({ status: "pending" });
})

app.listen(PORT, () => {
    console.log('backend server start listening on 8000 port')
})
