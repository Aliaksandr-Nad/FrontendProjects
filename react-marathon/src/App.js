import {useLocation, Route, Switch, Redirect} from "react-router-dom";
import {FirebaseContext} from "./context/firebaseContext";

import {NotificationContainer} from "react-notifications";

import FirebaseClass from "./service/firebase";
import HomePage from "./routes/Home";

import GamePage from "./routes/Game/routes";
import MenuHeader from "./components/MenuHeader";
import NotFound from "./routes/NotFound";
import ContactPage from "./routes/Contact";
import AboutPage from "./routes/About";
import Footer from "./components/Footer";

import cn from "classnames"
import 'react-notifications/lib/notifications.css'
import s from "./App.module.css"


function App() {
    const location = useLocation();
    const isPadding = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/game/board'

    return (
        <FirebaseContext.Provider value={FirebaseClass}>
            <Switch>
                <Route path="/404" component={NotFound}/>

                <Route>
                    <>
                        <MenuHeader bgActive={!isPadding}/>
                        <div className={cn(s.wrap, {
                            [s.isHomePage]: isPadding
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
            <NotificationContainer/>
        </FirebaseContext.Provider>
    )
}

export default App;
