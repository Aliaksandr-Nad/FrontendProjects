import {useRouteMatch, Route, Switch, Redirect} from "react-router-dom";
import cn from "classnames"

import {FirebaseContext} from "./context/firebaseContext";
import Firebase from "./service/firebase";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game/routes";
import MenuHeader from "./components/MenuHeader";
import NotFound from "./routes/NotFound";
import ContactPage from "./routes/Contact";
import AboutPage from "./routes/About";
import Footer from "./components/Footer";


import s from "./App.module.css"

function App() {
    const match = useRouteMatch('/');

    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <Switch>
                <Route path="/404" component={NotFound}/>

                <Route>
                    <>
                        <MenuHeader bgActive={!match.isExact}/>
                        <div className={cn(s.wrap, {
                            [s.isHomePage]: match.isExact
                        })}>
                            <Switch>
                                <Route path="/" exact component={HomePage}/>
                                <Route path="/home" component={HomePage}/>
                                <Route path="/game" component={GamePage}/>
                                <Route path="/about" component={AboutPage}/>
                                <Route path="/contact" component={ContactPage}/>
                                <Route render={() => (
                                    <Redirect to="/404"/>
                                )}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </>
                </Route>
            </Switch>
        </FirebaseContext.Provider>
    )
}

export default App;
