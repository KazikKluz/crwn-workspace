import { all, call, takeLatest, put } from "redux-saga/effects";
import {
  auth,
  signInWithGoogle,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

import { UserActionTypes } from "../user/user.types";
import { googleSignInSuccess, googleSignInFailure } from "../user/user.actions";

export function* SignInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, SignInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
