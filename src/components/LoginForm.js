import React, { useState } from "react";
import LoginUser from "../models/LoginUser";
import { useNavigate } from "react-router-dom";
import AlertMessage from "./AlertMessage";

function LoginForm({ updateUserStatus }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertBox, setAlertBox] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    let user = {
      email: email,
      password: password
    }

    const response = await LoginUser(user)

    if (response.success) {

      const storeUser = {
        email: user.email,
        token: response.jwtToken
      }

      sessionStorage.setItem("user", JSON.stringify(storeUser))

      updateUserStatus();

      navigate('/');
    } else {
      // två separata här eller en mindre specifik?
      response.reason === "no user" ? 
      setAlertMessage("Användaren finns inte.") : 
      setAlertMessage("Felaktigt lösenord.");

      openAlert();
    }
  };

  const openAlert = () => {
    setAlertBox(true);
  };


  return (
    <div className="doc-wrapper">
      <form 
        className="login-form"
        onSubmit={handleLogin}>
        <div>
          <input
            className="login-input"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-post..."
            required
          />
        </div>
        <div>
          <input
            className="login-input"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ange lösenord..."
            required
          />
        </div>
        <button className="submit-button dark-blue" type="submit">Logga in</button>
      </form>

      <AlertMessage
        boxOpen={alertBox}
        onClose={() => setAlertBox(false)}
        header={"Inloggning misslyckades"}
        message={alertMessage}
      />
    </div>
  );
};

export default LoginForm;
