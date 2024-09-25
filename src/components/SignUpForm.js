import React, { useState } from "react";
import RegisterUser from "../models/RegisterUser";
import { useNavigate } from "react-router-dom";


function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    }

    if (password === passwordConfirmation) {
      const response = await RegisterUser(user)

      if (response.ok) {
        navigate('/');
      } else {
        navigate('/signup')
      }
    } else {
      // fixa detta snyggare senare
      alert("Lösenorden stämmer inte överens.")
    }
  };

  return (
    <div className="doc-wrapper">
      <form onSubmit={handleSignup}>
        <div>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-post..."
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ange lösenord..."
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="passwordConfirm"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Bekräfta lösenord..."
            required
          />
        </div>
        <button className="submit-button purple" type="submit">Registrera</button>
      </form>
    </div>
  );
};

export default SignUpForm;
