import "../assets/css/style.css";
import avatar from "../assets/images/Avatar-Profile-PNG-HD-Image.png";
const Navbar = () => {
  return (
    <div className="navbar row m-0 p-3 bg-light align-items-center">
      <div className="col-4 m-0 p-0 d-flex align-items-center ">
        <div className="m-0 d-flex align-items-center ">
          <i className="bi bi-search position-absolute ms-2"></i>
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="col-8 d-flex align-items-center justify-content-end">
        <div className="col-4 m-0 p-2 border border-1 border-primary  rounded-3 d-flex justify-content-between ">
          <p className="m-0 p-0 w-auto">11-10-2024</p>
          <i className="bi bi-calendar3 w-auto text-primary "></i>
          <p className="m-0 p-0 w-auto">OR</p>
          <p className="m-0 p-0 w-auto">11-10-2024</p>
          <i className="bi bi-calendar3 w-auto text-primary "></i>
        </div>
        <div className="row m-0 p-0 col-4 d-flex justify-content-end">
          <div className="col-10 m-0 p-1 border border-1 rounded-3 d-flex align-items-center ">
            <img
              src={avatar}
              alt="avatar"
              className="rounded-3 bg-secondary "
            />
            <select class="form-select border-0 bg-light" aria-label="Default select example">
              <option selected>
                Hibbanur Rahman
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
