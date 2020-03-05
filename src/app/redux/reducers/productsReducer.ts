import { createReducer, on } from '@ngrx/store';
import { loadProducts } from '../actions/productsActions';

export const initialState = []

const _productsReducer = createReducer(
    initialState, 
    on(loadProducts, state => [...state])
)


export function productsReducer(state, action) {
    return _productsReducer(state, action);
}