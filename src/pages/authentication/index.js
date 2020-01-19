import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from "../../context/currentUser";
import BackendErrorMessages from "./components/BackendErrorMessages";
import * as apiURLS from "../../api.js";

const Authentication = props => {
  const isLogin = props.match.path === "/login";
  const pageTitle = isLogin ? "Sign in " : "Sign Up";
  const descriptionLink = isLogin ? "/register" : "/login";
  const descriptionText = isLogin ? "Need an account" : "Hava an account";
  const apiURL = isLogin ? apiURLS.login : apiURLS.users;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [isSuccessSubmited, setIsSuccesSubmited] = useState(false);
  const [{ isLoading, response, error }, doFetch] = useFetch(apiURL);
  const [, setToken] = useLocalStorage("token");
  const [state, setCurrentUserState] = useContext(CurrentUserContext);

  const handleSubmit = event => {
    event.preventDefault();
    const user = isLogin ? { email, password } : { email, password, username };

    doFetch({
      method: "post",
      data: { user }
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    setToken(response.user.token);
    setIsSuccesSubmited(true);
    setCurrentUserState(state => ({
      ...state,
      isLoggedIn: true,
      isLoading: false,
      currentUser: response.user
    }));
  }, [response, setToken, setCurrentUserState]);

  if (isSuccessSubmited) {
    console.log(state);
    return <Redirect to="/" />; // declarative  flow for redirecting. instead of imperative hitsory.push("/")
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{pageTitle}</h1>
            <p className="text-xs-center">
              <Link to={descriptionLink}> {descriptionText}</Link>
            </p>
            <form onSubmit={handleSubmit}>
              {error && <BackendErrorMessages backendErrors={error.errors} />}
              <fieldset className="form-group">
                {!isLogin && (
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      value={username}
                      onChange={data => setUserName(data.target.value)}
                    />
                  </fieldset>
                )}

                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                  />
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </fieldset>
                <button
                  disabled={isLoading}
                  className="btn btn-lg btn-primary pull-xs-right"
                >
                  {pageTitle}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
