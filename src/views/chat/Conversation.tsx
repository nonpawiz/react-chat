import React from "react";

interface Chat {
  id?: number | null | undefined;
  to?: string | null | undefined;
  message?: string | null | undefined;
  from?: string | null | undefined;
}

function Conversation(props: any) {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const currentTime = `${formattedHours}:${formattedMinutes}`;

  console.log("props");
  console.log(props.from);

  const chat = props.chat;
  return (
    <div
      className="bg--chat w-100"
      style={{ height: "81vh", position: "absolute", overflowY: "scroll", overflowX: "hidden" }}
    >
      <div className="text-center pt-3">
        <span className="badge bg-light">วันนี้</span>
      </div>
      {chat.map((item: any) => {
        if (item.me == 1) {
          return (
            <div className="row" key={item.id}>
              <div className="col-6"></div>
              <div className="col-6">
                <div
                  className="d-flex justify-content-end p-1 mb-0"
                  style={{ lineHeight: "20px" }}
                >
                  <div className="px-1">
                    <div className="bg-white p-1 rounded">
                      <span className="text-navy fs-16 flex-wrap">
                        {item.message}
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-muted fs-12">{currentTime}</span>
                    </div>
                  </div>
                  <div className="img-mask mask-1 px-1">
                    <img src="/nonpawiz.png" alt="" style={{ width: "20px" }} />
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="row" key={item.id}>
              <div className="col-6">
                <div className="d-flex p-1 mb-0" style={{ lineHeight: "20px" }}>
                  <div className="img-mask mask-1 px-1">
                    <img src="/nonpawiz.png" alt="" style={{ width: "20px" }} />
                  </div>
                  <div className="px-1">
                    <div className="bg-white p-1 rounded">
                      <span className="text-navy fs-16 flex-wrap">
                        {item.message}
                      </span>
                    </div>
                    <span className="text-muted fs-12">{currentTime}</span>
                  </div>
                </div>
              </div>
              <div className="col-6"></div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Conversation;
