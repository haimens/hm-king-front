export const loadUserInfo = type => {
  try {
    let temp = localStorage.getItem(type);
    return temp;
  } catch (e) {
    console.log("loadAuthToken error");
    throw e;
  }
};

export const saveUserInfo = (user_info, verify_info) => {
  try {
    const { instance_token, user_token, username } = user_info;
    const { cell, email, king_key, king_token, name } = verify_info;
    localStorage.setItem("instance_token", instance_token);
    localStorage.setItem("user_token", user_token);
    localStorage.setItem("username", username);
    localStorage.setItem("cell", cell);
    localStorage.setItem("email", email);
    localStorage.setItem("king_key", king_key);
    localStorage.setItem("king_token", king_token);
    localStorage.setItem("name", name);
  } catch (e) {
    console.log("save auth token error");
    throw e;
  }
};

export const clearUserInfo = () => {
  try {
    localStorage.clear();
  } catch (e) {
    console.log("remove user error");
    throw e;
  }
};
