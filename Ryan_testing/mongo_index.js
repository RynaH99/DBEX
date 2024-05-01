const mongoose = require('mongoose');

const express = require('express')
const app = express();
app.use(express.json());

const UserInfo = require('./models/user.model.js');

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello from node api');
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
app.post('/api/users', async (req, res) => {
    try{
        const user = await UserInfo.create(req.body);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//? update user with this API
app.put('/api/user/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const user = await UserInfo.findByIdAndUpdate(id, req.body);

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
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log('Connection Failed')
})