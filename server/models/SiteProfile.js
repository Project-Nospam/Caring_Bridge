const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//site schema
const SiteProfileSchema = new Schema({
    _id: {type: Number},
    createdAt: {type: Date},
    siteId: { type: Number },
    userId: { type: Number },
}, {collection: 'site_profile'});

module.exports = mongoose.model('SiteProfile', SiteProfileSchema);