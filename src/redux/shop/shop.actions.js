import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import shopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then((snapShot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
