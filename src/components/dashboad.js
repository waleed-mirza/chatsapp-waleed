import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Topics from "./topics";
import Chat from "./chat";
import { GlobalContext } from "../context";
import Box from "@material-ui/core/Box";
import { Scrollbars } from "react-custom-scrollbars";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor: "#000000",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > *": { margin: "0px 8px 0px 0px" },
  },
  flex2: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "95%",
    height: "auto",
    "& > *": { marginRight: "5px", marginTop: "3px" },
  },
  topics: {
    width: "20%",
    height: "400px",
    backgroundColor: "#F47806",
    borderRadius: "20px",
  },
  chat: {
    width: "80%",
    height: "360px",
    padding: "20px",
    backgroundColor: "#FC9B40",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  input: {
    width: "65%",
    backgroundColor: "#FC9B40",
    color: "#000000",
    borderRadius: "20px",
  },
  button: {
    width: "15%",
    padding: "15px 15px",
    color: "#000000",
    backgroundColor: "#F47806",
    borderRadius: "20px",
    fontWeight: "700",
  },
  topicbutton: {
    marginBottom: "5px",
    "&:hover": { backgroundColor: "#FC9B40", color: "white" },
  },
  topicchange: { width: "20%", color: "white!important" },
  chip: { backgroundColor: "#F50056", color: "#000000" },
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
        <Box mb={2}>
          <Typography variant="h4" component="h5">
            <Box className={classes.topicchange}>
              Kama<span style={{ color: "#F47806" }}>kazi</span>
            </Box>
          </Typography>
        </Box>
        <div className={classes.flex}>
          <Topics />
          <Chat />
        </div>
        <Box mt={1}>
          <div className={classes.flex}>
            <Typography
              className={classes.topicchange}
              variant="h5"
              component="h6"
              style={{ textAlign: "center" }}
            >
              <Box>{activeTopic}</Box>
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Send a message"
              className={classes.input}
              value={textField}
              required={true}
              onChange={handleChange}
              onKeyPress={(e) => {
                if (textField) {
                  if (e.key === "Enter") {
                    sendMessage({
                      from: user,
                      msg: textField,
                      topic: activeTopic,
                    });
                    emptyInput();
                  }
                }
              }}
            />
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => {
                if (textField) {
                  sendMessage({
                    from: user,
                    msg: textField,
                    topic: activeTopic,
                  });
                  emptyInput();
                }
              }}
            >
              Send
            </Button>
          </div>
        </Box>
      </Paper>
    </div>
  );
}
