import { NekoInput, NekoButton } from 'nekohack-ui'
import { TopPageHandler } from '../containers/TopPageContainer'

interface HelloWorldProps {
    inputValue: string
    clickCount: number
}

type Props = HelloWorldProps & TopPageHandler

const MainFormat = (props: Props) => {
    return (
        <section>
            <div>
                <NekoInput
                    value={props.inputValue}
                    onChange={props.handleOnChangeValue}
                />
            </div>
            <div>
                <NekoButton onClick={() => props.handleOnClick()}>
                    count is: {props.clickCount}
                </NekoButton>
            </div>
        </section>
    )
}

export default MainFormat
