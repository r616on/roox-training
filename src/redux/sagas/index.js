
export function* workerSaga() {

}

export function* watchClickSaga() {
  console.log("hell sagas")
    yield
}

export default function* rootSaga() {
  yield watchClickSaga();
}