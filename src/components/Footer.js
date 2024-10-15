import { baseUrl } from "../environment.js";

function Footer() {
  return (
    <footer>
      <p className="copyright">&copy; Calle Andersson & August Levinson</p>
      <a href={`${baseUrl}/reset`}>Återställ databas</a>
      <a style={{marginLeft: 1 + 'em'}} href={`${baseUrl}/signup`}>Skapa användare</a>
      <a style={{marginLeft: 1 + 'em'}} href={`${baseUrl}/login`}>Logga in</a>
      <a style={{marginLeft: 1 + 'em'}} href={`${baseUrl}/logout`}>Logga ut</a>
    </footer>
  );
}

export default Footer;
