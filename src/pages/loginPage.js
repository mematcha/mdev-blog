// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import API from "../apis/apiCatalog";
import { useNavigate } from "react-router-dom";
// import { generateGoogleToken } from "../auth/authenticator";

function LoginPage() {

  const navigate = useNavigate();

  const handleCallbackResponse = (response) => {
    if(response && response.credential){
      API.generateGoogleToken(response.credential).then((result)=>{
        if(result && result.data){
          const data=result.data;
          if(data.role && data.token){
            //means role is user
            if(data.token=="" || data.role=="user"){
              return;
            }
            else if(data.role=="admin"){
              localStorage.setItem("accessToken",data.token)
              navigate('/');
            }
          }
        }
      });
    }
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
    <div className="w-[80%] flex flex-col mx-[10%] h-[100vh] items-center justify-around">
      <div id="signInDiv"></div>
    </div>
  );
}

export default LoginPage;
