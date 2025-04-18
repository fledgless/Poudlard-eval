const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.setEncoding('Hello World!');
})

const eleveRoute = require('./Routes/EleveRoute'),
    notationRoute = require('./Routes/NotationRoute'),
    maisonRoute = require('./Routes/MaisonRoute'),
    rentreeRoute = require('./Routes/RentreeRoute'),
    vacancesRoute = require('./Routes/VacancesRoute');

app.use('/eleve', eleveRoute);
app.use('/notation', notationRoute);
app.use('/maison', maisonRoute);
app.use('/rentree', rentreeRoute);
app.use('/vacances', vacancesRoute);

app.use((req, res) => {
    res.status(404).json({ message: 'Route non trouvée' });
});

app.listen(port, () => {
    console.log(`Votre serveur est lancé sur http://127.0.0.1:${port}`);
});