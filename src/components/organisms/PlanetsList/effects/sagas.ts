import { put, call, takeEvery, delay, select } from "redux-saga/effects";
import { ActionsPlanetsList } from "./slice";
import { AppAPI } from "../../../../api/index";

import requestStatuses from "../../../../utils/requestStatuses";
import { AppStoreType } from "../../../../redux/interfaces";

export function* handelItems(): Generator {
  try {
    const page: any = yield select(
      (state: AppStoreType) => state.PlanetsList.page
    );
    yield put(ActionsPlanetsList.setRequestStatus(requestStatuses.loading));
    yield delay(200);
    const items: any = yield call(AppAPI.getPlanets, page);
    yield put(ActionsPlanetsList.setPlanets(items.results));
    yield put(ActionsPlanetsList.setTotal(+items.count));
    yield put(ActionsPlanetsList.setRequestStatus(requestStatuses.ok));
  } catch {
    yield put(ActionsPlanetsList.setRequestStatus(requestStatuses.setError));
  }
}

export function* watchSaga(): Generator {
  yield takeEvery(ActionsPlanetsList.getPlanets, handelItems);
}

export default function* ItemsListSaga(): Generator {
  yield watchSaga();
}
