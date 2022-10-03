const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
//connection to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
console.log("Connected to db!");
app.listen(3000, () => console.log("Server Up and running"));
});
const TodoTask = require("./models/todotask");

app.post('/',async (req, res) => {
    const todoTask = new TodoTask({
    content: req.body.content
    });
    try {
    await todoTask.save();
    res.redirect("/");
    } catch (err) {
    res.redirect("/");
    }
    });
    
app.set("view engine", "ejs");
app.get('/',(req, res) => {
    res.render('todo.ejs');
    });
    app.post('/',(req, res) => {
        console.log(req.body);
        });
    
