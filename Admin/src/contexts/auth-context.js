import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import publicAxiosClient from "src/configs/httpClient/publicAxiosClient";

const HANDLERS = {
  INITIALIZE: "INITIALIZE",
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
};

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
  token: null,
};

const handlers = {
  [HANDLERS.INITIALIZE]: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      ...// if payload (user) is provided, then is authenticated
      (user
        ? {
            isAuthenticated: true,
            isLoading: false,
            user,
          }
        : {
            isLoading: false,
          }),
    };
  },
  [HANDLERS.SIGN_IN]: (state, action) => {
    const user = action.payload;
    const refreshToken = action.payload;
    const accessToken = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
      refreshToken,
      accessToken,
    };
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      refreshToken: null,
      accessToken: null,
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);

  const initialize = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    let isAuthenticated = false;
    let userInfo;
    try {
      isAuthenticated = window.localStorage.getItem("authenticated") === "true";
      userInfo = JSON.parse(window.localStorage.getItem("user"));
    } catch (err) {
      console.error(err);
    }

    if (isAuthenticated) {
      const user = {
        id: userInfo.id,
        name: userInfo.name,
        email: userInfo.email,
      };

      dispatch({
        type: HANDLERS.INITIALIZE,
        payload: user,
      });
    } else {
      dispatch({
        type: HANDLERS.INITIALIZE,
      });
    }
  };

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const signIn = async (email, password) => {
    if (email == null || password == null) {
      throw new Error("Please check your email and password");
    }

    try {
      const response = await publicAxiosClient.post(`/Account/Login`, {
        email: email,
        password: password,
      });

      const { accessToken, refreshToken, user } = response.data;

      if (!user.roles.includes("Admin")) {
        console.log("Only admin can access");
        return;
      }

      window.localStorage.setItem("user", JSON.stringify(user));
      window.localStorage.setItem("accessToken", accessToken);
      window.localStorage.setItem("refreshToken", refreshToken);
      window.localStorage.setItem("authenticated", "true");

      dispatch({
        type: HANDLERS.SIGN_IN,
        payload: user,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const signOut = () => {
    window.localStorage.clear("user");
    window.localStorage.clear("authenticated");
    window.localStorage.clear("accessToken");
    window.localStorage.clear("refreshToken");

    dispatch({
      type: HANDLERS.SIGN_OUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
