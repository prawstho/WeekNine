const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Peter'});
});

const mealsRouter = require('./routes/meals')
app.use('/meals', mealsRouter);

app.use((req, res) => {
    res.status(404).render('fourohfour');
});

app.listen(PORT, () => {
    console.log(`Simple app running on port ${PORT}.`)
});