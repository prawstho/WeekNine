const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.write('Prepare meals');
    res.end();
});

router.get('/breakfast', (req, res) => {
    res.write('Warm drink. ');
    res.write('oatmeal, fruit, and yogurt.');
    res.end();
});

router.get('/lunch', family, (req, res) => {
    res.write('Water. ');
    res.write('Sandwich and an apple.');
    res.end();
});

function family(req, res, next) {
    if(req.query.weekday === 'sunday') {
        res.write('Extend invite. ');
        res.write('Set table. ');
        res.write('Chill beverages. ');
        next();
    } else {
        res.write('Simple meal. ');
        next();
    }
}

module.exports = router