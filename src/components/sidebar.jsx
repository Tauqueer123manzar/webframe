import { Link } from "react-router-dom";
import "../assets/css/style.css";

const Sidebar = () => {
  return (
    <div className="sidebar col-2 bg-light">
      <ul className="m-0 p-0">
        <li className="m-0 p-2  mt-1 mb-1 rounded-3  list-unstyled ">
          <Link to="/" className="text-decoration-none text-black">
            <i class="fs-4 bi bi-house pe-3"></i>
            Dashboard
          </Link>
        </li>
        <li className="m-0 p-2  mt-1 mb-1 rounded-3  list-unstyled ">
          <Link to="/contents" className="text-decoration-none text-black">
            <i class="fs-4 bi bi-file-earmark pe-3"></i>
            Content
          </Link>
        </li>
        <li className="m-0 p-2  mt-1 mb-1 rounded-3  list-unstyled ">
          <a href="#" className="text-decoration-none text-black">
            <i class="fs-4 bi bi-people pe-3"></i>
            Team
          </a>
        </li>
        <li className="m-0 p-2  mt-1 mb-1 rounded-3  list-unstyled ">
          <a href="#" className="text-decoration-none text-black">
            <i class="fs-4 bi bi-person-square pe-3"></i>
            User
          </a>
        </li>
        <li className="m-0 p-2  mt-1 mb-1 rounded-3  list-unstyled ">
          <a href="#" className="text-decoration-none text-black">
            <i class="fs-4 bi bi-pc-display pe-3"></i>
            App/Web
          </a>
        </li>
        <li className="m-0 p-2  mt-1 mb-1 rounded-3  list-unstyled ">
          <a href="#" className="text-decoration-none text-black">
            <i class="fs-4 bi bi-graph-up-arrow pe-3"></i>
            Analytics
          </a>
        </li>
        <li className="m-0 p-2  mt-1 mb-1 rounded-3  list-unstyled ">
          <a href="#" className="text-decoration-none text-black">
            <i class="fs-4 bi bi-youtube pe-3"></i>
            Media
          </a>
        </li>
        <li className="m-0 p-2  mt-1 mb-1 rounded-3  list-unstyled ">
          <a href="#" className="text-decoration-none text-black">
            <i class="fs-4 bi bi-bell pe-3"></i>
            Notification
          </a>
        </li>
        <li className="m-0 p-2  mt-1 mb-1 rounded-3  list-unstyled ">
          <a href="#" className="text-decoration-none text-black">
            <i class="fs-4 bi bi-gear pe-3"></i>
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
