import React from "react";
import Header from "./Header";
import Tittle from "../shared/Tittle";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";

const AppLayout = () => (WrappedComponent) => {
    return (props) => {
  return (
    <div>
      <Tittle />
      <Header />
      <WrappedComponent {...props} />

      <Grid container height={"calc(100vh - 4rem)"}>
        <Grid item sm={4} md={3} sx={{
            display: { xs: "none" , sm: "block"},
        }} height={"100%"}>
          <ChatList chats={[1,2,3,4,5]}/>
        </Grid>
        <Grid item xs={12} md={5} lg={6} height={"100%"}>
          firrst
        </Grid>
        <Grid item md={4} lg={3} height={"100%"}>
          firrst
        </Grid>
      </Grid>
    </div>
  );
};
};

export default AppLayout;
