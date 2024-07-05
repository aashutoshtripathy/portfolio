import React from "react";
import { Link } from "../styles/styledComponent";
import { Box, Stack, Typography } from "@mui/material";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessage,
  index = 0,
  handleDeleteChatOpen,
}) => {
  return <div>
    <Link sx={{padding: "0"}} to={`/chat/${_id}`}>
    <div style={{
      display: "flex",
      gap: "1rem",
      alignItems: "center",
      backgroundColor: sameSender? "black" : "white",
      color: sameSender ? "white" : "unset",
      borderRadius: "5px",
      padding: "1rem",
    }}>
      {/* avtar card */}
      <Stack>
        <Typography>{name}</Typography>
        {newMessage && (
          <Typography>{newMessage.count} New Message</Typography>
        )}
      </Stack>
      {isOnline && (
        <Box sx={{
          backgroundColor: "green",
          width: "10px",
          height: "10px",
          position: "absolute",
          borderRadius: "50%",
          top: "50%",
          right: "1rem",
          transform: "translateY(-50%)"
        }}/>
      )}
    </div>
    </Link>
  </div>;
};

export default ChatItem;
