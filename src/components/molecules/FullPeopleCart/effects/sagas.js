import { put, call, takeEvery, delay, select } from "redux-saga/effects";
import { GET_FULLPEOPLE_ITEM } from "./actionTypes";
import { getFullPeole } from "../../../../api/index";
import { setFullPeopleItem, setRequestStatus } from "./actionCreators";
import requestStatuses from "../../../../utils/requestStatuses";

export function* handelSaga() {
  try {
    const { id } = yield select((state) => state.FullPeople);
    yield put(setRequestStatus(requestStatuses.loading));
    yield delay(1000);
    const fullPeople = yield call(getFullPeole, id);
    yield put(setFullPeopleItem(fullPeople));
    yield put(setRequestStatus(requestStatuses.ok));
  } catch {
    yield put(setRequestStatus(requestStatuses.setError));
  }
}

export function* watchSaga() {
  yield takeEvery(GET_FULLPEOPLE_ITEM, handelSaga);
}

export default function* FullPeopleSaga() {
  yield watchSaga();
}
