// import filters
const profileFilter = require('./profile-filter');
const siteFilter = require('./siteFilter');

// import models
const Profile = require('../../models/Profile');
const Scan = require('../../models/Scan');
// const Site = require('../../models/Site');

// db.getCollection('scan').insert([{scanTime: new Date("<1990-01-07T01:00:00Z>"), sitesScanned: 14}])


// main filter function 
async function runFilter() {
  try {
    // recentScan is array of the most recent scan
    let recentScan = await Scan.find({}).sort({scanTime: -1}).limit(1);
    let recentScanDate = recentScan[0].scanTime;
    console.log(recentScanDate.getTime());
    // this line needs to be changed to the following 
    // let currentScanDate = new Date();
    let currentScanDate = new Date(recentScanDate.getTime() + 864000000);
    let profilesToScan = await Profile.find({createdAt: {$gte: recentScanDate, $lt: currentScanDate}});
    // console.log(profilesToScan);
    for (profile of profilesToScan) {
      let profileResult = await profileFilter(profile);
      if (profileResult.status) {
        let profileUp = {...profile._doc, audit_data: {
          flagged: true,
          reason: profileResult.reason,
          result: '',
          auditedBy: '',
        }, isDeleted: '0'};
        console.log(profile._id, profileUp)
        Profile.findByIdAndUpdate(profile._id, profileUp).then(response => console.log(response));
      }
    }
    await Scan.create([{ scanTime: currentScanDate, sitesScanned: profilesToScan.length }]);
    // await Scan.create([{ scanTime: new Date("2010-07-02T00:00:00Z"), sitesScanned: 12 }]);
  } catch (error) {
    console.log(error);
  }
}

module.exports = runFilter;