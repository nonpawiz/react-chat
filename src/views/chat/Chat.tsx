import React from "react";
import NavBar from "../../Layouts/NavBar";
import Conversation from "./Conversation";

function Chat() {
  return (
    <>
      <NavBar />
      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-md-3 d-none d-lg-block">
            <div className="card mb-2">
              <div className="p-2">
                <div className="d-flex justify-content-between fb-link p-1">
                  <div className="d-flex align-items-center ">
                    <div className="img-mask mask-1 px-1">
                      <img
                        src="/nonpawiz.png"
                        alt=""
                        style={{ width: "40px" }}
                      />
                    </div>
                    <div className="d-flex ">
                      <div className="px-1" style={{ lineHeight: "20px" }}>
                        <span>Nonpawit Thonthong</span>
                        <div>
                          <span className="text-muted fs-14">สวัสดีครับ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ lineHeight: "20px" }}>
                    <span className="fs-12">09.00 น.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-2">
              <div className="p-2">
                <div className="d-flex justify-content-between fb-link p-1">
                  <div className="d-flex align-items-center ">
                    <div className="img-mask mask-1 px-1">
                      <img
                        src="/nonpawiz.png"
                        alt=""
                        style={{ width: "40px" }}
                      />
                    </div>
                    <div className="d-flex ">
                      <div className="px-1" style={{ lineHeight: "20px" }}>
                        <span>Nonpawit Thonthong</span>
                        <div>
                          <span className="text-muted fs-14">สวัสดีครับ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ lineHeight: "20px" }}>
                    <span className="fs-12">09.00 น.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card w-100">
              <div className="p-1">
                <div className="d-flex align-items-center p-1 pb-0">
                  <div className="img-mask mask-1 px-1">
                    <img src="/nonpawiz.png" alt="" style={{ width: "40px" }} />
                  </div>
                  <div className="px-1">
                    <span>Nonpawit Thonthong</span>
                  </div>
                </div>
              </div>

              <Conversation />

              <div className="d-flex justify-content-between align-items-center">
                <input
                  id="textInputExample"
                  type="text"
                  className="form-control p-1 border-0 py-2"
                  placeholder="พิมพ์"
                />
                <div className="mx-1">
                  <button className="btn bg-btn-ok text-light border-0 p-1 px-2 w-100">
                    <i className="uil uil-navigator"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default Chat;
