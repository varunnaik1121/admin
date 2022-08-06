
import React from "react";
import { TailSpin } from "react-loader-spinner";
const Loading = ({ height, width, color }) => {
  return (
    <TailSpin
      height={height}
      width={width}
      color={color}
      ariaLabel="tail-spin-loading"
      radius="2"
      visible={true}
    />
  );
};

export default Loading;
