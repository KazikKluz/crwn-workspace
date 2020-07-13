import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection-page.styles.scss";

import { selectCollection } from "../../redux/shop/shop.selector";

const CollectionPage = ({ match }) => {
  console.log(match.path.collectionId);
  return (
    <div className="collectio">
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
