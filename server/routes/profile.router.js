const router = require('express').Router();

// returns object with profiles: (data type number)
router.get('/num',(req, res) => {

});

// returns an array of profile objects
router.get('/', (req, res) => {

});

// takes in 'status' param with value 'reset', 'spam', or 'notSpam'
// takes in body the _id of the profile
router.put('/:status', (req, res) => {

});

module.exports = router; 