import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) => {
    return collections ? collections[collectionUrlParam] : null;
  });

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => {
    return collections
      ? Object.keys(collections).map((key) => collections[key])
      : [];
  }
);
