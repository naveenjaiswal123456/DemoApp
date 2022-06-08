import { put, call, takeEvery } from 'redux-saga/effects';
import { types } from '../actions/types';
import {
  login
} from '../apis/Api';

function* loginSaga({payload, error}) {
  try {
    const response = yield call(login, payload);
    yield put({
      type: types.SEND_REQUEST_LOGIN_SUCCESS,
      payload: response
    });
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_LOGIN_FAILURE,
      payload: error
    });
    console.log(err);
  }
}

export default function* saga() {
  yield takeEvery(types.SEND_REQUEST_LOGIN, loginSaga);
}
