import axios from "axios";
import React from "react";

const Intermediatory = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const code = queryParameters.get("code");
  console.log(code);
  if (code) {
    axios.post("http://localhost:4000/get-youtube-auth-code", {
      code,
    });
  }
  return <div></div>;
};

export default Intermediatory;
// 192.168.34.19
