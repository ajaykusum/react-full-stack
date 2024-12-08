
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const users = require('../models/user.model');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getUser = async (req, res) => {
    
    const { email, password } = req.body; // Use req.body to get the payload
    console.log("Email received:", email);

    try {
        // Query the database for the user
        // console.log("Querying database with email:", email);
        const user = await users.findOne({ email: email });
        console.log("Query result:", user);

        if (!user) {
            // If no user is found, respond with a 404 error
            return res.status(404).json({ status: "Error", message: "User not found" });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match result:", isMatch);
        if (isMatch) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '10min' });
            return res.status(200).json({ status: "OK", message: "User found successfully", data: user, token: token });
        } else {
            return res.status(401).json({ status: "Error", message: "Invalid password" });
        }
    } catch (error) {
        console.error("Error occurred:", error);
        return res.status(500).json({ status: "Error", message: "Server Error" });
    }
};





const createUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const existingUser = await users.findOne({email});
        if (existingUser){
            return res.status(400).json({message: "Email already exists"});
        }
        req.body.password = hashedPassword;
        const createdUser = await users.create(req.body);
        return res.status(200).json({ status: "OK", message: "User Registered successfully", data: createdUser});
    } catch (error) {
        console.error(error);
        if(error.name === 'ValidationError'){
            return res.status(400).json({message: error.message});
        }
        res.status(500).json({ message: "Server Error" });
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    try{
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        if(!updatedUser){
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json(updatedUser);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try{
        const deletedUser = User.findByIdAndDelete(id);
        if(!deletedUser){
            return res.status(404).json({message: 'User not found'});
        }

        res.status(200).json(deletedUser);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};