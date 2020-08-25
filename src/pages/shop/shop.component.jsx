import React from "react";
import { Route } from "react-router-dom";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import CollectionPage from "../../pages/collection/collection-page";

class ShopPage extends React.Component {
  unsubscribeFromSnapshop = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshop = collectionRef.onSnapshot(
      async (snapshot) => {
        convertCollectionSnapshotToMap(snapshot);
      }
    );
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
