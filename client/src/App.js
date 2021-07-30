import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/sections/Login";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Privacy from "./components/sections/Privacy";
import Footer from "./components/Footer";
import { useCookies } from "react-cookie";

function App() {
    const [cookies, setCookie] = useCookies(["token"]);
    const [mobileState, setMobileState] = useState(
        window.innerWidth <= 960 ? true : false
    );

    const updateToken = (token) => {
        setCookie("token", token);
        window.location.href = process.env.REACT_APP_BASE_URL + "/home";
    };

    useEffect(() => {
        const checkForMobile = () => {
            setMobileState(window.innerWidth <= 960);
        };
        window.addEventListener("resize", checkForMobile);
    });

    return (
        <div>
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
                        <Footer
                            mobile={mobileState}
                            first="about"
                            second="privacy"
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
                    <Route path="/home">
                        <Home
                            mobile={mobileState}
                            access_token={cookies.token}
                        />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
