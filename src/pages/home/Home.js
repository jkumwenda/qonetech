import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NewProject from "components/cards/new_project/NewProject";
import "./Home.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSubmit(formData) {
    // do something with the form data, such as sending it to a server
    console.log(formData);
    setIsModalOpen(false);
  }

  return (
    <div className="Home">
      <div className="HeaderContainer">
        <div className="BreadcrumbContainer">
          <div className="Breadcrumb"></div>
          <div className="CreateProjectContainer">
            <button className="btn btn-primary btn-project">
              Create New Project
            </button>
            <button onClick={() => setIsModalOpen(true)}>Open Form</button>
            <NewProject
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSubmit={handleSubmit}
            />
            <button className="btn btn-primary">
              <FontAwesomeIcon className="FaIcon" icon={faGear} size="lg" />
            </button>
            <button className="btn btn-primary">
              <FontAwesomeIcon className="FaIcon" icon={faSliders} size="lg" />
            </button>
          </div>
        </div>
        <div className="SearchContainer">
          <div className="Search">
            <input className="Input SearchInput" />
            <button className="btn btn-primary btn-search">
              <FontAwesomeIcon
                className="FaIcon"
                icon={faMagnifyingGlass}
                size="ms"
              />
            </button>
          </div>
          <select className="SelectInput">
            <option className="InputOption">Show All</option>
            <option className="InputOption">Show Favorite</option>
            <option className="InputOption">Show On Hold</option>
            <option className="InputOption">Show Open</option>
            <option className="InputOption">Show Closed</option>
            <option className="InputOption">Show Invoiced</option>
          </select>
          <select className="SelectInput">
            <option className="InputOption">Date Ascending</option>
            <option className="InputOption">Date Created Ascending</option>
            <option className="InputOption">Date Created Descending</option>
            <option className="InputOption">Project Manager Ascending</option>
            <option className="InputOption">Project Manager Descending</option>
            <option className="InputOption">Client Ascending</option>
            <option className="InputOption">Client Descending</option>
          </select>
          <select className="SelectInput">
            <option className="InputOption">Show All Managers</option>
            <option className="InputOption">Not Assigned</option>
            <option className="InputOption">My Projects</option>
            <option className="InputOption">Manager A</option>
            <option className="InputOption">Manager B</option>
            <option className="InputOption">Manager C</option>
            <option className="InputOption">Manager D</option>
          </select>
        </div>
      </div>
      <div className="PageTitle">Projects</div>
      <div className="ContentContainer">
        <div className="Card1">
          <div className="CardTitle">
            <div>[CODE] - [PROJECT NAME]</div>
            <div className="CardIcon">
              <FontAwesomeIcon className="FaIcon" icon={faBell} />
              <FontAwesomeIcon className="FaIcon" icon={faStar} />
            </div>
          </div>
          <div className="CardContainer">
            <div className="CardContent">
              <div className="CardContentTitle">Manager :</div>
              <div>Manager</div>
              <div className="CardContentTitle">Client :</div>
              <div>1234 Research Ltd.</div>
              <div className="CardContentTitle">LOI :</div>
              <div>[hh:mm:ss]</div>
              <div className="CardContentTitle">Invite | Response :</div>
              <div>124,456 | 65,789</div>
              <div className="CardContentTitle">Completed :</div>
              <div>521 / 600</div>
              <div className="CardContentTitle">Incidence :</div>
              <div>15% / 16%</div>
            </div>
            <div className="CardNav">
              <div>Open</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Manage</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Insights</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Download</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Set up</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Dispose</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="Card1">
          <div className="CardTitle">
            <div>[CODE] - [PROJECT NAME]</div>
            <div className="CardIcon">
              <FontAwesomeIcon className="FaIcon" icon={faBell} />
              <FontAwesomeIcon className="FaIcon" icon={faStar} />
            </div>
          </div>
          <div className="CardContainer">
            <div className="CardContent">
              <div className="CardContentTitle">Manager :</div>
              <div>Manager</div>
              <div className="CardContentTitle">Client :</div>
              <div>1234 Research Ltd.</div>
              <div className="CardContentTitle">LOI :</div>
              <div>[hh:mm:ss]</div>
              <div className="CardContentTitle">Invite | Response :</div>
              <div>124,456 | 65,789</div>
              <div className="CardContentTitle">Completed :</div>
              <div>521 / 600</div>
              <div className="CardContentTitle">Incidence :</div>
              <div>15% / 16%</div>
            </div>
            <div className="CardNav">
              <div>Open</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Manage</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Insights</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Download</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Set up</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Dispose</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="Card1">
          <div className="CardTitle">
            <div>[CODE] - [PROJECT NAME]</div>
            <div className="CardIcon">
              <FontAwesomeIcon className="FaIcon" icon={faBell} />
              <FontAwesomeIcon className="FaIcon" icon={faStar} />
            </div>
          </div>
          <div className="CardContainer">
            <div className="CardContent">
              <div className="CardContentTitle">Manager :</div>
              <div>Manager</div>
              <div className="CardContentTitle">Client :</div>
              <div>1234 Research Ltd.</div>
              <div className="CardContentTitle">LOI :</div>
              <div>[hh:mm:ss]</div>
              <div className="CardContentTitle">Invite | Response :</div>
              <div>124,456 | 65,789</div>
              <div className="CardContentTitle">Completed :</div>
              <div>521 / 600</div>
              <div className="CardContentTitle">Incidence :</div>
              <div>15% / 16%</div>
            </div>
            <div className="CardNav">
              <div>Open</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Manage</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Insights</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Download</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Set up</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Dispose</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="Card1">
          <div className="CardTitle">
            <div>[CODE] - [PROJECT NAME]</div>
            <div className="CardIcon">
              <FontAwesomeIcon className="FaIcon" icon={faBell} />
              <FontAwesomeIcon className="FaIcon" icon={faStar} />
            </div>
          </div>
          <div className="CardContainer">
            <div className="CardContent">
              <div className="CardContentTitle">Manager :</div>
              <div>Manager</div>
              <div className="CardContentTitle">Client :</div>
              <div>1234 Research Ltd.</div>
              <div className="CardContentTitle">LOI :</div>
              <div>[hh:mm:ss]</div>
              <div className="CardContentTitle">Invite | Response :</div>
              <div>124,456 | 65,789</div>
              <div className="CardContentTitle">Completed :</div>
              <div>521 / 600</div>
              <div className="CardContentTitle">Incidence :</div>
              <div>15% / 16%</div>
            </div>
            <div className="CardNav">
              <div>Open</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Manage</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Insights</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Download</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Set up</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Dispose</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="Card1">
          <div className="CardTitle">
            <div>[CODE] - [PROJECT NAME]</div>
            <div className="CardIcon">
              <FontAwesomeIcon className="FaIcon" icon={faBell} />
              <FontAwesomeIcon className="FaIcon" icon={faStar} />
            </div>
          </div>
          <div className="CardContainer">
            <div className="CardContent">
              <div className="CardContentTitle">Manager :</div>
              <div>Manager</div>
              <div className="CardContentTitle">Client :</div>
              <div>1234 Research Ltd.</div>
              <div className="CardContentTitle">LOI :</div>
              <div>[hh:mm:ss]</div>
              <div className="CardContentTitle">Invite | Response :</div>
              <div>124,456 | 65,789</div>
              <div className="CardContentTitle">Completed :</div>
              <div>521 / 600</div>
              <div className="CardContentTitle">Incidence :</div>
              <div>15% / 16%</div>
            </div>
            <div className="CardNav">
              <div>Open</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Manage</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Insights</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Download</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Set up</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Dispose</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="Card1">
          <div className="CardTitle">
            <div>[CODE] - [PROJECT NAME]</div>
            <div className="CardIcon">
              <FontAwesomeIcon className="FaIcon" icon={faBell} />
              <FontAwesomeIcon className="FaIcon" icon={faStar} />
            </div>
          </div>
          <div className="CardContainer">
            <div className="CardContent">
              <div className="CardContentTitle">Manager :</div>
              <div>Manager</div>
              <div className="CardContentTitle">Client :</div>
              <div>1234 Research Ltd.</div>
              <div className="CardContentTitle">LOI :</div>
              <div>[hh:mm:ss]</div>
              <div className="CardContentTitle">Invite | Response :</div>
              <div>124,456 | 65,789</div>
              <div className="CardContentTitle">Completed :</div>
              <div>521 / 600</div>
              <div className="CardContentTitle">Incidence :</div>
              <div>15% / 16%</div>
            </div>
            <div className="CardNav">
              <div>Open</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Manage</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Insights</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Download</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Set up</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Dispose</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="Card1">
          <div className="CardTitle">
            <div>[CODE] - [PROJECT NAME]</div>
            <div className="CardIcon">
              <FontAwesomeIcon className="FaIcon" icon={faBell} />
              <FontAwesomeIcon className="FaIcon" icon={faStar} />
            </div>
          </div>
          <div className="CardContainer">
            <div className="CardContent">
              <div className="CardContentTitle">Manager :</div>
              <div>Manager</div>
              <div className="CardContentTitle">Client :</div>
              <div>1234 Research Ltd.</div>
              <div className="CardContentTitle">LOI :</div>
              <div>[hh:mm:ss]</div>
              <div className="CardContentTitle">Invite | Response :</div>
              <div>124,456 | 65,789</div>
              <div className="CardContentTitle">Completed :</div>
              <div>521 / 600</div>
              <div className="CardContentTitle">Incidence :</div>
              <div>15% / 16%</div>
            </div>
            <div className="CardNav">
              <div>Open</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Manage</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Insights</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Download</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Set up</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Dispose</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="Card1">
          <div className="CardTitle">
            <div>[CODE] - [PROJECT NAME]</div>
            <div className="CardIcon">
              <FontAwesomeIcon className="FaIcon" icon={faBell} />
              <FontAwesomeIcon className="FaIcon" icon={faStar} />
            </div>
          </div>
          <div className="CardContainer">
            <div className="CardContent">
              <div className="CardContentTitle">Manager :</div>
              <div>Manager</div>
              <div className="CardContentTitle">Client :</div>
              <div>1234 Research Ltd.</div>
              <div className="CardContentTitle">LOI :</div>
              <div>[hh:mm:ss]</div>
              <div className="CardContentTitle">Invite | Response :</div>
              <div>124,456 | 65,789</div>
              <div className="CardContentTitle">Completed :</div>
              <div>521 / 600</div>
              <div className="CardContentTitle">Incidence :</div>
              <div>15% / 16%</div>
            </div>
            <div className="CardNav">
              <div>Open</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Manage</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Insights</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Download</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Set up</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Dispose</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="Card1">
          <div className="CardTitle">
            <div>[CODE] - [PROJECT NAME]</div>
            <div className="CardIcon">
              <FontAwesomeIcon className="FaIcon" icon={faBell} />
              <FontAwesomeIcon className="FaIcon" icon={faStar} />
            </div>
          </div>
          <div className="CardContainer">
            <div className="CardContent">
              <div className="CardContentTitle">Manager :</div>
              <div>Manager</div>
              <div className="CardContentTitle">Client :</div>
              <div>1234 Research Ltd.</div>
              <div className="CardContentTitle">LOI :</div>
              <div>[hh:mm:ss]</div>
              <div className="CardContentTitle">Invite | Response :</div>
              <div>124,456 | 65,789</div>
              <div className="CardContentTitle">Completed :</div>
              <div>521 / 600</div>
              <div className="CardContentTitle">Incidence :</div>
              <div>15% / 16%</div>
            </div>
            <div className="CardNav">
              <div>Open</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Manage</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Insights</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Download</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Set up</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
              <div>Dispose</div>
              <div>
                <FontAwesomeIcon className="FaIcon" icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="PaginationContainer">
        <ul className="Pagination">
          <li>
            <FontAwesomeIcon className="FaIcon" icon={faBackward} />
          </li>
          <li className="Active">1</li>
          <li>2</li>
          <li>3</li>
          <li>...</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>
            <FontAwesomeIcon className="FaIcon" icon={faForward} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
