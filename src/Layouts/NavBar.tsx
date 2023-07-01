// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectUser } from "../redux/userSlice";
import store from "../redux/store";
import { useSelector } from "react-redux";

function NavBar() {
  const user = useSelector(selectUser);

  const handleLogout = () => {
    store.dispatch(logout());
  };

  return (
    <>
      <>
        <nav className="navbar m-0 navbar-expand-lg classic transparent bg-light border-bottom-light pt-0" style={{ background: "#F0F2F5 !important" }}>
          <div className="container-fluid flex-lg-row flex-nowrap align-items-center mt-0 pt-0">
            <div className="navbar-brand w-100 p-1 m-0">
              <Link to="/home">
                <img
                  src="/nonpawiz.png"
                  srcSet="/nonpawiz.png"
                  alt=""
                  style={{ width: "40px" }}
                />
              </Link>
            </div>
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-end" id="offcanvas">
              <div className="offcanvas-header d-lg-none">
                <Link to="/home">
                  <img
                    src="/nonpawiz.png"
                    srcSet="/nonpawiz.png"
                    alt=""
                    style={{ width: "40px" }}
                  />
                </Link>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                <ul className="navbar-nav text-start">
                  <li className="nav-item">
                    <Link className="nav-link" to="/home">
                      หน้าแรก
                    </Link>
                  </li>
                  {user?.username ? (
                    <li className="nav-item d-none d-lg-block">
                      <Link to="/home">
                        <img
                          src="/nonpawiz.png"
                          srcSet="/nonpawiz.png"
                          alt=""
                          style={{ width: "40px" }}
                        />
                      </Link>
                    </li>
                  ) : <></>}

                  {user?.username ? (
                    <>
                      <li className="nav-item dropdown d-block d-lg-none">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          {user.username}
                        </a>
                        <ul className="dropdown-menu p-1 mr-5">
                          <li className="nav-item">
                            <div className="dropdown-item cursor-pointer" onClick={handleLogout}>
                              <i className="uil uil-signout"></i> ออกจากระบบ
                            </div>
                          </li>
                        </ul>
                        {/* <div className="nav-link cursor-pointer" onClick={handleLogout}>
                          ออกจากระบบ
                        </div> */}
                      </li>
                    </>
                  )
                    : (
                      <li className="nav-item">
                        <Link className="nav-link" to="/home">
                          เข้าสู่ระบบ
                        </Link>
                      </li>
                    )

                  }
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li className="dropdown dropdown-submenu dropend">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          Dropdown
                        </a>
                        <ul className="dropdown-menu">
                          <li className="dropdown dropdown-submenu dropend">
                            <a
                              className="dropdown-item dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                            >
                              Dropdown
                            </a>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a className="dropdown-item" href="#">
                                  Action
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="dropdown-item" href="#">
                                  Another Action
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="dropdown-item" href="#">
                              Another Action
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                          Another Action
                        </a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
                <div className="d-lg-none mt-auto pt-6 pb-6 order-4">
                  <a href="mailto:nonpawit.dev@gmail.com" className="link-inverse">
                    nonpawit.dev@gmail.com
                  </a>
                  {/* <br /> 00 (123) 456 78 90 <br /> */}
                  <nav className="nav social social-white mt-4">
                    <a href="#">
                      <i className="uil uil-twitter" />
                    </a>
                    <a href="#">
                      <i className="uil uil-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="uil uil-dribbble" />
                    </a>
                    <a href="#">
                      <i className="uil uil-instagram" />
                    </a>
                    <a href="#">
                      <i className="uil uil-youtube" />
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="navbar-other ms-lg-0">
              <ul className="navbar-nav flex-row align-items-center ms-auto">
                <li className="nav-item d-lg-none">
                  <a data-bs-toggle="offcanvas" href="#offcanvas">
                    <button className="hamburger offcanvas-nav-btn">
                      <span />
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>

    </>
  );
}

export default NavBar;
