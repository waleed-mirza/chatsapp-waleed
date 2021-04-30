import React from "react";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./dashboad";
import { GlobalContext } from "../context";

const Chat = () => {
  const classes = useStyles();
  const { chats, activeTopic } = GlobalContext();
  if (activeTopic) {
    return (
      <div className={classes.chat}>
        {chats[activeTopic].map((chat, i) => (
          <div className={classes.flex2} key={i}>
            <Chip label={chat.from} className={classes.chip} />
            <Typography component="p">{chat.msg}</Typography>
          </div>
        ))}
      </div>
    );
  }
  return <div>Loading</div>;
};

export default Chat;
