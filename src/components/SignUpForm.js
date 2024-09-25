import React, { useState, useEffect } from "react";
import RegisterUser from "../models/RegisterUser";
import { useNavigate } from "react-router-dom";


function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    }

    const response = await RegisterUser(user)
    if (response.ok) {
      navigate('/');
    } else {
      navigate('/signup')
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
        <button className="submit-button purple" type="submit">Registrera</button>
      </form>
    </div>
  );
};

export default SignUpForm;
