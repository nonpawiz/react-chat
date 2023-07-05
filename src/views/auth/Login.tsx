import { useState } from "react";
import axios from "axios";
import { login, logout } from "../../redux/userSlice";
import store from "../../redux/store";
import Meta from "../../Layouts/Meta";

function Login() {
  const [name, setName] = useState("admin");
  const [pass, setPass] = useState("admin12345");

  function auth() {
    if (name == "" && pass == "") {
      alert("Enter the Firstname & Password");
    } else if (name == "") {
      alert("Enter the Firstname");
    } else if (pass == "") {
      alert("Enter the Password");
    } else {
      const formData = new FormData();
      formData.append("username", name);
      formData.append("password", pass);

      const option = {
        method: "post",
        url: "https://bem.services/jwt_login",
        data: formData,
      };

      axios(option)
        .then(function (response) {
          // console.log(response.data.data.name);
          // setUser(response.data.data)
          const data = response.data.data;
          if (data.name) {
            store.dispatch(
              login({
                username: data.name,
                role: data.role,
                token: data.token,
                loggedIn: true,
              })
            );
            setTimeout(() => {
              store.dispatch(logout());
            }, 86400000); //24ชม. เตะออก
          } else {
            alert(data[1]);
          }
        })
        .catch(function (error) {
          alert("Server not Responding");
          console.log(error);
        });
    }
  }

  return (
    <>
      <Meta
        title="Login"
        description="Login system"
        name="Consult SIIT"
        type="article"
      />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="card border-0">
          <div className="card-body">
            <div className="text-center mb-3">
              <img src="/nonpawiz.png" style={{ width: "50px" }} alt="" />
            </div>
            <div className="text-center mb-3">
              <span className="text-main fw-normal">เข้าสู่ระบบ</span>
            </div>
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="form-floating mb-3">
                  <input
                    type="fname"
                    className="form-control"
                    id="name"
                    placeholder="ชื่อผู้ใช้"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <label htmlFor="floatingInput">ชื่อผู้ใช้</label>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="pass"
                    placeholder="รหัสผ่าน"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                  />
                  <label htmlFor="floatingPassword">รหัสผ่าน</label>
                </div>
              </div>
              <div className="col-md-12">
                <button
                  className="btn bg-main border-0 text-light p-2 fs-16 w-100 fw-normal"
                  onClick={auth}
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
