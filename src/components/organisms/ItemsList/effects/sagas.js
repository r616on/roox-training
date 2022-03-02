import { put, call, takeEvery, all, select } from "redux-saga/effects";

// const HANDLERS = {

//   *[getAccRequestInfo]() {
//     try {
//       const { currentOrgId } = yield select((state) => state.auth.data);
//       const {
//         data: { content },
//       } = yield call(mdmApi.adapter, {
//         method: POST,
//         // eslint-disable-next-line max-len
//         url: `${API_URL_V1}${CATALOGS}/partner_accreditations/items/search`,
//         headers,
//         params: {
//           size: 400,
//           showRefs: 1,
//           showeDetails: 1,
//           hideDepricated: true,
//         },
//         data: { and: [{ and: [{ and: [{ partner: currentOrgId }] }] }] },
//       });
//       yield put(getAccRequestInfoSuccess(content));
//     } catch (err) {
//       yield put(getAccRequestInfoFailure(err));
//     }
//   },

// };

export function* workerSaga() {}

export function* watchClickSaga() {
  console.log("hell sagas");
  yield;
}

export default function* rootSaga() {
  yield watchClickSaga();
}
