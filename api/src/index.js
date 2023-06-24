const express = require('express')
const app = express();
const router =require('./routes/index')
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Bienvenido')
})
app.use(cors());
app.use(express.json());
app.use('/',router)
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

require('./db')