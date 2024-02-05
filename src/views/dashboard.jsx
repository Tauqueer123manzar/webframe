import "../assets/css/style.css";
import articleImg1 from "../assets/images/top-article-11.jpg";
import topStoryProfile from "../assets/images/top-article-profile.jpg";
const Dashboard = () => {
  return (
    <div className="dashboard row m-0 p-4">
      <h1 className="m-0 p-0">Hello Admin,</h1>
      <p className="m-0 p-0 text-secondary ">
        This is what we got you for today
      </p>
      <div className="infoCard-row row m-0 p-0 mt-5">
        <div className="col-3 m-0 ps-0">
          <div className="card  col-12 m-0 p-4 ps-2 pe-2  border border-0 d-flex flex-row align-items-center  ">
            <div className="icon col-3 m-0 p-3 pt-3 pb-3 rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-receipt m-0 p-0 fs-3 w-auto "></i>
            </div>
            <div className="col-8 m-0 p-0 ps-2">
              <h4 className="m-0 p-0">Articles</h4>
              <p className="m-0 p-0">4,950 New Updates</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card  col-12 m-0 p-4 ps-2 pe-2  border border-0 d-flex flex-row align-items-center  ">
            <div className="icon col-3 m-0 p-3 pt-3 pb-3 rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-receipt m-0 p-0 fs-3 w-auto "></i>
            </div>
            <div className="col-8 m-0 p-0 ps-2">
              <h4 className="m-0 p-0">Categories</h4>
              <p className="m-0 p-0">10,275 New Updates</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card  col-12 m-0 p-4 ps-2 pe-2  border border-0 d-flex flex-row align-items-center  ">
            <div className="icon col-3 m-0 p-3 pt-3 pb-3 rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-receipt m-0 p-0 fs-3 w-auto "></i>
            </div>
            <div className="col-8 m-0 p-0 ps-2">
              <h4 className="m-0 p-0">Stories</h4>
              <p className="m-0 p-0">4,293 New Updates</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card  col-12 m-0 p-4 ps-2 pe-2  border border-0 d-flex flex-row align-items-center  ">
            <div className="icon col-3 m-0 p-3 pt-3 pb-3 rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-receipt m-0 p-0 fs-3 w-auto "></i>
            </div>
            <div className="col-8 m-0 p-0 ps-2">
              <h4 className="m-0 p-0">Advertisement</h4>
              <p className="m-0 p-0">928 New Updates</p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-articles row m-0 p-0 mt-5">
        <div className="row m-0 p-0 justify-content-between ">
          <h5 className="m-0 p-0 w-auto">Top Articles</h5>
          <a href="#" className="w-auto text-decoration-none">
            See all
          </a>
        </div>
        <div className="row m-0 p-0 mt-3">
          <div className="col-4">
            <div className="card border border-0 rounded-3 p-3">
              <img src={articleImg1} alt="article-1" className="rounded-4" />
              <div className="row m-0 p-0 pt-3 justify-content-between align-items-center">
                <p className="business m-0 p-0 w-auto">
                  <b>BUSINESS</b> .{" "}
                  <span className="text-secondary">20 Sep 2022</span>{" "}
                </p>
                <div className="w-auto article-profile d-flex align-items-center ">
                  <img
                    src={topStoryProfile}
                    alt="profile"
                    className="rounded-circle"
                  />
                  <p className="fw-bold w-auto m-0 p-0 ps-2">Hibban</p>
                </div>
              </div>

              <div className="row m-0 p-0 mt-2 justify-content-between ">
                <h6 className="m-0 p-0 w-auto ">
                  7 Rules of Effective Branding
                </h6>
                <div className="created rounded-1 w-auto p-1 ps-3 pe-3">
                  <p className="m-0 p-0">Created</p>
                </div>
              </div>

              <p className="text-secondary mt-2">
                Why Branding matters for your Business
              </p>

              <div className="branding row m-0 p-0">
                <div className="p-2 m-2 w-auto rounded-2 d-flex align-items-center justify-content-center ">
                  <p className="m-0 p-0 text-secondary fw-bold ">Branding</p>
                </div>
                <div className="p-2 m-2  w-auto rounded-2 d-flex align-items-center justify-content-center ">
                  <p className="m-0 p-0 text-secondary fw-bold ">
                    Communication
                  </p>
                </div>
                <div className="p-2 m-2 w-auto rounded-2 d-flex align-items-center justify-content-center ">
                  <p className="m-0 p-0 text-secondary fw-bold ">Branding</p>
                </div>
              </div>

              <div className="row m-0 p-0 align-items-center mt-3">
                <button className="m-0 p-2 btn btn-lg fw-bold col-10">View</button>
                <i class="bi bi-three-dots w-auto fs-3"></i>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card border border-0 rounded-3 p-3">
              <img src={articleImg1} alt="article-1" className="rounded-4" />
              <div className="row m-0 p-0 pt-3 justify-content-between align-items-center">
                <p className="business m-0 p-0 w-auto">
                  <b>BUSINESS</b> .{" "}
                  <span className="text-secondary">20 Sep 2022</span>{" "}
                </p>
                <div className="w-auto article-profile d-flex align-items-center ">
                  <img
                    src={topStoryProfile}
                    alt="profile"
                    className="rounded-circle"
                  />
                  <p className="fw-bold w-auto m-0 p-0 ps-2">Hibban</p>
                </div>
              </div>

              <div className="row m-0 p-0 mt-2 justify-content-between ">
                <h6 className="m-0 p-0 w-auto ">
                  7 Rules of Effective Branding
                </h6>
                <div className="published rounded-1 w-auto p-1 ps-3 pe-3">
                  <p className="m-0 p-0">Published</p>
                </div>
              </div>

              <p className="text-secondary mt-2">
                Why Branding matters for your Business
              </p>

              <div className="branding row m-0 p-0">
                <div className="p-2 m-2 w-auto rounded-2 d-flex align-items-center justify-content-center ">
                  <p className="m-0 p-0 text-secondary fw-bold ">Branding</p>
                </div>
                <div className="p-2 m-2  w-auto rounded-2 d-flex align-items-center justify-content-center ">
                  <p className="m-0 p-0 text-secondary fw-bold ">
                    Communication
                  </p>
                </div>
                <div className="p-2 m-2 w-auto rounded-2 d-flex align-items-center justify-content-center ">
                  <p className="m-0 p-0 text-secondary fw-bold ">Branding</p>
                </div>
              </div>

              <div className="row m-0 p-0 align-items-center mt-3">
                <button className="m-0 p-2 btn btn-lg fw-bold col-10">View</button>
                <i class="bi bi-three-dots w-auto fs-3"></i>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card border border-0 rounded-3 p-3">
              <img src={articleImg1} alt="article-1" className="rounded-4" />
              <div className="row m-0 p-0 pt-3 justify-content-between align-items-center">
                <p className="business m-0 p-0 w-auto">
                  <b>BUSINESS</b> .{" "}
                  <span className="text-secondary">20 Sep 2022</span>{" "}
                </p>
                <div className="w-auto article-profile d-flex align-items-center ">
                  <img
                    src={topStoryProfile}
                    alt="profile"
                    className="rounded-circle"
                  />
                  <p className="fw-bold w-auto m-0 p-0 ps-2">Hibban</p>
                </div>
              </div>

              <div className="row m-0 p-0 mt-2 justify-content-between ">
                <h6 className="m-0 p-0 w-auto ">
                  7 Rules of Effective Branding
                </h6>
                <div className="created rounded-1 w-auto p-1 ps-3 pe-3">
                  <p className="m-0 p-0">Created</p>
                </div>
              </div>

              <p className="text-secondary mt-2">
                Why Branding matters for your Business
              </p>

              <div className="branding row m-0 p-0">
                <div className="p-2 m-2 w-auto rounded-2 d-flex align-items-center justify-content-center ">
                  <p className="m-0 p-0 text-secondary fw-bold ">Branding</p>
                </div>
                <div className="p-2 m-2  w-auto rounded-2 d-flex align-items-center justify-content-center ">
                  <p className="m-0 p-0 text-secondary fw-bold ">
                    Communication
                  </p>
                </div>
                <div className="p-2 m-2 w-auto rounded-2 d-flex align-items-center justify-content-center ">
                  <p className="m-0 p-0 text-secondary fw-bold ">Branding</p>
                </div>
              </div>

              <div className="row m-0 p-0 align-items-center mt-3">
                <button className="m-0 p-2 btn btn-lg fw-bold col-10">View</button>
                <i class="bi bi-three-dots w-auto fs-3"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
