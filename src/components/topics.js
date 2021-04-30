import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles } from "./dashboad";
import { GlobalContext } from "../context";
const Topics = () => {
  const { chats, handleActiveTopic } = GlobalContext();
  const topics = Object.keys(chats);
  const classes = useStyles();
  return (
    <div className={classes.topics}>
      <List>
        {topics.map((topic) => (
          <ListItem
            button
            key={topic}
            onClick={handleActiveTopic}
            className={classes.topicbutton}
          >
            <ListItemText primary={topic} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Topics;
