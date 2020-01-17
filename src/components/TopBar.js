import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CurrentUserContext } from "../context/currentUser";
export default () =>
{
    const [state] = useContext(CurrentUserContext);
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Medium
        </Link>
                { !state.isLoading && ( // change into component which add posibility off show loading procces in ui
                    <ul className="nav navbar-nav pull-xs-right">
                        { state.isLoggedIn === false && (
                            <>
                                <li className="nav-item">
                                    { " " }
                                    <NavLink to="/" exact className="nav-link">
                                        Home
                  </NavLink>
                                </li>
                                <li className="nav-item">
                                    { " " }
                                    <NavLink to="/login" className="nav-link">
                                        Sign in
                  </NavLink>
                                </li>
                                <li className="nav-item">
                                    { " " }
                                    <NavLink to="/signup" className="nav-link">
                                        Register
                  </NavLink>
                                </li>
                            </>
                        ) }
                        { state.isLoggedIn === true && (
                            <>
                                <li className="nav-item">
                                    <NavLink to="/articles/new" className="nav-link">
                                        <i className="ion-compose"></i>
                                        &nbsp; New Post
                  </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to={ `profiles/${ state.currentUser.user.username }` }
                                        className="nav-link"
                                    >
                                        <img
                                            src={
                                                state.currentUser.user.image
                                                    ? state.currentUser.user.image
                                                    : "logo192.png"
                                            }
                                            className="user-pic"
                                            alt=""
                                        />
                                        &nbsp;
                    { state.currentUser.user.username }
                                    </NavLink>
                                </li>
                            </>
                        ) }
                    </ul>
                ) }
            </div>
        </nav>
    );
};
