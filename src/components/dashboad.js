import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Topics from "./topics";
import Chat from "./chat";
import { GlobalContext } from "../context";

export const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(3, 2), margin: "20px" },
  flex: { display: "flex", alignItems: "center" },
  topics: { width: "30%", height: "400px", borderRight: "2px solid #ccc" },
  chat: { width: "70%", height: "400px", padding: "20px" },
  input: { width: "85%" },
  button: { width: "15%" },
}));
export default function Dashboad() {
  const {
    textField,
    handleChange,
    activeTopic,
    sendMessage,
    emptyInput,
    user,
  } = GlobalContext();
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h5" style={{ textAlign: "center" }}>
          Chats
        </Typography>
        <Typography variant="h5" component="h6" style={{ textAlign: "center" }}>
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
          <Topics />
          <Chat />
        </div>
        <div className={classes.flex}>
          <TextField
            id="standard-name"
            label="Send a Message"
            className={classes.input}
            value={textField}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              sendMessage({ from: user, msg: textField, topic: activeTopic });
              emptyInput();
            }}
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
}
