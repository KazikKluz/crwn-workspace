import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import withSpinner from "../../components/withSpinner/withSpinner.component";
import CollectionOverview from "./collection-overview.component";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
