import { baseUrl } from "../environment.js";
import { CookiesProvider, useCookies } from "react-cookie";

function Header() {
  const cookies = useCookies();

  return (
    <CookiesProvider>
      <header className="App-header">
          <a href={`${baseUrl}/`}><h1>SSR Editor</h1></a>
          {cookies[0].user ? <p>Inloggad: {cookies[0].user.email}</p> : <p>Ej inloggad</p>}
      </header>
    </CookiesProvider>
  );
}

export default Header;
