import React, { useState } from "react";
import LoginUser from "../models/LoginUser";
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    }

    const response = await LoginUser(user)

    if (response.ok) {
      navigate('/');
    } else {
      navigate('/login')
    }
  };

  return (
    <div className="doc-wrapper">
      <form onSubmit={handleLogin}>
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
        <button className="submit-button purple" type="submit">Logga in</button>
      </form>
    </div>
  );
};

export default LoginForm;
