import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./component/Counter"
import { Provider } from "./react-redux"
import store from "./store"
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

