// Reducers
import { loadingReducer } from './reducers/loadingReducer';
import { productsReducer } from './reducers/productsReducer';

export const store = {
    loading: loadingReducer,
    products: productsReducer
}