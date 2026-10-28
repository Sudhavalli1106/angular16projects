import { createReducer, on } from '@ngrx/store';
import { addToCart } from './product.actions';
import { initialState } from './product.state';

export const productReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => ({
    // This function is used inside createReducer to listen for specific actions.
    ...state,
    cart: [...state.cart, product],
  }))
);

//syntax of on()
/*

on(actionType, (state, actionProps) => { 
   return updatedState;
})
*/