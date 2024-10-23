import { baseUrl } from "../environment.js";

function Header(props) {
  return (
      <header className="App-header">
          <a href={`${baseUrl}/`}><h1>SSR Editor</h1></a>
          {props.user ? <p>Inloggad: {props.user.email}</p> : <p>Ej inloggad</p>}
      </header>
  );
}

export default Header;
