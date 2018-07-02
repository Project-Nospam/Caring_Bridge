import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* getSites() {
  try {
    yield put({
      type: FETCH_SITES
    });
    const sites = yield callSites();
    yield put({
      type: SET_SITE_STATUS,
      sites,
    });
  }catch (error) {
  console.log(error);
  };
}

// set status of site
// include action.payload with 'reset', 'spam', or 'notSpam'
function* setSiteStatus(action) {
yield call(axios.put, '/:status', {
  reset: action.payload,
  spam: action.payload,
  notSpam: action.payload,
})
yield put({ type: 'FETCH_SITES' });
}

function* scanSaga() {
  yield takeEvery('FETCH_SITES', getSites);
  yield takeEvery('SET_SITE_STATUS', setSiteStatus);
}

export default scanSaga;