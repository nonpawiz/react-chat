import { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { logout } from "../../redux/userSlice";
// import store from "../../store/store";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../redux/userSlice";

function NavBar() {
//   const user = useSelector(selectUser);

//   const handleLogout = (e) => {
//     const dispatch = useDispatch;
//     e.preventDefault();
//     // dispatch(logout());
//     store.dispatch(logout());
//   };

  return (
    <>
      <header className="wrapper myfont">
        <nav className="navbar navbar-expand-lg navbar-light bg-main">
          <div className="container-fluid py-2 d-flex justify-content-between">
            <div
              className=""
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
            >
              <i className="uil uil-bars text-light fs-25 cursor-pointer"></i>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <h4 className="text-light mx-3 my-0 fw-normal fs-16">
                {/* {props.text.title} */} 
              </h4>
            </div>
            <div className="">
              <div
                className="cursor-pointer"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <i className="uil uil-wifi text-light fs-25"></i>
              </div>
            </div>
          </div>
        </nav>

        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header mb-0 p-3">
            <img
              src="/bem-logo-light.png"
              className="p-0"
              alt=""
              style={{ width: "100px" }}
            />
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body px-3">
            <div className="dropdown mt-0">
              <div className="py-0 border-bottom d-inline-block text-truncate w-100">
                <span className="fw-normal p-1 px-0  text-light">
                  <i className="uil uil-user"></i> 
                  {/* {user.username} */}Admin
                </span>
              </div>
              <div className="py-2 rounded cursor-pointer" id="_home">
                <Link to="/" className="fw-normal text-light fs-16 px-3">
                  หน้าหลัก
                </Link>
              </div>
              <div className="py-2 rounded cursor-pointer" id="_home">
                <Link to="/dsadsa" className="fw-normal text-light fs-16 px-3">
                  หน้าหลัก
                </Link>
              </div>

              <div
                className="accordion accordion-wrapper mb-1"
                id="accordionSimpleExample"
              >
                <div className="card plain accordion-item mx-3 py-0">
                  <div className="card-header pb-1" id="headingSimpleOne">
                    <button
                      className="accordion-button fw-normal text-light fs-16 px-0 mx-0 collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSimpleOne"
                      aria-expanded="false"
                      aria-controls="collapseSimpleOne"
                    >
                      {" "}
                      แผนที่
                    </button>
                  </div>
                  <div
                    id="collapseSimpleOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSimpleOne"
                    data-bs-parent="#accordionSimpleExample"
                  >
                    <div className="card-body px-2 py-0">
                      <div
                        className="py-2 rounded cursor-pointer"
                        id="_inventory"
                      >
                        <span className="fw-normal text-light fs-16 px-3">
                          <i className="uil uil-map"></i> Inventory
                        </span>
                      </div>
                      <div
                        className="py-2 rounded cursor-pointer"
                        id="_progress"
                      >
                        <span className="fw-normal text-light fs-16 px-3">
                          <i className="uil uil-analytics"></i> Progress
                        </span>
                      </div>
                      <div
                        className="py-2 rounded cursor-pointer"
                        id="_inspection"
                      >
                        <span className="fw-normal text-light fs-16 px-3">
                          <i className="uil uil-exclamation-triangle"></i>{" "}
                          Inspection
                        </span>
                      </div>
                      <div
                        className="py-2 rounded cursor-pointer"
                        id="_pavement"
                      >
                        <span className="fw-normal text-light fs-16 px-3">
                          <i className="uil uil-no-entry"></i> Pavement
                        </span>
                      </div>
                      <div
                        className="py-2 rounded cursor-pointer"
                        id="_severity"
                      >
                        <span className="fw-normal text-light fs-16 px-3">
                          <i className="uil uil-image-broken"></i> Severity
                        </span>
                      </div>
                      <div
                        className="py-2 rounded cursor-pointer"
                        id="_maintenance"
                      >
                        <span className="fw-normal text-light fs-16 px-3">
                          <i className="uil uil-wrench"></i> Maintenance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="accordion accordion-wrapper mb-1"
                id="accordionSimpleExampletwo"
              >
                <div className="card plain accordion-item mx-3 py-0">
                  <div className="card-header pb-1" id="headingSimpleTwo">
                    <button
                      className="accordion-button fw-normal text-light fs-16 px-0 mx-0 collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSimpleTwo"
                      aria-expanded="false"
                      aria-controls="collapseSimpleTwo"
                    >
                      {" "}
                      ตั้งค่า
                    </button>
                  </div>
                  <div
                    id="collapseSimpleTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSimpleTwo"
                    data-bs-parent="#accordionSimpleExampletwo"
                  >
                    <div className="card-body px-2 py-0">
                      <div
                        className="py-2 rounded cursor-pointer"
                        id="_userlist"
                      >
                        <span className="fw-normal text-light fs-16 px-3">
                          ข้อมูลผู้ใช้งาน
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-100"
                style={{
                  bottom: "10px",
                  position: "absolute",
                }}
              >
                {/* <a
                  className="py-2 rounded cursor-pointer"
                //   onClick={(e) => handleLogout(e)}
                >
                  <span className="fw-normal text-light fs-16 px-3">
                    <i className="uil uil-signin"></i> ออกจากระบบ
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
