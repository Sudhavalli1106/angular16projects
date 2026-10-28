import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

export const selectProductState =
  createFeatureSelector<ProductState>('product');  //feature selector that extracts only the product slice from the entire store state.

export const selectCart = createSelector(
  selectProductState,
  (state: ProductState) => state.cart
);

//create selector()
/*
selectProductState → Extracts the entire product feature state.
(state: ProductState) => state.cart → Extracts only the cart property from the product state.
*/

/*

Code	What it does?
createFeatureSelector<ProductState>('product')	Selects the product state slice from the store.
createSelector(selectProductState, (state) => state.cart)	Extracts cart from the product state.
*/