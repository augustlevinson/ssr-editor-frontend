import { baseUrl } from "../environment.js";

function Header() {
  return (
    <header className="App-header">
        <a href={`${baseUrl}/`}><h1>SSR Editor</h1></a>
    </header>
  );
}

export default Header;
