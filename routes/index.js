const {Router} = require('express');
const router = Router();

router.get('/records', function (req, res)  {
    res.send('records index');
});

router.post('/records', function (req, res)  {
    res.send('record create');
});

router.get('/records/:id', function (req, res)  {
    res.send('record show');
});

router.delete('/records/:id', function (req, res)  {
    res.send('record delete');
});

router.put('/records/:id', function (req, res)  {
    res.send('record update');
});

module.exports = router;