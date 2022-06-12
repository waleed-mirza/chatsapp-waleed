import React from "react";
import Input from "./nameinput";
import { AppProvider } from "./chatcontext";
import FriendList from "./friendslist";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default function Chatpp() {
  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route exact path="/">
            <Input />
          </Route>
          <Route path="/chats">
            <FriendList />
          </Route>
        </Switch>
      </AppProvider>
    </Router>
  );
}
