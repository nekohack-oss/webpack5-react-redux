import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import MainFormat from '../components/MainFormat'
import { TextInputActions } from '../actions'
import { AppState } from '../store'

export interface TopPageHandler {
    handleOnChangeValue(value: string): void
    handleOnClick(): void
}

const mapStateToProps = (appState: AppState) => {
    return {
        inputValue: appState.state.inputValue,
        clickCount: appState.state.clickCount,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleOnChangeValue: (value: string) => {
            dispatch(TextInputActions.updateTextInputValue(value))
        },
        handleOnClick: () => {
            dispatch(TextInputActions.updateClickCount())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainFormat)
