import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import withSpinner from "../../components/withSpinner/withSpinner.component";
import CollectionPage from "./collection-page";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;
