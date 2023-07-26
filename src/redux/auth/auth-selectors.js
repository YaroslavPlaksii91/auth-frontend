const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUser = (state) => state.auth.user;

const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

export const authSelectors = {
  getIsLoggedIn,
  getUser,
  getIsFetchingCurrent,
};
