import { takeLatest, call, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import shopActionTypes from "./shop.types";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapShot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  // collectionRef
  //   .get()
  //   .then((snapShot) => {
  //     const collectionsMap = convertCollectionSnapshotToMap(snapShot);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
