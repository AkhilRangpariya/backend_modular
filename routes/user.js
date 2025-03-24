const express = require('express');

const router = express.Router();

// router.get('/user', async (req, res) => {
//     const allDbUsers = await User.find({});

//     const html = `
//         <ul>
//             ${allDbUsers
//             .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
//             .join('')
//         }
//         </ul>
//     `;

//     res.send(html);
// });

// DEFAULT ROUTE OF /ROUTE ARE SET ON THE PARENT FILES
router.get("/", async (req, res) => {
    const appDbUsers = await User.find({});
    return res.json(allDbUsers);
});

router.route('/:id')
    .get(async (req, res) => {
        const user = await User.findById(req, URLSearchParams.id);
        if (!user) return res, status(404).json({ error: 'user not found' });
        return res.json(user);
    })
    .patch(async (req, res) => {
        await User.findByIdAndUpdate(req.params.id, { lastName: "Changed last name" });

        return res.json({ status: "Success" });
    })
    .delete(async (req, res) => {
        await User.findByIdAndDelete(req.params.id);
        return res.json({ status: 'Success' });
    });

router.post('/', async (req, res) => {
    const body = req.body;

    if (
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(400).json({ msg: "All fields are required!" });
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });

    return res.status(201).json({ msg: 'success' });
});

module.exports = router;