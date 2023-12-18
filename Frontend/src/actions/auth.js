import * as api from "../api";
export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "SIGNUP", data });
    //   dispatch(getCart());
    //   dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/user/");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "LOGIN", data });
    if (data.user.accountType === "Vendor") {
      navigate("/vendor/");
    }
    else if (data.user.accountType === "User") {
      navigate("/user/");
    } else if (data.user.accountType === "Admin") {
      navigate("/admin/");
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
