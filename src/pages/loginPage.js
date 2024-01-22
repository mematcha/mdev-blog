// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
function LoginPage() {
  const handleCallbackResponse = (response) => {
    console.log(response.credential);
    let userObject = jwtDecode(response.credential);
    console.log(userObject);
  };

  useEffect(() => {
     /* global google  */
    google.accounts.id.initialize({
      client_id:
        "602180286704-ttioges3ndc5uo5d2kbpfrsderdin6e2.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="w-[80%] flex flex-col mx-[10%]">
      <div id="signInDiv"></div>
    </div>
  );
}

export default LoginPage;
