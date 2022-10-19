const User = require('../models/User');

const getAllUsers = async (req, res, next) => {
    let users;

    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }

    if (!users) {
        return res.status(404).json({ message: "No users found" });
    } else {
        return res.status(200).json({ users });
    }
}

const addUsers = async (req, res, next) => {
    const { name, dob, image, age, email, gender, phone, company, city } = req.body
    let users;
    try {
        users = new User({
            name,
            dob,
            image,
            age,
            gender,
            email,
            phone,
            company,
            city
        });

        await users.save();
    } catch (err) {
        console.log(err);
    }

    if (!users) {
        return res.status(500).json({ message: "Unable to add users" })
    } else {
        return res.status(200).json({ users });
    }
}

const getUserById = async (req, res, next) => {

    const id = req.params.id;
    let users;

    try {
        users = await User.findById(id);
    } catch (err) {
        console.log(err);
    }

    if (!users) {
        return res.status(404).json({ message: "No user found" })
    } else {
        return res.status(200).json({ users });
    }

}

const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, dob, image, age, email, gender, phone, company, city } = req.body
    let users;

    try {
        users = await User.findByIdAndUpdate(id, {
            name,
            dob,
            image,
            age,
            gender,
            email,
            phone,
            company,
            city
        })

        users = await users.save();

    } catch (err) {
        console.log(err);
    }

    if (!users) {
        return res.status(404).json({ message: "Unable to update the user by given ID" })
    } else {
        return res.status(200).json({ users });
    }
}

const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    let users;

    try {
        user = await User.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }

    if (!users) {
        return res.status(404).json({ message: "Unable to delete the user by given ID" })
    } else {
        return res.status(200).json({ message: "User deleted successfully" });
    }

}


exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;