import "antd/dist/antd.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./pages/users";
import Posts from "./pages/posts";
import { message } from "antd";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    message.config({
      top: 60,
      maxCount: 1,
      duration: 2,
    });
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route exact path="/:userId/posts">
            <Posts />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
