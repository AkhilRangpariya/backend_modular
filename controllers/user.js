const User = require('../models/user')

async function handleGetAllUsers(req, res) {
    const appDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req, URLSearchParams.id);
    if (!user) return res, status(404).json({ error: 'user not found' });
    return res.json(user);
}

async function handleUpdateById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed last name" });

    return res.json({ status: "Success" });
}

async function handleDeleteById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: 'Success' });
}

async function handleCreateNewUser(req, res) {
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

    return res.status(201).json({ msg: 'success', id: result._id});
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateById,
    handleDeleteById,
    handleCreateNewUser,
}