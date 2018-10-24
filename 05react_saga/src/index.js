import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/counter"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
class App extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Home />
                </Provider>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


