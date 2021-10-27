import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

const Spinner = () => {
  return <Spin className="spinner" indicator={antIcon} />;
};

export default Spinner;
