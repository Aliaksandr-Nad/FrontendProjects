import {Route, Redirect} from "react-router-dom";
import {NotificationManager} from "react-notifications";


const PrivateRoute = ({component: Component, ...rest}) => {
    const handlerRedirect = () => {
        NotificationManager.info('Not Authorized');
        return <Redirect to='/'/>
    };

    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('idToken') ?
                    <Component {...props} /> :
                    handlerRedirect()
            }
        />
    );
};

export default PrivateRoute;
