import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chatcontext } from "./chatcontext";
import {
  BrowserRouter as Router,
  useHistory,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
}));

export default function FriendList() {
  const classes = useStyles();
  let history = useHistory();
  const { nickName } = Chatcontext();
  useEffect(() => {
    if (!nickName) {
      history.goBack();
    }
  });
  return <div>hello FriendList component</div>;
}
