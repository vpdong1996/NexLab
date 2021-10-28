import React from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
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
      {isLoading ? (
        <Spinner />
      ) : (
        <div
          className="content-container"
          style={{ padding: md ? 100 : 25, flex: 1 }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ContentWrapper;
