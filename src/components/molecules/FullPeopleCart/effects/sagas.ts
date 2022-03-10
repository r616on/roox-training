import { put, call, takeEvery, delay, select } from "redux-saga/effects";
import { GET_FULLPEOPLE_ITEM } from "./actionTypes";
import { AppAPI } from "../../../../api/index";
import { setFullPeopleItem, setRequestStatus } from "./actionCreators";
import requestStatuses from "../../../../utils/requestStatuses";
import { AppStoreType } from "../../../../redux/interfaces";

export function* handelSaga() {
  try {
    const id: string = yield select(
      (state: AppStoreType) => state.FullPeople.id
    );
    yield put(setRequestStatus(requestStatuses.loading));
    yield delay(200);
    const fullPeople: {} = yield call(AppAPI.getFullPeole, id);
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
