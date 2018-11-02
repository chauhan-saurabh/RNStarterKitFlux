export function login(user) {
  return (dispatch, getState) => {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: user
    });
  };
}
