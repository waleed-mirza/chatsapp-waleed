import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Chatcontext } from "./chatcontext";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
}));

export default function Input() {
  const classes = useStyles();
  const { nickName, handleNickName } = Chatcontext();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        width="70%"
      >
        <TextField
          onChange={handleNickName}
          margin="dense"
          value={nickName}
          placeholder="Enter your name"
          size="medium"
          color="secondary"
          style={{ width: "80%" }}
          required
        />
        <Link to="/chats">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.root}
          >
            Submit
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
