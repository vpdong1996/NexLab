import React from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { NavBar } from "../navbar";
import Spinner from "../spinner-indicator";

interface ContainerWrapper {
  classes: string[];
  children: React.ReactNode;
  isLoading: boolean;
}

const ContentWrapper: React.FC<ContainerWrapper> = ({
  classes = [],
  children,
  isLoading = false,
}) => {
  const { md } = useBreakpoint();
  return (
    <div className={classes.join(" ")}>
      <NavBar />

      {isLoading ? (
        <Spinner />
      ) : (
        <div style={{ margin: md ? 100 : 25 }}>{children}</div>
      )}
    </div>
  );
};

export default ContentWrapper;
