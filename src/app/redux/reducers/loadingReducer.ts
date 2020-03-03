import { createReducer, on } from '@ngrx/store';
import { setOn, setOff } from '../actions/loadingAction';

export const initialState = false;

const _loadingReducer = createReducer(
        initialState, 
        on(setOn, state => true),
        on(setOff, state => false)
    )

export function loadingReducer(state, action) {
    return _loadingReducer(state, action);
}