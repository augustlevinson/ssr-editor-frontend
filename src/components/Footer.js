import { baseUrl } from "../environment.js";

function Footer(props) {
  return (
    <footer>
      <p className="copyright">&copy; Calle Andersson & August Levinson</p>
      {!props.user && <a href={`${baseUrl}/signup`}>Skapa användare</a>}
      {!props.user && <a href={`${baseUrl}/login` }>Logga in</a>}
      {props.user && <a href={`${baseUrl}/logout`}>Logga ut</a>}
    </footer>
  );
}

export default Footer;
