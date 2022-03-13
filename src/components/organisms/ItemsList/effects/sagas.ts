import { put, call, takeEvery, delay, select } from "redux-saga/effects";
import { GET_ITEMS } from "./actionTypes";
import { AppAPI } from "../../../../api/index";
import { setItems, setRequestStatus, setTotal } from "./actionCreators";
import requestStatuses from "../../../../utils/requestStatuses";
import { AppStoreType } from "../../../../redux/interfaces";

export function* handelItems(): Generator {
  try {
    const page: any = yield select(
      (state: AppStoreType) => state.itemsList.page
    );
    yield put(setRequestStatus(requestStatuses.loading));
    yield delay(200);
    const items: any = yield call(AppAPI.getItems, page);
    yield put(setItems(items.results));
    yield put(setTotal(+items.count));
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
