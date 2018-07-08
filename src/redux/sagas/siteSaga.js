import { takeEvery, put, call } from 'redux-saga/effects';
import { SITE_ACTIONS } from '../actions/siteActions';
import { callSite } from '../requests/siteRequests';
import axios from 'axios';


const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

function* getSites() {
  try {
    let sites = yield callSite();
    yield put({
      type: 'SET_SITE',
      payload: sites,
    });
  } catch (error) {
    console.log(`Error on getSites: ${error}`);
  };
}

// set status of site
// include action.payload with 'reset', 'spam', or 'notSpam'
function* setSiteStatus(action) {
  let url = 'api/site/' + action.payload.status
  yield call(axios.put, url, 
            {id: action.payload.site._id, 
            reason: action.payload.site.audit_data.reason, 
            result: action.payload.site.audit_data.result, 
            auditedBy: action.payload.site.audit_data.auditedBy}, 
            config);
  yield put({
    type: 'CHANGE_RECENT_THREE_SITE',
    payload: action.payload.site,
  });
  yield put({
    type: 'FETCH_SITE',
  });
}

function* siteSaga() {
  yield takeEvery('FETCH_SITE', getSites);
  yield takeEvery('SET_SITE_STATUS', setSiteStatus);
}

export default siteSaga;