import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { noop } from 'redux-saga/utils';

const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

function* getProfiles() {
  try {
    let profiles = yield call(axios.get, '/api/profile/', config);
    yield put({
      type: 'SET_PROFILES', 
      payload: profiles.data,
    });
  } catch (error) {
    console.log(`Error on getProfiles: ${error}`);
  }
}

// set status of profile
// include action.payload with status: 'spam', or 'safe', and profile: object of the profile
function* setProfileStatus(action) {
  let urlString = 'api/profile/' + action.payload.status
  yield call(axios.put, urlString, 
            {id: action.payload.profile._id, 
            reason: action.payload.profile.audit_data.reason, 
            result: action.payload.profile.audit_data.result, 
            auditedBy: action.payload.profile.audit_data.auditedBy}, 
            config);
  yield put({
    type: 'CHANGE_RECENT_THREE',
    payload: action.payload.profile,
  });
  yield put({
    type: 'FETCH_PROFILES',
  });
}

function* profileSaga() {
  yield takeEvery('FETCH_PROFILES', getProfiles);
  yield takeEvery('SET_PROFILE_STATUS', setProfileStatus);
}

export default profileSaga;