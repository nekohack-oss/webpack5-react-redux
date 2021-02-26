import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { State, Reducer } from '../reducer'

export type AppState = {
    state: State
}

const storeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers<AppState>({
        state: Reducer,
    }),
    storeEnhancers(applyMiddleware(thunk))
)

export default store
