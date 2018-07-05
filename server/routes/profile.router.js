const router = require('express').Router();
const Profile = require('../models/Profile');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// returns an array of profile objects
router.get('/', (req, res) => {
    Profile.find({ 'audit_data.flagged': true })
        .then((results) => {
            res.send(results);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

//returns the bio associated with a particular user, when passed the id of that user as a query parameter
router.get('/locate', (req, res) => {
    let userID = req.query.id;
    Profile.find({_id: userID})
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

// takes in 'status' param with value 'spam', or 'safe'
// takes in body with id, reason (array of reasons why flagged)
router.put('/:status', (req, res) => {
    let statusUpdate = req.params.status;
    if (statusUpdate === 'spam') {
        Profile.findByIdAndUpdate(req.body.id, {
            isDeleted: '1',
            audit_data: {
                flagged: false,
                result: statusUpdate,
                reason: req.body.reason,
                auditedBy: req.user.username,
            }
        })
            .then(() => {
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log(error);
                res.sendStatus(500);
            });
    }
    else if (statusUpdate === 'safe') {
        Profile.findByIdAndUpdate(req.body.id, {
            audit_data: {
                result: statusUpdate,
                flagged: false,
                reason: req.body.reason,
                auditedBy: req.body.auditedBy
            }
        })
            .then(() => {
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log(error);
                res.sendStatus(500);
            });
    }

});
//FOR DEVELOPMENT ONLY
// requires profile object
router.post('/', (req, res) => {
    Profile.create(req.body)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router; 