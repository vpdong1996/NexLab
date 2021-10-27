import React, { useEffect, useState } from "react";
import { message } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import useRequest from "./services/useRequest";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./pages/users";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const [date, setDate] = useState<any>(null);
  // const { data } = useRequest<Post[]>({ url: POST_URL });
  const { md } = useBreakpoint();

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
