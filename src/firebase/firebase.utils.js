import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDhd5yVY0TLWP1Nx-qoddLuJdRcn-roAAg",
  authDomain: "crwn-db-85c28.firebaseapp.com",
  databaseURL: "https://crwn-db-85c28.firebaseio.com",
  projectId: "crwn-db-85c28",
  storageBucket: "crwn-db-85c28.appspot.com",
  messagingSenderId: "282784730576",
  appId: "1:282784730576:web:998a518a1f8be5a48cfdd5",
  measurementId: "G-418QEL0Y5K",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    } finally {
    }
  }

  return userRef;
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
