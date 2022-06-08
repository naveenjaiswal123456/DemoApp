import {spawn} from 'redux-saga/effects';

// Sagas
import saga from './saga';

// Export the root saga
export default function* rootSaga() {
  yield spawn(saga);
}
