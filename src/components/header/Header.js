import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <icon>
          <FontAwesomeIcon icon={faBars} />
        </icon>
        <div>
          <span className="Primary">Q ONE</span>
          <span>TECH</span>
        </div>
      </div>
      <div className="User">
        <FontAwesomeIcon className="UserIcon" icon={faUserCircle} size="xl" />
      </div>
    </div>
  );
}

export default Header;
