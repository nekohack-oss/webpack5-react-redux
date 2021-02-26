import { actionCreatorFactory } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const TextInputActions = {
    updateTextInputValue: actionCreator<string>(
        'ACTIONS_UPDATE_TEXT_INPUT_VALUE'
    ),
    updateClickCount: actionCreator('ACTIONS_UPDATE_CLICK_COUNT'),
}
