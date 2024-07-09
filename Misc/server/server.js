const mongoose = require('mongoose');

const express = require('express')
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors()); // Enable Cors

const UserInfo = require('./models/user.model.js');

const PORT = 5000

app.get('/', (req, res) => {
    res.json({"users": ["user1", "user2"]});
});

//? get all users
app.get('/api/users', async (req,res) => {
    try {
        const users = await UserInfo.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//? request a single user
app.get('/api/user/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const user = await UserInfo.findById(id);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//? Insert a new user using this API
app.post('/api/new_user', async (req, res) => {
    try{
        const user = await UserInfo.create(req.body);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//? update user with this API
app.put('/api/new_user/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const user = await UserInfo.findByIdAndUpdate(id, req.body, {new: true});

        if (!user) {
            return res.status(404).json({message: 'UserInfo not found'});
        }

        const updatedUserInfo = await UserInfo.findById(id);
        res.status(200).json(updatedUserInfo);

        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

mongoose.connect('mongodb+srv://RyanHAdmin:SPf438TQnpNeuOea@dbexusers.ofsgav1.mongodb.net/User-API?retryWrites=true&w=majority&appName=DBexUsers')
.then(() => { 
    console.log('connected to db')
    app.listen(PORT, () => {
        console.log('Server is running on port 5000');
    });
})
.catch(() => {
    console.log('Connection Failed')
})