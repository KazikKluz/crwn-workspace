import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/collection-preview/collection-preview";

import { selectCollections } from "../../redux/shop/shop.selector";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
