import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/list";
import { Chat } from "./index";
import { Answer } from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },

  // createStyles({
  //     "chats": {
  //         height: "400px",
  //         padding: "0",
  //         overflow: "auto"
  //     }
  // }),
}));

const Chats = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.chats.map((chat, index) => {
        return (
          <Chat text={chat.text} type={chat.type} key={index.toString()} />
        );
      })}
    </List>
  );
};

export default Chats;
