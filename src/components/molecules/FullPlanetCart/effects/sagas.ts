import { put, call, takeEvery, delay, select } from "redux-saga/effects";
import { actionsFullPlanetCart } from "./slice";
import { AppAPI } from "../../../../api/index";

import requestStatuses from "../../../../utils/requestStatuses";
import { AppStoreType } from "../../../../redux/interfaces";

export function* handelItems(): Generator {
  try {
    const id: any = yield select(
      (state: AppStoreType) => state.FullPlanetCart.id
    );
    yield put(actionsFullPlanetCart.setRequestStatus(requestStatuses.loading));
    yield delay(200);
    const fullPlanet: any = yield call(AppAPI.getFullPlanet, id);
    yield put(actionsFullPlanetCart.setFullPlanetItem(fullPlanet));
    yield put(actionsFullPlanetCart.setRequestStatus(requestStatuses.ok));
  } catch {
    yield put(actionsFullPlanetCart.setRequestStatus(requestStatuses.setError));
  }
}

export function* watchSaga(): Generator {
  yield takeEvery(actionsFullPlanetCart.getFullPlanetItem, handelItems);
}

export default function* ItemsListSaga(): Generator {
  yield watchSaga();
}
