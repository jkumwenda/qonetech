import { Outlet } from "react-router-dom";
import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import "./AppLayout.css";

function AppLayout() {
  return (
    <div className="AppLayout">
      <Header />
      <div className="Content">
        <Sidebar />
        <div className="Page">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
