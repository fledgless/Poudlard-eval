const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.setEncoding('Hello World!');
})

const eleveRoute = require('./Routes/EleveRoute');
app.use('/eleve', eleveRoute);

app.use((req, res) => {
    res.status(404).json({ message: 'Route non trouvée' });
});

app.listen(port, () => {
    console.log(`Votre serveur est lancé sur http://127.0.0.1:${port}`);
});