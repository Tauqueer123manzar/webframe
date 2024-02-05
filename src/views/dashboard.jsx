import "../assets/css/style.css";
import articleImg1 from '../assets/images/top-article-1.png'

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
          <a href="#" className="w-auto text-decoration-none">See all</a>
        </div>
        <div className="row m-0 p-0">
            <div className="col-4">
              <div className="card border border-0 ">
                <img src={articleImg1} alt="article-1" />
                <div className="row m-0 p-0">
                  <p className="m-0 p-0 w-auto "><b>BUSINESS</b> . <span>20 Sep 2022</span> </p>
                  <div className="col-4">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
