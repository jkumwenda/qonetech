import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="HomeNav">
        <FontAwesomeIcon className="FaIcon" icon={faHouseChimney} size="lg" />
        Home
      </div>
      <div className="SideNav">
        <span className="NavTitle">Systems</span>
        <ul>
          <li className="Active">
            <FontAwesomeIcon
              className="FaIcon"
              icon={faCalendarAlt}
              size="lg"
            />
            Projects
          </li>
          <li>
            <FontAwesomeIcon
              className="FaIcon"
              icon={faCalendarAlt}
              size="lg"
            />
            Scheduler
          </li>
          <li>
            <FontAwesomeIcon className="FaIcon" icon={faUserGroup} size="sm" />
            Panels
          </li>
          <li>
            <FontAwesomeIcon
              className="FaIcon"
              icon={faChartSimple}
              size="lg"
            />
            Surveys
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
