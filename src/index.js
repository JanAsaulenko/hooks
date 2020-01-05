import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "routes";
import { BrowserRouter as Router } from "react-router-dom";
import TopBar from "components/TopBar";
const App = () => {
    return (
        <CurrentUserProvider>
            <Router>
                <TopBar />
                <Routes />
            </Router>
        </CurrentUserProvider>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));


