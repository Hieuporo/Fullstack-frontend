import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";

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
    const token = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
      token,
    };
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      token: null,
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
      isAuthenticated = window.sessionStorage.getItem("authenticated") === "true";
      userInfo = JSON.parse(window.sessionStorage.getItem("user"));
    } catch (err) {
      console.error(err);
    }

    if (isAuthenticated) {
      const user = {
        id: userInfo.id,
        avatar: "/assets/avatars/avatar-anika-visser.png",
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

  const skip = () => {
    try {
      window.sessionStorage.setItem("authenticated", "true");
    } catch (err) {
      console.error(err);
    }

    const user = {
      id: "5e86809283e28b96d2d38537",
      avatar: "/assets/avatars/avatar-anika-visser.png",
      name: "Anika Visser",
      email: "anika.visser@devias.io",
    };

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user,
    });
  };

  const signIn = async (email, password) => {
    if (email == null || password == null) {
      throw new Error("Please check your email and password");
    }

    try {
      const response = await axios.post(`https://localhost:7020/api/Account/login`, {
        email: email,
        password: password,
      });

      const { id, userName, token } = response.data;

      const user = {
        id: id,
        avatar: "/assets/avatars/avatar-anika-visser.png",
        name: userName,
        email: email,
      };

      window.sessionStorage.setItem("user", JSON.stringify(user));
      window.sessionStorage.setItem("authenticated", "true");
      window.sessionStorage.setItem("token", token);

      dispatch({
        type: HANDLERS.SIGN_IN,
        payload: user,
        token: token,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const signUp = async (email, name, password) => {
    throw new Error("Sign up is not implemented");
  };

  const signOut = () => {
    window.sessionStorage.clear("user");
    window.sessionStorage.clear("authenticated");
    window.sessionStorage.clear("token");

    dispatch({
      type: HANDLERS.SIGN_OUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        skip,
        signIn,
        signUp,
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
