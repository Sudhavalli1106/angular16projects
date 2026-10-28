import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Cart] Adding product To Cart',
  props<{
    product: { id: number; name: string; image: string; price: number };
  }>()
);
/*
Syntax:
const actionName = createAction(
  '[Feature] Action Description',
  props<{ payloadKey: PayloadType }>()
);

*/