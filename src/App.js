import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home}/>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/home/:lang" exact component={Home}/>
                        <Route path="/sign_in" exact component={Home}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

