import { reducerWithInitialState } from 'typescript-fsa-reducers'

import { TextInputActions } from './actions'

export interface State {
    inputValue: string
    clickCount: number
}

const initialState = {
    inputValue: '',
    clickCount: 0,
}

export const Reducer = reducerWithInitialState(initialState)
    .case(TextInputActions.updateTextInputValue, (state, inputValue) => {
        return { ...state, inputValue }
    })
    .case(TextInputActions.updateClickCount, (state) => {
        return { ...state, clickCount: state.clickCount + 1 }
    })
