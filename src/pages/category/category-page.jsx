import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";

import "./category-page.styles.scss";

const CategoryPage = ({ match }) => {
  console.log(match.path.categoryId);
  return (
    <div className="category">
      <h2>Category Page</h2>
    </div>
  );
};

export default CategoryPage;
