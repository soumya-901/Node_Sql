const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const customerRouts = require('./src/routers/customer.routers');
app.use(express.json());
app.get('/', (req, res) => {
    res.send("hello to sql");
});
app.use('/api', customerRouts);

app.listen(PORT, () => {
    console.log(`port-${PORT} is live in the system `);
})