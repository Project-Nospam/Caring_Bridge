const router = require('express').Router();
const Site = require('../models/Site');
const SiteProfile = require('../models/SiteProfile');
const Profile = require('../models/Profile');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// returns an array of site objects
router.get('/', async function (req, res) {
    try {
        let siteResults = await Site.find({ 'audit_data.flagged': true });
        let response = [];
        for (site of siteResults) {
            let relationship = await SiteProfile.find({ 'siteId': site._id }).sort({ createdAt: 1 });
            let profile = await Profile.find({ '_id': relationship[0].userId });
            site = {
                ...site._doc,
                user: profile[0],
            }
            response.push(site);
        }
        res.send(response);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// takes in 'status' param with value 'spam', or 'safe'
//  takes in body with id, reason (array of reasons why flagged)
router.put('/:status', (req, res) => {
    let statusUpdate = req.params.status;
    if (statusUpdate === 'spam') {
        Site.findByIdAndUpdate(req.body.id, {
            isDeleted: '1',
            audit_data: {
                flagged: false,
                reason: req.body.reason,
                result: statusUpdate,
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
        Site.findByIdAndUpdate(req.body.id, {
            isDeleted: '0',
            audit_data: {
                result: statusUpdate,
                flagged: false,
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
    else if (statusUpdate === 'reset') {
        Site.findByIdAndUpdate(req.body.id, {
            isDeleted: '0',
            audit_data: {
                result: '',
                flagged: true,
                reason: req.body.reason,
                auditedBy: req.user.username,
            },
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

// for development only
// requires body: site object
router.post('/', (req, res) => {
    Site.create(req.body)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router; 