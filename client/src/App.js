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
import Footer from "./components/Footer";
import { useCookies } from "react-cookie";

function App() {
    const [cookies, setCookie] = useCookies(["token"]);

    const updateToken = (token) => {
        setCookie("token", token);
        window.location.href = process.env.REACT_APP_BASE_URL + "/home";
    };

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        {console.log("/")}
                        <Redirect to="/login" />
                    </Route>
                    <Route path="/login">
                        {console.log("/login, callback false")}
                        <Login
                            callback={false}
                            updateToken={(tok) => updateToken(tok)}
                        />
                        <Footer first="about" second="privacy" />
                    </Route>
                    <Route path="/callback">
                        {console.log("/login, callback true")}
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
                    <Route path="/home">
                        {console.log("/home")}
                        <Home access_token={cookies.token} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
