const router = require('express').Router();

// returns object with sites: (number)
router.get('/num',(req, res) => {

});

// returns an array of site objects
router.get('/', (req, res) => {

});

// takes in 'status' param with value 'reset', 'spam', or 'notSpam'
// takes in body the _id of the site
router.put('/:status', (req, res) => {

});

module.exports = router; 