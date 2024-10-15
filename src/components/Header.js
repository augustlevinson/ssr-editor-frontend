import { baseUrl } from "../environment.js";

function Header() {
  const user = sessionStorage.getItem("user");

  return (
      <header className="App-header">
          <a href={`${baseUrl}/`}><h1>SSR Editor</h1></a>
          {user ? <p>Inloggad: {user.email}</p> : <p>Ej inloggad</p>}
      </header>
  );
}

export default Header;
