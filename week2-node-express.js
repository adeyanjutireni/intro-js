require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
});

app.get('/', (req, res) =>
res.send('My Week 2 API!')
);

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({error: "Please fill all fields before proceeding"});

    res.status(201).json({message: `Hello, ${name}` });

});

app.get('/user/:id' , (req, res) =>{
    const userId = req.params.id;
res.json({id: `user ${userId} profile`});
});

app.listen(3000, () => console.log('API LIVE ON PORT 3000'));