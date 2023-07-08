import { useDispatch } from "react-redux";
import { setAuth, setIsLoading, setUser } from "../redux/slices/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  const signUp = (user) => {
    dispatch(setIsLoading(true));
    fetch(`${process.env.REACT_APP_API_URL}/user/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  const login = (user) => {
    dispatch(setIsLoading(true));

    fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.email) {
          dispatch(setUser(result));
          dispatch(setAuth(true));
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  const getUser = () => {
    dispatch(setIsLoading(true));
    fetch(`${process.env.REACT_APP_API_URL}/user`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.email) {
          dispatch(setUser(result));
          dispatch(setAuth(true));
        }
      })
      .catch((e) => {
        console.log(e);
        dispatch(setAuth(false));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  const logOut = () => {
    fetch(`${process.env.REACT_APP_API_URL}/user/logout`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message === "Logged out successfully") {
          dispatch(setUser({}));
        }
      });
  };

  return { signUp, login, getUser, logOut };
};

export default useAuth;
