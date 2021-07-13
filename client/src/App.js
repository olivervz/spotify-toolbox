import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import { useState } from "react";
import Login from "./components/sections/Login";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Privacy from "./components/sections/Privacy";

function App() {
    const [token, setToken] = useState("");

    const updateToken = (tok) => {
        window.history.replaceState(null, null, "/home");
        setToken(tok);
    };

    return (
        <div>
            {token === "" ? (
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/login" />
                        </Route>
                        <Route path="/login">
                            <Login
                                callback={false}
                                updateToken={(tok) => updateToken(tok)}
                            />
                        </Route>
                        <Route path="/callback">
                            <Login
                                callback={true}
                                updateToken={(tok) => updateToken(tok)}
                            />
                        </Route>
                        <Route path="/privacy">
                            <Privacy />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </Router>
            ) : (
                <Home access_token={token} />
            )}
        </div>
    );
}

export default App;
