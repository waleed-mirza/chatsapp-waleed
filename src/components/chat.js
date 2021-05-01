import React, { useRef, useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./dashboad";
import { GlobalContext } from "../context";

const Chat = () => {
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  });
  const breakString = (str) => {
    let brokenString = "";
    const limit = 30;
    for (let i = 0, count = 0; i < str.length; i++) {
      if (str[i] === " ") {
        count = 0;
      }
      if (count >= limit) {
        brokenString += str[i];
        brokenString += "\n";
        count = 0;
      } else {
        count++;
        brokenString += str[i];
      }
    }
    return brokenString;
  };
  const classes = useStyles();
  const { chats, activeTopic } = GlobalContext();
  if (activeTopic) {
    return (
      <div className={classes.chat}>
        <div
          style={{
            height: "auto",
            overflowY: "scroll",
            overflowX: "hidden!important",
            width: "100%",
            boxSizing: "content-box",
            paddingRight: "50px",
          }}
        >
          {chats[activeTopic].map((chat, i) => {
            let string = breakString(chat.msg, 5);
            return (
              <div className={classes.flex2} key={i}>
                <Chip label={chat.from} className={classes.chip} />
                <Typography component="p">{string}</Typography>
                <div ref={divRef} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return <div>Loading</div>;
};

export default Chat;
