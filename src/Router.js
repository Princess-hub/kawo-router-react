
import React from 'react';
import {
    BrowserRouter as AppRouter,
    Route,
    Link
} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Resgister from './Components/Register';
import StartUps from './Components/StartUps';

const Router = () => {
    return (
        <AppRouter>
            <nav className="navbar navbar-default navbar-fixed-top topnav homeimg">
                <div className="container navbar-links">
                    {/* Brand and toggle get grouped for better mobile display */}
	                <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#"><img src={'./images/pic.png'} style={{width: 200, height: 90}} /></a>
	                </div>

                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="link-nav">
                        <ul className="nav navbar-nav navbar-right us">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/startups">Startups</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <Route exact path="/" component={Home} />
            <Route path="/startups" component={StartUps} />
            <Route path="/register" component={Resgister} />
            <Route path="/login" component={Login} />

        </AppRouter>
    );
}

export default Router;
