import { put, call, takeEvery, delay } from "redux-saga/effects";
import { GET_ITEMS } from "./actionTypes";
import { getItems } from "../../../../api/index";
import { setItems, setRequestStatus } from "./actionCreators";
import requestStatuses from "../../../../utils/requestStatuses";

export function* handelItems(): Generator {
  try {
    yield put(setRequestStatus(requestStatuses.loading));
    yield delay(1000);
    const items: any = yield call(getItems);
    yield put(setItems(items.results));
    yield put(setRequestStatus(requestStatuses.ok));
  } catch {
    yield put(setRequestStatus(requestStatuses.setError));
  }
}

export function* watchSaga(): Generator {
  yield takeEvery(GET_ITEMS, handelItems);
}

export default function* ItemsListSaga(): Generator {
  yield watchSaga();
}