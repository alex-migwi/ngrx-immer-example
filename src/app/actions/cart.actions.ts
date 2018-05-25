import { Action } from '@ngrx/store';

export enum CartActionTypes {
  AddToCart = '[Product List] Add to cart',
  RemoveFromCart = '[Product List] Remove from cart',
  EmptyCart = '[Cart] Empty cart',
}

export class AddToCart implements Action {
  readonly type = CartActionTypes.AddToCart;
  constructor(public payload: { sku: string }) {}
}

export class RemoveFromCart implements Action {
  readonly type = CartActionTypes.RemoveFromCart;
  constructor(public payload: { sku: string }) {}
}

export class EmptyCart implements Action {
  readonly type = CartActionTypes.EmptyCart;
}

export type CartActions = AddToCart | RemoveFromCart | EmptyCart;
