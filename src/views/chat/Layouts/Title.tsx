import React from "react";

interface Props {
  to?: string;
}

function Title(props: Props) {
  return (
    <>
      <div className="bg-light">
        <div className="p-2">
          <span>To : {props.to}</span>
        </div>
      </div>
    </>
  );
}

export default Title;
