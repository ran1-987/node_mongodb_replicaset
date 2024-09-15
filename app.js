import express from 'express';
import { connect } from 'mongoose';
import User from './models/users.js'; // Import the User model
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
const app = express();
const port = 3000;

// MongoDB replica set connection string
// const uri = "mongodb://localhost:27017,localhost:27018,localhost:27019/Person?replicaSet=rs0";

const connectToDB = async (callback) => {
    try {
        console.log(uri)
        await connect(uri, { readPreference: 'primary' });
        console.log("Connected to MongoDB replica set!");
        if (callback) callback();  // Execute callback after successful connection
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};

// Define a GET endpoint to fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();  // Fetch all users from the 'users' collection
        res.json(users);  // Send the users as a JSON response
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Error fetching users");
    }
});

// Call connectToDB with an arrow function to start the server
connectToDB(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});