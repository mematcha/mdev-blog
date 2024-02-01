import { jwtDecode } from "jwt-decode";
import API from "../apis/apiCatalog";

export function blogCookieExists() {
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    // Check if the cookie starts with the specified name followed by '='
    if (cookie.startsWith("userToken" + "=")) {
      const cookieVal = cookie.replace("userToken=", "");
      return { state: true, cookie: cookieVal }; // Cookie exists
    }
  }
  return { state: false };
}

export function generateAccessToken(refreshToken, accessToken = "") {
  API.generateAccessToken(refreshToken, accessToken).then((result) => {
    if (result && result.data) {
      localStorage.setItem("accessToken", result.data);
    }
  });
}

export function generateRefreshToken() {
  API.generateRefreshToken().then((result) => {
    if (result && result.data) {
      document.cookie = "userToken=" + result.data;
      return result.data;
    }
  });
}

export function getRoleAssigned() {
  const cookieChecker = blogCookieExists();
  if (!cookieChecker.state) {
    generateRefreshToken();
  } else {
    const accessToken = localStorage.getItem("accessToken");
    //generate access token if it is empty, null or undefined
    if (accessToken == "" || accessToken == null || accessToken == undefined) {
      generateAccessToken(cookieChecker.cookie);
    } else {
      const decoded = jwtDecode(accessToken, { payload: true });
      if (decoded && decoded.role) {
        if (decoded.role == "admin") {
          return "admin";
        } else {
          return "user";
        }
      } else {
        return "user";
      }
    }
  }
}

export default {
  blogCookieExists,
  generateAccessToken,
  generateRefreshToken,
};
