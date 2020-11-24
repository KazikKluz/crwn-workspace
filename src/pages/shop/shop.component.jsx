import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import withSpinner from "../../components/withSpinner/withSpinner.component";

import CollectionPage from "../../pages/collection/collection-page";

import { updateCollections } from "../../redux/shop/shop.actions";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = { loading: true };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapShot);
        updateCollections(collectionsMap);
        console.log(collectionsMap);
      },

      this.setState({ loading: false })
    );
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
