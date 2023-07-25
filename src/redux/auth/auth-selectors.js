const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUser = (state) => state.auth.user;

const getUserEmail = (state) => state.auth.user.email;

const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

export const authSelectors = {
  getIsLoggedIn,
  getUser,
  getUserEmail,
  getIsFetchingCurrent,
};
