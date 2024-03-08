const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/school';
const User = require('./models/users.js');
const Homework = require('./models/homework.js');

mongoose
.connect(url)
.then((res) => console.log('Connected'))
.catch((error) => console.log(error));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}) ;

app.use(express.json());

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/users', async(req, res) =>{
    try {
        const users = await User.find(); 
        res.json(users);
    }catch(error){
        res.status(500).json(error.message)
    };
  });

app.get('/homework', async(req, res) =>{
    try {
        const homework = await Homework.find(); 
        res.json(homework);
    }catch (error){
        res.status(500).json(error.message);
    }
  });


app.post('/api/users', async (req, res) => {
    try {

        const { name, age, class: userClass } = req.body;

        const newUser = new User({ name, age, class: userClass });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/homework', async (req, res) => {
    try {
      const { title, description, due_date, student_id } = req.body;
      const newHomework = new Homework({ title, description, due_date, student_id }); // Використано модель Homework
      const savedHomework = await newHomework.save();
      res.status(201).json(savedHomework);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });