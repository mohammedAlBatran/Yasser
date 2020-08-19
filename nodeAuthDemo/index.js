const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');
const loginRouter = require('./routes/Login');
const app = express();
app.use(express.json());

app.use('/api/login', loginRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

mongoose.connect('mongodb://localhost/Estore', { useNewUrlParser: true })
    .then(() => { console.log("server started && DataBase connected"); })
    .catch(erorr => { console.log(erorr.message); });


let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("listening to port "+port);
});