import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router";
import { ArrowLeftOutlined } from "@ant-design/icons";

const BackButton = () => {
  const history = useHistory();
  return (
    <Button
      type="link"
      onClick={() => history.goBack()}
      style={{ color: "tomato", padding: 0, fontSize: "0.8em" }}
    >
      <ArrowLeftOutlined />
      Back to user list
    </Button>
  );
};

export default BackButton;
