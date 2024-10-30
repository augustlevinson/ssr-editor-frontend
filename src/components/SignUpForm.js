import React, { useState } from "react";
import RegisterUser from "../models/RegisterUser";
import { useNavigate } from "react-router-dom";
import AlertMessage from "./AlertMessage";
import { baseUrl } from "../environment";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertBox, setAlertBox] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password
    }

    if (password === passwordConfirmation) {
      const response = await RegisterUser(user)

      if (response.success) {
        navigate('/');
      } else {
        setAlertMessage("Användaren finns redan.")
        openAlert();
      }
    } else {
      setAlertMessage("Lösenorden stämmer inte överens.")
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
        onSubmit={handleSignup}>
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
        <div>
          <input
            className="login-input"
            type="password"
            name="passwordConfirm"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Bekräfta lösenord..."
            required
          />
        </div>
        <button className="submit-button dark-blue" type="submit">Registrera</button>
        <a href={baseUrl + "/login"}>Redan medlem? Logga in</a>
      </form>

      <AlertMessage
        boxOpen={alertBox}
        onClose={() => setAlertBox(false)}
        header={"Registrering misslyckades"}
        message={alertMessage}
      />
    </div>
  );
};

export default SignUpForm;
