import React, { useState } from "react";
import LoginUser from "../models/LoginUser";
import UpdateUser from "../models/UpdateUser";
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    let user = {
      email: email,
      password: password
    }

    const response = await LoginUser(user)

    // fixa alertsen snyggare senare
    // 1. användaren finns inte
    // 2. lösenordet matchar inte användaren
    if (response.success) {

      const updateUser = {
        ...user,
        token: response.jwtToken
      }

      // lägger till token till användaren
      // ta bort token om utloggad + ev. andra villkor vi vill ha (ej implementerad ännu)
      await UpdateUser(updateUser)

      navigate('/');
    } else {
      if (response.reason === "no user") {
        return alert("Användaren finns inte.")
      } else if (response.reason === "wrong password") {
        return alert("Felaktigt lösenord.")
      }
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
