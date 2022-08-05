const router = require('express').Router();

router.get('/', async (req, res) => {
    // Need to get items bought, 

    res.render('homepage');
});
  
module.exports = router;