import React from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { NavBar } from "../navbar";

interface ContainerWrapper {
  children: React.ReactNode;
}

const ContentWrapper: React.FC<ContainerWrapper> = ({ children }) => {
  const { md } = useBreakpoint();
  return (
    <>
      <NavBar />
      <div style={{ margin: md ? 100 : 25 }}>{children}</div>
    </>
  );
};

export default ContentWrapper;
