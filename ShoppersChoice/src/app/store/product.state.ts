export interface ProductState {
  cart: { id: number; name: string; image: string; price: number }[],
  
}

export const initialState: ProductState = {
  cart: [],
};
