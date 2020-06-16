import { createSelector } from "reselect";

const selectShop = (state) => state.props;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
