import { NekoInput, NekoButton } from 'nekohack-ui'
import { TopPageHandler } from '../containers/TopPageContainer'
import logo from '../assets/logo.svg'

interface HelloWorldProps {
    inputValue: string
    clickCount: number
}

type Props = HelloWorldProps & TopPageHandler

const MainFormat = (props: Props) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
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
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default MainFormat
