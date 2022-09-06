const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user;

const authSelectors = {
  getUser,
  getIsLoggedIn,
};

export default authSelectors;
